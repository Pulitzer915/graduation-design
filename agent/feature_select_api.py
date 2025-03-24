from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel, Field
from typing import List, Set, Dict, Optional
from jinja2 import Environment, FileSystemLoader
import uvicorn
import os

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
    diseases_markdown: str = Field(default_factory=str)
    messages: List[Dict[str, str]] = Field(default_factory=list)

# 定义OpenAI接口返回的json格式
class SelectResponse(BaseModel):
    analysis: str
    feature: list[str]

# 全局变量
API_SECRET_KEY = "sk-zk2c5be4ac17087a3cff00b429561f522ce67164b997d686"
BASE_URL = "https://api.zhizengzeng.com/v1/"

template_path = None
file_loader = None
env = None
client = None
feature_select_system_prompt_template = None

def select_features_action(feature_select_system_prompt, memory_messages):
    messages=[
        {
            "role": "system",
            "content": feature_select_system_prompt
        },
    ]
    messages.extend(memory_messages)
    resp = client.beta.chat.completions.parse(
        # model="gpt-4o-2024-08-06",
        model="gpt-4o-mini-2024-07-18",
        messages=messages,
        temperature=0.2,
        response_format=SelectResponse,
    )
    return resp.choices[0].message.parsed

@app.on_event("startup")
def load_model():
    global template_path, file_loader, env, client, feature_select_system_prompt_template
    try:
        template_path = os.path.join(os.path.dirname('.'), 'agent/templates')
        file_loader = FileSystemLoader(template_path)
        env = Environment(loader=file_loader)

        client = OpenAI(api_key=API_SECRET_KEY, base_url=BASE_URL)
        feature_select_system_prompt_template = env.get_template('feature_select_system_prompt.jinja2')
        print("特征选择模板加载成功")
    except Exception as e:
        print(f"加载模板出错: {e}")
        raise e

@app.post("/select/", summary="Chat with the FT_ChatGLM3-6B model")
async def select(query: Query):
    feature_select_system_prompt = feature_select_system_prompt_template.render(candidate_features = query.diseases_markdown)
    res = select_features_action(feature_select_system_prompt, query.messages)
    return res.feature

if __name__ == "__main__":
    # 请将 'your_script_name' 替换为您的脚本文件名（不带 .py 后缀）
    uvicorn.run("feature_select_api:app", host="0.0.0.0", port=9918)