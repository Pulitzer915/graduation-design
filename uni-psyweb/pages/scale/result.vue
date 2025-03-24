<template>
	<view class="pageBg">
		<view class="status_bar" :style="{height: getStatusBarHeight() + 'px'}">
			<!-- 这里是状态栏 -->
		</view>
		<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
			<view class="navTitle">
				SDS量表得分结果
			</view>
		</view>
		<view class="result">
			<view class="score">
				{{score + '分'}}
			</view>
			<view class="level">
				{{ status.title }}
			</view>
		</view>
		<view class="head">
			症状划分
		</view>
		<view class="list" v-for="(item, index) in resultList" :key="index">
			<view class="state" :style="{backgroundColor: colorList[index]}">{{ item.title }}</view>
			<view class="segmentation">{{ item.content }}</view>
		</view>
		<view class="head">
			轻度抑郁症如何缓解
		</view>
		<uv-collapse :value="[0]">
			<uv-collapse-item :name="index" :title="item.title" v-for="(item, index) in adviceList">
				<text>{{ item.content }}</text>
			</uv-collapse-item>
		</uv-collapse>
		<view style="margin: 30rpx">
			<uv-button text="回到首页" type="primary" @click="backIndex"></uv-button>
		</view>
	</view>
</template>

<script setup>
import {onLoad} from "@dcloudio/uni-app"
import { computed, reactive, ref } from "vue";
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"
import { getSdsResult } from "@/utils/score.js";

onLoad((e) => {
	score.value = e.score;
	console.log(getSdsResult(score.value))
})

const score = ref(0)
const colorList = ["#6CC615", "#4E9DFF", "#F3AD36", "#EB6C6B"]
// const status = ref(null)
const resultList = reactive([
    {
        "title": "无抑郁",
        "content": "0~39分"
    },
    {
        "title": "轻度",
        "content": "40~47分"
    },
    {
        "title": "中度",
        "content": "48~55分"
    },
    {
        "title": "重度",
        "content": "56分以上"
    }
])



const adviceList = reactive([
    {
        "title": "坚持锻炼",
        "content": "轻度抑郁症的患者可以选择跑步、跳绳、打球、游泳、瑜伽等运动，在运动的过程中可以释放不良情绪，同时还能够增强身体体质，患者长期坚持锻炼，可以帮助改善轻度抑郁症的症状。"
    },
    {
        "title": "多与他人沟通",
        "content": "轻度抑郁症患者可能会出现情绪低落、兴趣减退、焦虑、思维迟缓等症状，出现这些症状时患者可以多与他人沟通，在与他人沟通的过程中能够帮助改善情绪低落、焦虑等不良症状。"
    },
    {
        "title": "培养新的兴趣爱好",
        "content": "轻度抑郁症患者应尝试培养新的兴趣爱好，如画画、旅游等，可以分散自身的注意力，在新的兴趣爱好里面还可以使心情愉悦，有利于缓解轻度抑郁症的状态。"
    },
    {
        "title": "药物治疗",
        "content": "如果通过以上方法改善轻度抑郁症的效果不理想，患者就需要遵医嘱服用相关药物，常见的药物包括盐酸舍曲林片、盐酸文拉法辛片等，可以在一定程度上改善无法自我缓解的轻度抑郁症症状。"
    },
    {
        "title": "心理治疗",
        "content": "主要是患者与心理医生进行谈话、交流，心理医生会针对患者的具体情况进行针对性治疗，如支持性心理治疗、认知行为治疗、精神动力学治疗、婚姻家庭治疗等，帮助患者正视抑郁发作带来的不良影响，防止疾病复发。"
    }
])

//通过score找到正确的症状分段
const findScoreSegment = (score, resultList) => {
  for (const result of resultList) {
    // 尝试匹配形式为"0~39分"的范围
    const rangeMatch = result.content.match(/(\d+)~(\d+)/);
    if (rangeMatch) {
      const lowerBound = parseInt(rangeMatch[1], 10);
      const upperBound = parseInt(rangeMatch[2], 10);
      if (score >= lowerBound && score <= upperBound) {
        return result;
      }
    }

    // 尝试匹配形式为"56分以上"的范围
    const aboveMatch = result.content.match(/(\d+)分以上/);
    if (aboveMatch) {
      const lowerBound = parseInt(aboveMatch[1], 10);
      if (score >= lowerBound) {
        return result;
      }
    }
  }

  // 如果没有匹配到任何范围，可以根据需要返回默认值或null
  return null;
}

const status = computed(() => {
	return findScoreSegment(score.value, resultList)
})

const backIndex = () => {
	uni.switchTab({
		url: '/pages/index/index'
	});
}

</script>

<style lang="scss" scoped>
.titleBar{
	display: flex;
	align-items: center;
	.navTitle{
		margin: 0px 30rpx;
		font-size: 36rpx;
		font-weight: bold;
	}
}
.result{
	height: 200rpx;
	margin: 30rpx;
	display: flex;
	justify-content: space-between;
	.score{
		height: 100%;
		width: 330rpx;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 36rpx;
		background-color: #fff;
	}
	.level{
		height: 100%;
		width: 330rpx;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 36rpx;
		background-color: #fff;
	}
}
.head{
	margin: 30rpx;
	height: 70rpx;
	padding: 0 20rpx;
	line-height: 70rpx;
	background-color: #E0E8F6;
	border-radius: 5px;
}
.uv-collapse{
	margin: 0 30rpx;
}
.list{
	margin: 10rpx 30rpx;
	display: flex !important;
	flex-direction: row !important;
	.state{
		flex-grow: 0; /* 默认值，表示不根据flex比例增长，宽度由内容决定 */
		flex-shrink: 1; /* 默认值，允许在必要时缩小，以适应容器 */
		flex-basis: auto; /* 默认值，宽度由内容决定 */
		padding: 5rpx 12rpx;
		color: white;
		border-radius: 5px;
		font-size: 26rpx;
	}
	.segmentation{
		flex-grow: 1; /* 允许盒子根据比例增长，填满剩余空间 */
		flex-shrink: 1; /* 默认值，允许在必要时缩小，以适应容器 */
		flex-basis: 0%; /* 从0开始增长，确保能够填满剩余空间 */
		padding: 0rpx 18rpx;
		font-size: 28rpx;
		color:gray
	}
}
</style>