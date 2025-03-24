from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel, Field
from typing import List, Set, Dict, Optional
from jinja2 import Environment, FileSystemLoader
import uvicorn
import os
import re

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
    messages: List[Dict[str, str]] = Field(default_factory=list)

# 定义OpenAI接口返回的json格式
class ActionResponse(BaseModel):
    serialNumber: int
    action: str

# 全局变量
API_SECRET_KEY = "sk-zk2c5be4ac17087a3cff00b429561f522ce67164b997d686"
BASE_URL = "https://api.zhizengzeng.com/v1/"

template_path = None
file_loader = None
env = None
client = None
plan_system_prompt_template = None

def plan_inference(plan_system_prompt, memory_messages):
    messages=[
        {
            "role": "system",
            "content": plan_system_prompt
        },
    ]
    messages.extend(memory_messages)
    resp = client.beta.chat.completions.parse(
        # model="gpt-4o-2024-08-06",
        model="gpt-4o-mini-2024-07-18",
        messages=messages,
        temperature=0.2,
        response_format=ActionResponse
    )
    return resp.choices[0].message.parsed

@app.on_event("startup")
def load_model():
    global template_path, file_loader, env, client, plan_system_prompt_template
    try:
        template_path = os.path.join(os.path.dirname('.'), 'agent/templates')
        file_loader = FileSystemLoader(template_path)
        env = Environment(loader=file_loader)

        client = OpenAI(api_key=API_SECRET_KEY, base_url=BASE_URL)
        plan_system_prompt_template = env.get_template('plan_system_prompt.jinja2')
        print("行动选择模板加载成功")
    except Exception as e:
        print(f"加载模板出错: {e}")
        raise e
    
@app.post("/choose/", summary="Chat with the FT_ChatGLM3-6B model")
async def choose(query: Query):
    plan_system_prompt = plan_system_prompt_template.render()
    res = plan_inference(plan_system_prompt, query.messages)
    return {
        "action": res.action
    }

if __name__ == "__main__":
    # 请将 'your_script_name' 替换为您的脚本文件名（不带 .py 后缀）
    uvicorn.run("chat_choose_api:app", host="0.0.0.0", port=9915)