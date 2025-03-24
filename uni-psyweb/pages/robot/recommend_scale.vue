<template>
	<view class="status_bar" :style="{ height: getStatusBarHeight() + 'px' }">
	  <!-- 这里是状态栏 -->
	</view>
	
	<!-- 标题栏 -->
	<view class="titleBar" :style="{ height: getTitleBarHeight() + 'px' }">
	  <!-- <image src="/static/image/mp-axure-image/goback.png" @click="goback"></image> -->
	  <view class="navTitle">推荐量表</view>
	</view>
	<view class="buttonBorder" v-for="item in memory.possible_diseases" :key="item.name">
		<uv-button :customStyle="buttonStyle" :customTextStyle="buttonTextStyle" @click="goToScale(DISEASE_MAPPING_SCALE_URL[item.name])">
			{{ DISEASE_MAPPING_SCALE_NAME[item.name] }}
			<template #suffix>
			    <uv-icon name="arrow-right"></uv-icon>
			</template>
		</uv-button>
	</view>
	
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getStatusBarHeight, getTitleBarHeight } from '@/utils/system.js';

const memory = ref({"possible_diseases": []})

onMounted(() => {
	memory.value = uni.getStorageSync("memory")
	console.log(memory.value)
})

const DISEASE_MAPPING_SCALE_NAME = {
	"抑郁发作": "SDS量表",
	"躁狂发作": "MDQ量表",
	"广泛性焦虑障碍": "SAS量表",
	"强迫症": "OCI-R量表",
	"精神分裂症": "PQ-16量表"
}

const DISEASE_MAPPING_SCALE_URL = {
	"抑郁发作": "/pages/scale/sds_scale",
	"躁狂发作": "/pages/scale/mdq_scale",
	"广泛性焦虑障碍": "/pages/scale/sas_scale",
	"强迫症": "/pages/scale/ocir_scale",
	"精神分裂症": "/pages/scale/pq16_scale"
}

const buttonStyle = {
	borderColor: '#3c9cff',
	height: "80rpx",
	justifyContent: 'space-between'
}
const buttonTextStyle = {
	
}
const goToScale = (url) => {
	uni.navigateTo({
		url
	})
}

</script>

<style lang="scss">
.titleBar {
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  image {
    height: 45rpx;
    width: 45rpx;
  }
  .navTitle {
    margin: 0px 0rpx;
    font-size: 36rpx;
    font-weight: bold;
	color: $uv-main-color;
  }
}
.buttonBorder {
	padding: 0 30rpx;
	margin: 15rpx 0;
}
.scale_item {
	margin: 0 30rpx;
	padding: 30rpx;
	background-color: gray;
	font-size: 30rpx;
	border-radius: 10rpx;
}
</style>
