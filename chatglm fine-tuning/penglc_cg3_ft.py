from datasets import Dataset
from transformers import AutoTokenizer, AutoModelForCausalLM, DataCollatorForSeq2Seq, TrainingArguments, Trainer, BitsAndBytesConfig
from peft import LoraConfig, TaskType, get_peft_model, PeftModel
import torch
import pandas as pd
import re

# 读取构建好的数据集
input_file = './agent/six_model_combine_describe_result.xlsx'  # 替换为您的输入文件路径
df = pd.read_excel(input_file)

# 将 pandas DataFrame 转换为 Hugging Face Dataset
ds = Dataset.from_pandas(df)

print(f"数据集大小: {len(ds)}")

# 分割为训练集和临时集（用于验证和测试）
train_valid_split = ds.train_test_split(test_size=0.2, seed=42)
train_dataset = train_valid_split['train']
temp_dataset = train_valid_split['test']

# 再将临时集分割为验证集和测试集
valid_test_split = temp_dataset.train_test_split(test_size=0.5, seed=42)
valid_dataset = valid_test_split['train']
test_dataset = valid_test_split['test']

print(f"训练集大小: {len(train_dataset)}\n验证集大小: {len(valid_dataset)}\n测试集大小: {len(test_dataset)}\n")

test_df = test_dataset.to_pandas()
test_df.to_excel("./agent/six_model_test_dataset_1211.xlsx", index=False)

print("测试集已保存")

model_dir = '/mnt/nfs/penglc/nlp_model/ZhipuAI/chatglm3-6b'
tokenizer = AutoTokenizer.from_pretrained(model_dir, trust_remote_code=True)

def get_output(feature_str):
    feature_ls = feature_str.split('，')
    res = ''
    for idx in range(len(feature_ls)):
        res += '| ' + str(idx+1) + ' | ' + feature_ls[idx] + ' |\n'
    return res.rstrip('\n')

def process_func(example):
    history = [{
        "role": "system",
        "content": "你是一位经验丰富的心理学专家，擅长从患者的自我描述中概括患者的心理特征。\n\n# 心理特征列表：\n- 情绪低落\n- 晨重晚轻\n- 易哭\n- 入睡困难\n- 睡眠质量低\n- 食欲减退\n- 性欲减退\n- 体重减轻\n- 便秘\n- 心悸\n- 精力减退\n- 思考困难\n- 能力减退\n- 坐立不安\n- 绝望\n- 易激惹\n- 决断困难\n- 自我价值感低\n- 兴趣减退\n- 焦虑\n- 害怕\n- 惊恐\n- 发疯感\n- 不幸预感\n- 手足颤抖\n- 躯体疼痛\n- 头晕\n- 呼吸困难\n- 手足刺痛\n- 胃痛\n- 尿频\n- 多汗\n- 面部潮红\n- 噩梦\n- 囤积行为\n- 强迫性检查\n- 强迫性秩序需求\n- 强迫性计数\n- 强迫性洁癖\n- 思维失控\n- 强迫性迷信\n- 既视感\n- 幻嗅\n- 幻味\n- 幻听\n- 现实感丧失\n- 幻视\n- 妄想\n- 注意力集中困难\n- 情绪高涨\n- 自信心过高\n- 睡眠需求减少\n- 言语增多\n- 思维奔逸\n- 精力充沛\n- 行为活动增多\n- 性欲增强\n- 冲动行为\n- 诚实度降低\n- 生活态度消极\n- 自杀意念\n- 早醒\n- 过度担忧\n- 自杀行为\n- 精神崩溃感\n- 睡眠不稳\n- 多梦\n- 使用安眠药\n\n# 具体要求：\n- 概括的心理特征必须在自我描述中**非常直接的体现**。\n- 概括的心理特征必须来自**心理特征列表**。"
    }]
    MAX_LENGTH = 2048
    input_ids, attention_mask, labels = [], [], []
    instruction = "自我描述：" + example['describe'] + "\n\n心理特征（以 markdown 格式输出）：\n| 序号 | 心理特征 |\n| ---- | ---- |\n"
    instruction = tokenizer.build_chat_input(instruction, history=history, role="user")  # [gMASK]sop<|user|> \n query<|assistant|>
    response = tokenizer("\n " + get_output(example["feature"]), add_special_tokens=False)        # \n response, 缺少eos token
    input_ids = instruction["input_ids"][0].numpy().tolist() + response["input_ids"] + [tokenizer.eos_token_id]
    attention_mask = instruction["attention_mask"][0].numpy().tolist() + response["attention_mask"] + [1]
    labels = [-100] * len(instruction["input_ids"][0].numpy().tolist()) + response["input_ids"] + [tokenizer.eos_token_id]
    if len(input_ids) > MAX_LENGTH:
        input_ids = input_ids[:MAX_LENGTH]
        attention_mask = attention_mask[:MAX_LENGTH]
        labels = labels[:MAX_LENGTH]
    return {
        "input_ids": input_ids,
        "attention_mask": attention_mask,
        "labels": labels
    }

tokenized_train_ds = train_dataset.map(process_func, remove_columns=ds.column_names)
tokenized_valid_ds = valid_dataset.map(process_func, remove_columns=ds.column_names)

quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype=torch.float16,      # 设置计算 dtype 为 float16
    bnb_4bit_quant_type="nf4",
    bnb_4bit_use_double_quant=True
)

model = AutoModelForCausalLM.from_pretrained(model_dir, trust_remote_code=True, low_cpu_mem_usage=True, 
                                             torch_dtype=torch.float16, quantization_config=quantization_config)

config = LoraConfig(r=64, lora_alpha=128, target_modules=["query_key_value"])
model = get_peft_model(model, config)
model.enable_input_require_grads()
model.print_trainable_parameters()

args = TrainingArguments(
    output_dir="/mnt/nfs/penglc/nlp_model/six_model_ft_model_r64_lora_alpha128_v1",
    # evaluation_strategy="epoch",
    evaluation_strategy="steps",
    eval_steps=10,
    per_device_train_batch_size=1,
    per_device_eval_batch_size=1,
    gradient_accumulation_steps=8,
    logging_steps=10,
    # save_strategy="epoch", 
    save_strategy="steps",          # 设置保存策略为按步数
    save_steps=100,                 # 每100步保存一次模型
    save_total_limit=3,
    load_best_model_at_end = True,
    num_train_epochs=4,
    learning_rate=2e-5,
    remove_unused_columns=False,
    gradient_checkpointing=True,
    logging_dir="/mnt/nfs/penglc/nlp_model/six_model_ft_model_r64_lora_alpha128_v1/logs",
    optim="paged_adamw_32bit",
    report_to=["tensorboard"],
    label_names = ["labels"],
)

trainer = Trainer(
    model=model,
    args=args,
    tokenizer=tokenizer,
    train_dataset=tokenized_train_ds,
    eval_dataset=tokenized_valid_ds,
    data_collator=DataCollatorForSeq2Seq(tokenizer=tokenizer, padding=True),
)

trainer.train()
model.eval()
eos_token_id = [tokenizer.eos_token_id, tokenizer.get_command("<|user|>"), tokenizer.get_command("<|observation|>")]

def single_infer(text):
    history = [{
        "role": "system",
        "content": "你是一位经验丰富的心理学专家，擅长从患者的自我描述中概括患者的心理特征。\n\n# 心理特征列表：\n- 情绪低落\n- 晨重晚轻\n- 易哭\n- 入睡困难\n- 睡眠质量低\n- 食欲减退\n- 性欲减退\n- 体重减轻\n- 便秘\n- 心悸\n- 精力减退\n- 思考困难\n- 能力减退\n- 坐立不安\n- 绝望\n- 易激惹\n- 决断困难\n- 自我价值感低\n- 兴趣减退\n- 焦虑\n- 害怕\n- 惊恐\n- 发疯感\n- 不幸预感\n- 手足颤抖\n- 躯体疼痛\n- 头晕\n- 呼吸困难\n- 手足刺痛\n- 胃痛\n- 尿频\n- 多汗\n- 面部潮红\n- 噩梦\n- 囤积行为\n- 强迫性检查\n- 强迫性秩序需求\n- 强迫性计数\n- 强迫性洁癖\n- 思维失控\n- 强迫性迷信\n- 既视感\n- 幻嗅\n- 幻味\n- 幻听\n- 现实感丧失\n- 幻视\n- 妄想\n- 注意力集中困难\n- 情绪高涨\n- 自信心过高\n- 睡眠需求减少\n- 言语增多\n- 思维奔逸\n- 精力充沛\n- 行为活动增多\n- 性欲增强\n- 冲动行为\n- 诚实度降低\n- 生活态度消极\n- 自杀意念\n- 早醒\n- 过度担忧\n- 自杀行为\n- 精神崩溃感\n- 睡眠不稳\n- 多梦\n- 使用安眠药\n\n# 具体要求：\n- 概括的心理特征必须在自我描述中**非常直接的体现**。\n- 概括的心理特征必须来自**心理特征列表**。"
    }]
    text = "自我描述：" + text + "\n\n心理特征（以 markdown 格式输出）：\n| 序号 | 心理特征 |\n| ---- | ---- |\n"
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

num = 0
results = []

for item in test_dataset:
    labels = item['feature'].split('，')
    labels.sort()
    sort_labels_str = '，'.join(labels)
    content = single_infer(item['describe'])
    pattern = r'\|\s*(\d+)\s*\|\s*(.*?)\s*\|'
    matches = re.findall(pattern, content)

    if not matches:
        results.append({
            "label": sort_labels_str,
            "predict": content,
            "describe": item['describe'],
        })
        print(f"label: {sort_labels_str}\npredict: {content}\ndescribe: {item['describe']}\n\n")
    else:
        processed_content = [match[1] for match in matches]
        processed_content.sort()
        predict = '，'.join(processed_content)
        results.append({
            "label": sort_labels_str,
            "predict": predict,
            "describe": item['describe'],
        })
        print(f"label: {sort_labels_str}\npredict: {predict}\ndescribe: {item['describe']}\n\n")
        if labels == processed_content:
            num += 1

print(f"正确数: {num}\n测试集总数: {len(test_dataset)}\n准确率: {num/len(test_dataset)}")

df = pd.DataFrame(results)
df.to_excel("./agent/six_model_test_different_items_1211.xlsx", index=False)
print("结果已保存")
