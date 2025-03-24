<template>
  <view class="pageBg">
    <!-- 状态栏 -->
    <view class="status_bar" :style="{ height: getStatusBarHeight() + 'px' }">
      <!-- 这里是状态栏 -->
    </view>

    <!-- 标题栏 -->
    <view class="titleBar" :style="{ height: getTitleBarHeight() + 'px' }">
      <view class="navTitle">
        小麦评估结果
      </view>
    </view>

    <!-- 结果展示部分 -->
    <view class="result">
      <result-display
        :score="score"
        :status="status"
        :resultList="resultList"
        :colorList="colorList"
        :advice="advice"
        @back-index="backToHome"
      ></result-display>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { reactive, ref } from "vue";
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js";
import { getSdsResult } from "@/utils/score.js";
import ResultDisplay from '@/components/ResultDisplay/ResultDisplay.vue'; // 根据实际路径调整

// 定义响应式变量
const score = ref(0);
const status = ref('');
const colorList = ["#6CC615", "#4E9DFF", "#F3AD36", "#EB6C6B"];
const resultList = reactive([
    {
        "title": "无症状",
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
]);

const advice = ref("");

// 获取传递的参数
onLoad((e) => {
  score.value = parseInt(e.score) || 0;
  status.value = getSdsResult(score.value);
});

// 返回首页的方法
const backToHome = () => {
  uni.switchTab({
    url: '/pages/scale/scale'
  });
};
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
.result {
  
}
.pageBg {
  /* 你的页面背景样式 */
}
</style>
