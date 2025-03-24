import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Dict
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig
from peft import get_peft_model, PeftModel
import re
import uvicorn
from sentence_transformers import SentenceTransformer, util

# 设置使用的GPU设备
os.environ['CUDA_VISIBLE_DEVICES'] = "0"

app = FastAPI(
    title="FT_ChatGLM3-6B API",
    description="API for FT_ChatGLM3-6B model",
    version="1.0.0"
)

# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # 允许所有来源
    allow_credentials=False,    # 不允许发送Cookie（因为allow_origins为["*"]）
    allow_methods=["*"],        # 允许所有HTTP方法
    allow_headers=["*"],        # 允许所有HTTP头
)

# 定义Pydantic模型
class Query(BaseModel):
    features: List[str] = Field(default_factory=list)
    messages: List[Dict[str, str]] = Field(default_factory=list)

# 全局变量用于存储模型和分词器
model = None
embedding_model = None
tokenizer = None
# gen_kwargs = {"max_length": 8192, "num_beams": 1, "do_sample": False, "top_p": 0.8, "temperature": 0.0, "logits_processor": None}
gen_kwargs = {"max_length": 8192, "num_beams": 1, "do_sample": False, "logits_processor": None}
eos_token_id = None
predefined_terms = ['无症状', '情绪低落', '兴趣减退', '性欲减退', '集中注意力能力下降', '决断困难', '自我价值感低', '过分的内疚感', '夸大妄想', '关系妄想', '被害妄想', '对未来感觉无望', '自杀意念', '睡眠紊乱', '睡眠过多', '食欲改变', '体重改变', '坐立不安', '行为迟缓', '精力减退', '易激惹', '精力旺盛', '言语急迫', '思维奔逸', '睡眠需求减少', '冲动鲁莽行为', '性欲增强', '游离性焦虑', '预期性焦虑', '肌肉紧张', '腹部不适', '心悸', '多汗', '发抖', '口干', '睡眠障碍', '强迫思维', '强迫行为', '产生幻觉', '思维紊乱', '被控制体验', '思维贫乏', '言语贫乏', '意志缺乏', '行为紊乱']
embeddings_predefined_terms = None

def map_to_predefined_term(single_output):
    embedding_output = embedding_model.encode(single_output)

    # 计算余弦相似度
    similarities = util.cos_sim(embedding_output, embeddings_predefined_terms)[0]

    # 找到最佳匹配
    best_match_index = similarities.argmax()
    return predefined_terms[best_match_index]

def get_ft_model_response(latest_message):
    history = [{
        "role": "system",
        "content": "你是一位经验丰富的心理学专家，擅长从患者的自我描述中概括患者的心理特征。\n\n# 心理特征列表：\n- 无症状\n- 情绪低落\n- 兴趣减退\n- 性欲减退\n- 集中注意力能力下降\n- 决断困难\n- 自我价值感低\n- 过分的内疚感\n- 夸大妄想\n- 关系妄想\n- 被害妄想\n- 对未来感觉无望\n- 自杀意念\n- 睡眠紊乱\n- 睡眠过多\n- 食欲改变\n- 体重改变\n- 坐立不安\n- 行为迟缓\n- 精力减退\n- 易激惹\n- 精力旺盛\n- 言语急迫\n- 思维奔逸\n- 睡眠需求减少\n- 冲动鲁莽行为\n- 性欲增强\n- 游离性焦虑\n- 预期性焦虑\n- 肌肉紧张\n- 腹部不适\n- 心悸\n- 多汗\n- 发抖\n- 口干\n- 睡眠障碍\n- 强迫思维\n- 强迫行为\n- 产生幻觉\n- 思维紊乱\n- 被控制体验\n- 思维贫乏\n- 言语贫乏\n- 意志缺乏\n- 行为紊乱\n\n# 具体要求：\n- 概括的心理特征必须在自我描述中**非常直接的体现**。\n- 概括的心理特征必须来自**心理特征列表**。"
    }]
    text = "自我描述：" + latest_message + "\n\n心理特征（以 markdown 格式输出）：\n| 序号 | 心理特征 |\n| ---- | ---- |\n"

    # 模型生成回答相关步骤
    gen_kwargs = {"max_length": 1024, "num_beams": 1, "do_sample": False, "logits_processor": None}
    input = tokenizer.build_chat_input(text, history, role="user")
    input = input.to(model.device)
    outputs = model.generate(**input, **gen_kwargs, eos_token_id=eos_token_id)
    outputs = outputs.tolist()[0][len(input["input_ids"][0]):-1]
    response = tokenizer.decode(outputs)
    history.append({
        "role": "user",
        "content": text
    })
    response, history = model.process_response(response, history)
    return response

@app.on_event("startup")
def load_model():
    global model, tokenizer, eos_token_id, embedding_model, embeddings_predefined_terms
    model_dir = "/mnt/nfs/penglc/nlp_model/ZhipuAI/chatglm3-6b"
    try:
        embedding_model = SentenceTransformer('/mnt/nfs/penglc/nlp_model/thomas/m3e-base')
        # 编码词条
        embeddings_predefined_terms = embedding_model.encode(predefined_terms)
        tokenizer = AutoTokenizer.from_pretrained(model_dir, trust_remote_code=True)
        quantization_config = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_compute_dtype=torch.float16,      # 设置计算 dtype 为 float16
            bnb_4bit_quant_type="nf4",
            bnb_4bit_use_double_quant=True
        )
        # 加载基础模型
        base_model = AutoModelForCausalLM.from_pretrained(
            model_dir,
            trust_remote_code=True,
            quantization_config=quantization_config,
            device_map="auto",
            torch_dtype=torch.float16,
        )
        # 加载微调后的LoRA适配器
        model = PeftModel.from_pretrained(
            base_model,
            model_id="/mnt/nfs/penglc/nlp_model/large_ft_model_r64_lora_alpha128_v4/checkpoint-1300"
        )
        model.eval()
        eos_token_id = [tokenizer.eos_token_id, tokenizer.get_command("<|user|>"), tokenizer.get_command("<|observation|>")]
        print("模型和分词器加载成功。")
    except Exception as e:
        print(f"加载模型时出错: {e}")
        raise e

@app.post("/extract/", summary="Chat with the FT_ChatGLM3-6B model")
async def extract(query: Query):
    try:
        # 确保至少有一条用户消息
        if not query.messages:
            raise HTTPException(status_code=400, detail="No messages provided in the query.")
        
        # 假设最新的消息在列表的最后
        latest_message = query.messages[-1].get("content", "").strip()
        if not latest_message:
            raise HTTPException(status_code=400, detail="Latest message content is empty.")

        response = get_ft_model_response(latest_message)
        pattern = r'\|\s*(\d+)\s*\|\s*(.*?)\s*\|'
        matches = re.findall(pattern, response)
        if not matches:
            processed_response = [map_to_predefined_term(response)]
        else:
            processed_response = [map_to_predefined_term(match[1]) for match in matches]
        unique_to_add = [item for item in processed_response if item not in query.features]
        if not unique_to_add:
            return {
                "features": query.features,
            }
        if "无症状" in unique_to_add:
            # 无症状情况agent单独后处理
            # query.features.append("无症状")
            return {
                "features": query.features,
            }
        query.features.extend(unique_to_add)
        return {
            "features": query.features,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    # 请将 'your_script_name' 替换为您的脚本文件名（不带 .py 后缀）
    uvicorn.run("psychological_characteristics_extraction:app", host="0.0.0.0", port=9916)