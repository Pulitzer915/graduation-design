from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Set, Dict, Optional
import uvicorn
import os
import requests
import json
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
    user_features: List[str] = Field(default_factory=list)
    used_features: List[str] = Field(default_factory=list)
    messages: List[Dict[str, str]] = Field(default_factory=list)
    is_end: int = Field(default_factory=int)

# 全局变量
SERVER_BASE_URL = "http://10.16.22.110"

def get_complete_url(port, method):
    return SERVER_BASE_URL + ':' + str(port) + '/' + method + '/'

def choose_action(memory):
    # API 端点
    url = get_complete_url(9915, "choose")

    # 请求头，指定内容类型为 JSON
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        data=json.dumps({
            "messages": memory.messages
        })
    )

    data = response.json()
    return data

def lead_action(memory):
    # API 端点
    url = get_complete_url(9913, "lead")

    # 请求头，指定内容类型为 JSON
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        data=json.dumps({
            "messages": memory.messages
        })
    )

    data = response.json()
    return data

def extract_action(memory):
    # API 端点
    url = get_complete_url(9916, "extract")

    # 请求头，指定内容类型为 JSON
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        data=json.dumps({
            "features": memory.user_features,
            "messages": memory.messages
        })
    )

    data = response.json()
    return data

def search_action(memory):
    # API 端点
    url = get_complete_url(9917, "search")

    # 请求头，指定内容类型为 JSON
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        data=json.dumps({
            "user_features": memory.user_features,
            "used_features": memory.used_features
        })
    )

    data = response.json()
    return data

def disease_action(memory):
    # API 端点
    url = get_complete_url(9917, "disease")

    # 请求头，指定内容类型为 JSON
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        data=json.dumps({
            "user_features": memory.user_features,
            "used_features": memory.used_features
        })
    )

    data = response.json()
    return data

def select_action(diseases_markdown, memory):
    # API 端点
    url = get_complete_url(9918, "select")

    # 请求头，指定内容类型为 JSON
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        data=json.dumps({
            "diseases_markdown": diseases_markdown,
            "used_features": memory.messages
        })
    )

    data = response.json()
    return data

def append_action(append_features, memory):
    # API 端点
    url = get_complete_url(9919, "append")

    # 请求头，指定内容类型为 JSON
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        data=json.dumps({
            "append_features": append_features,
            "messages": memory.messages
        })
    )

    data = response.json()
    return data

@app.on_event("startup")
def load_model():
    try:
        print("Agent加载成功")
    except Exception as e:
        print(f"加载Agent出错: {e}")
        raise e

@app.post("/chat/", summary="Chat with the FT_ChatGLM3-6B model")
async def chat(memory: Query):
    choose_action_res = choose_action(memory)['action']
    print(choose_action_res)
    
    if choose_action_res == "引导用户":
        # 使用模型生成回复引导用户回归主题
        lead_user_reply = lead_action(memory)["reply"]
        memory.messages.append({
            "role": "assistant",
            "content": lead_user_reply
        })
        return {
            "user_features": memory.user_features,
            "used_features": memory.used_features,
            "messages": memory.messages,
            "is_end": 0
        }
        
    if choose_action_res == "分析用户回答":

        # 使用模型提取心理特征
        extract_features = extract_action(memory)["features"]
        memory.user_features = extract_features.copy()

        # 根据特征检索节点
        search_result = search_action(memory)
        diseases_markdown = search_result["diseases_markdown"]
        memory.used_features = search_result["used_features"]
        if len(search_result["clean_diseases"]) == 0:
            return {
                "user_features": memory.user_features,
                "used_features": memory.used_features,
                "messages": memory.messages,
                "is_end": 1
            }
        # 使用模型选择追问的心理特征
        append_features = select_action(diseases_markdown, memory)
        memory.used_features.extend(append_features)
    
        # 使用模型根据选择的心理特征进行追问
        append_question = append_action(append_features, memory)
        memory.messages.append({
            "role": "assistant",
            "content": append_question["append_question"]
        })
        return {
            "user_features": memory.user_features,
            "used_features": memory.used_features,
            "messages": memory.messages,
            "is_end": 0
        }

    if choose_action_res == "结束对话":
        if len(memory.user_features) == 0:
            return {
                "user_features": memory.user_features,
                "used_features": memory.used_features,
                "messages": memory.messages,
                "possible_diseases": [],
                "is_end": 1
            }
        possible_diseases = disease_action(memory)["possible_diseases"]
        return {
            "user_features": memory.user_features,
            "used_features": memory.used_features,
            "messages": memory.messages,
            "possible_diseases": possible_diseases,
            "is_end": 1
        }

if __name__ == "__main__":
    # 请将 'your_script_name' 替换为您的脚本文件名（不带 .py 后缀）
    uvicorn.run("psychological_evaluator_agent_api:app", host="0.0.0.0", port=9914)