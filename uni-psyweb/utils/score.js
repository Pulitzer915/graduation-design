export const getSdsResult = (score) => {
	if(score < 40) return "无症状"
	if(score < 48) return "轻度"
	if(score < 56) return "中度"
	if(score >= 56 ) return "重度"
}

// 焦虑评定的标准分（总分*1.25后四舍五入）分界值为50分,50—59分为轻度焦虑，60-69分为中度焦虑，70分以上为重度焦虑。分值越高，焦虑倾向越明显。
export const getSasResult = (score) => {
	if(score < 50) return "无症状"
	if(score < 60) return "轻度"
	if(score < 70) return "中度"
	if(score >= 70 ) return "重度"
}

//评分说明：13个筛查症状中存在≥7条
export const getMdqResult = (score) => {
	if(score < 7) return "无症状"
	if(score >= 7 ) return "可能存在双相情感障碍"
}

//痛苦分标准
export const getPq16Result = (score) => {
	if(score < 8) return "无症状"
	if(score >= 8 ) return "可能存在精神分裂症症状"
}

//强迫量表修订版(OCI-R)
export const getOcirResult = (score) => {
	if(score < 14) return "无症状"
	if(score >= 14 ) return "可能存在强迫症状"
}