from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Set, Dict, Optional
import uvicorn
from py2neo import Graph

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

# 全局变量
graph = None

def get_diseases_with_children_by_features(graph, feature_list):
    """
    根据特征列表，查询所有相关的 Disease 节点及其子节点，并以层级结构返回。

    参数：
        graph (Graph): 连接到 Neo4j 的 Graph 实例。
        feature_list (list): 要查询的 Feature 名称列表。

    返回：
        list: 包含 Disease 节点及其子节点的详细层级结构。
    """
    if not feature_list:
        return []
    else:
        # 修改后的 Cypher 查询，避免嵌套的聚合
        query = """
        MATCH (d:Disease)-[:HAS_SYMPTOM_GROUP]->(sg:SymptomGroup)-[:HAS_SYMPTOM]->(s:Symptom)-[:HAS_FEATURE]->(f:Feature)
        WHERE f.name IN $feature_list
        WITH DISTINCT d
        MATCH (d)-[:HAS_SYMPTOM_GROUP]->(sg:SymptomGroup)
        OPTIONAL MATCH (sg)-[:HAS_SYMPTOM]->(s:Symptom)-[:HAS_FEATURE]->(f:Feature)
        RETURN d.name AS disease_name,
               sg.name AS symptom_group_name,
               s.name AS symptom_name,
               f.name AS feature_name
        """
        try:
            result = graph.run(query, feature_list=feature_list)
            diseases = {}

            for record in result:
                disease_name = record["disease_name"]
                symptom_group_name = record["symptom_group_name"]
                symptom_name = record.get("symptom_name")
                feature_name = record.get("feature_name")

                if disease_name not in diseases:
                    diseases[disease_name] = {
                        "name": disease_name,
                        "symptom_groups": {}
                    }

                if symptom_group_name not in diseases[disease_name]["symptom_groups"]:
                    diseases[disease_name]["symptom_groups"][symptom_group_name] = {
                        "name": symptom_group_name,
                        "symptoms": {}
                    }

                if symptom_name:
                    if symptom_name not in diseases[disease_name]["symptom_groups"][symptom_group_name]["symptoms"]:
                        diseases[disease_name]["symptom_groups"][symptom_group_name]["symptoms"][symptom_name] = {
                            "name": symptom_name,
                            "features": set()
                        }

                    if feature_name:
                        diseases[disease_name]["symptom_groups"][symptom_group_name]["symptoms"][symptom_name]["features"].add(feature_name)

            # 转换为列表并将集合转换为列表
            final_diseases = []
            for disease in diseases.values():
                symptom_groups = []
                for sg in disease["symptom_groups"].values():
                    symptoms = []
                    for s in sg["symptoms"].values():
                        symptoms.append({
                            "name": s["name"],
                            "features": list(s["features"])
                        })
                    symptom_groups.append({
                        "name": sg["name"],
                        "symptoms": symptoms
                    })
                final_diseases.append({
                    "name": disease["name"],
                    "symptom_groups": symptom_groups
                })

            return final_diseases
        except Exception as e:
            print(f"查询失败: {e}")
            return []

def get_clean_diseases(diseases_with_children, feature_list):
    """
    清洗疾病数据，移除包含特定特征的症状。

    参数：
        diseases_with_children (list): 包含疾病及其症状组、症状和特征的嵌套列表。
        feature_list (list): 要筛选和删除的特征名称列表。

    返回：
        list: 清洗后的疾病数据。
    """
    # 创建一个新的列表以存储清洗后的数据，避免修改原始数据
    cleaned_diseases = []

    # 遍历每个疾病
    for disease in diseases_with_children:
        # 创建一个新的疾病字典
        new_disease = {
            "name": disease["name"],
            "symptom_groups": []
        }

        # 遍历每个症状组
        for sg in disease.get("symptom_groups", []):
            # 创建一个新的症状组字典
            new_symptom_group = {
                "name": sg["name"],
                "symptoms": []
            }

            # 遍历每个症状
            for symptom in sg.get("symptoms", []):
                # 检查症状的特征是否包含在 feature_list 中
                if not any(feature in feature_list for feature in symptom.get("features", [])):
                    # 如果不包含，则保留该症状
                    new_symptom_group["symptoms"].append(symptom)

            # 如果症状组中仍有症状，保留该症状组
            if new_symptom_group["symptoms"]:
                new_disease["symptom_groups"].append(new_symptom_group)

        # 如果疾病中仍有症状组，保留该疾病
        if new_disease["symptom_groups"]:
            cleaned_diseases.append(new_disease)

    return cleaned_diseases

