"use strict";
const getSdsResult = (score) => {
  if (score < 40)
    return "无症状";
  if (score < 48)
    return "轻度";
  if (score < 56)
    return "中度";
  if (score >= 56)
    return "重度";
};
const getSasResult = (score) => {
  if (score < 50)
    return "无症状";
  if (score < 60)
    return "轻度";
  if (score < 70)
    return "中度";
  if (score >= 70)
    return "重度";
};
const getMdqResult = (score) => {
  if (score < 7)
    return "无症状";
  if (score >= 7)
    return "可能存在双相情感障碍";
};
const getPq16Result = (score) => {
  if (score < 8)
    return "无症状";
  if (score >= 8)
    return "可能存在精神分裂症症状";
};
const getOcirResult = (score) => {
  if (score < 14)
    return "无症状";
  if (score >= 14)
    return "可能存在强迫症状";
};
exports.getMdqResult = getMdqResult;
exports.getOcirResult = getOcirResult;
exports.getPq16Result = getPq16Result;
exports.getSasResult = getSasResult;
exports.getSdsResult = getSdsResult;
