<template>
  <view class="pageBg">
    <!-- 状态栏 -->
    <view class="status_bar" :style="{ height: getStatusBarHeight() + 'px' }">
      <!-- 这里是状态栏 -->
    </view>

    <!-- 标题栏 -->
    <view class="titleBar" :style="{ height: getTitleBarHeight() + 'px' }">
      <view class="navTitle">
        PQ-16量表得分结果
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
import { getPq16Result } from "@/utils/score.js";
import ResultDisplay from '@/components/ResultDisplay/ResultDisplay.vue'; // 根据实际路径调整

// 定义响应式变量
const score = ref(0);
const status = ref('');
const colorList = ["#6CC615", "#F3AD36"];
const resultList = reactive([
    {
        "title": "无症状",
        "content": "0~7分"
    },
    {
        "title": "可能存在精神分裂症症状",
        "content": "8分以上"
    }
]);

const advice = ref("");

// 获取传递的参数
onLoad((e) => {
  score.value = parseInt(e.score) || 0;
  status.value = getPq16Result(score.value);
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