def get_diseases_to_markdown(clean_diseases):
    """
    将清洗后的疾病数据转换为 Markdown 格式的文本，用于展示每种疾病包含的特征。
    
    参数：
        diseases_with_children (list): 包含疾病及其症状组、症状和特征的嵌套列表。
        
    返回：
        str: 格式化的 Markdown 文本。
    """
    markdown_lines = ["# 可能的精神疾病与可能的心理特征\n"]

    for disease in clean_diseases:
        disease_name = disease.get("name", "未知疾病")
        markdown_lines.append(f"## {disease_name}")
        markdown_lines.append("### 待排除的心理特征")
        
        # 使用集合来存储唯一的特征
        features_set = set()
        
        for sg in disease.get("symptom_groups", []):
            for symptom in sg.get("symptoms", []):
                for feature in symptom.get("features", []):
                    features_set.add(feature)
        
        if features_set:
            # 将特征排序以保持一致性
            sorted_features = sorted(features_set)
            for feature in sorted_features:
                markdown_lines.append(f"- {feature}")
        else:
            markdown_lines.append("- 无特征信息")
        
        # 添加一个空行以分隔不同的疾病
        markdown_lines.append("")
    
    # 将所有行合并为一个字符串
    markdown_text = "\n".join(markdown_lines)
    return markdown_text

@app.on_event("startup")
def load_model():
    global graph
    try:
        graph = Graph("bolt://localhost:7687", auth=("neo4j", "neo4j"))
        print("知识图谱加载成功。")
    except Exception as e:
        print(f"加载知识图谱时出错: {e}")
        raise e

@app.post("/search/", summary="Chat with the FT_ChatGLM3-6B model")
async def search(query: Query):
    # 额外检查到的结果不在used_features中需要补全
    for feature in query.user_features:
        if feature not in query.used_features:
            query.used_features.append(feature)
    diseases_with_children = get_diseases_with_children_by_features(graph, query.user_features)
    clean_diseases = get_clean_diseases(diseases_with_children, query.used_features)
    if len(clean_diseases) == 0:
        return {
            "user_features": query.user_features,
            "used_features": query.used_features,
            "clean_diseases": clean_diseases,
            "diseases_markdown": diseases_markdown
        }
    diseases_markdown = get_diseases_to_markdown(clean_diseases)
    return {
        "user_features": query.user_features,
        "used_features": query.used_features,
        "clean_diseases": clean_diseases,
        "diseases_markdown": diseases_markdown
    }

@app.post("/disease/", summary="Chat with the FT_ChatGLM3-6B model")
async def disease(query: Query):
    # 额外检查到的结果不在used_features中需要补全
    for feature in query.user_features:
        if feature not in query.used_features:
            query.used_features.append(feature)
    diseases_with_children = get_diseases_with_children_by_features(graph, query.user_features)
    no_need_features = [feature for feature in query.used_features if feature not in query.user_features]
    if len(no_need_features) == 0:
        return {
            "user_features": query.user_features,
            "used_features": query.used_features,
            "possible_diseases": diseases_with_children
        }
    clean_diseases = get_clean_diseases(diseases_with_children, no_need_features)
    return {
        "user_features": query.user_features,
        "used_features": query.used_features,
        "possible_diseases": clean_diseases
    }

if __name__ == "__main__":
    # 请将 'your_script_name' 替换为您的脚本文件名（不带 .py 后缀）
    uvicorn.run("knowledge_graph_api:app", host="0.0.0.0", port=9917)