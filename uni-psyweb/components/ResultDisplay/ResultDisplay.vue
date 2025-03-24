<template>
  <view class="result-container">
    <view class="result">
      <view class="score">
        {{ score + '分' }}
      </view>
      <view class="level">
        {{ status }}
      </view>
    </view>
	<view class="head">
	  题目来源量表
	</view>
	<view class="advice" style="padding: 0rpx 10rpx;">
		SDS量表
	</view>
    <view class="head">
      症状划分
    </view>
    <view class="list" v-for="(item, index) in resultList" :key="index">
      <view class="state" :style="{ backgroundColor: colorList[index] }">
        {{ item.title }}
      </view>
      <view class="segmentation">
        {{ item.content }}
      </view>
    </view>
    <view class="head">
      小麦建议
    </view>
    <view class="advice">
		<view class="adviceTitle">
			1. 建立规律的生活作息
		</view>
		<view class="adviceContent">
			维持规律的作息时间，确保充足的睡眠和适量的休息。规律的生活有助于调节生理节律，改善情绪和精神状态。
		</view>
		<view class="adviceTitle">
			2. 适度体育锻炼
		</view>
		<view class="adviceContent">
			建议进行适量的体育活动，如散步、慢跑、瑜伽或太极等。运动有助于释放体内压力、提升内啡肽水平，从而改善心情和身体健康。
		</view>
		<view class="adviceTitle">
			3. 健康的饮食习惯
		</view>
		<view class="adviceContent">
			均衡饮食对整体健康至关重要。建议增加新鲜水果、蔬菜和全谷物等富含维生素和矿物质的食物，同时适当减少过多的咖啡因、糖分和加工食品的摄入。
		</view>
      {{ advice }}
    </view>
    <view class="button-container" style="margin: 30rpx">
      <uv-button text="回到首页" type="primary" @click="backIndex"></uv-button>
    </view>
  </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// 定义接收的 Props
const props = defineProps({
  score: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  resultList: {
    type: Array,
    required: true
  },
  colorList: {
    type: Array,
    required: true
  },
  advice: {
    type: String,
    default: ''
  }
});

// 定义 Emits
const emit = defineEmits(['back-index']);

// 返回首页的方法
const backIndex = () => {
  emit('back-index');
};
</script>

<style lang="scss" scoped>
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
		width: 270rpx;
		padding: 0 30rpx;
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
.advice {
  margin: 0rpx 30rpx;
  padding: 0rpx 10rpx;
  font-size: 28rpx;
  color: #333;
  .adviceTitle {
	  padding: 10rpx 0rpx;
  }
}
</style>
