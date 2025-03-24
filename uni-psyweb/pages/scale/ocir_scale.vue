<template>
  <view>
    <!-- 状态栏 -->
    <view class="status_bar" :style="{ height: getStatusBarHeight() + 'px' }">
      <!-- 这里是状态栏 -->
    </view>

    <!-- 标题栏 -->
    <view class="titleBar" :style="{ height: getTitleBarHeight() + 'px' }">
      <image src="/static/image/mp-axure-image/goback.png" @click="goback"></image>
      <view class="navTitle">OCIR量表</view>
    </view>

    <!-- 量表问卷部分 -->
    <view class="question">
      <questionnaire-form :scalelist="scalelist" @submit="handleSubmit"></questionnaire-form>
      <view class="safe-area-inset-bottom"></view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { getStatusBarHeight, getTitleBarHeight } from '@/utils/system.js';
import { getOcirScale } from '@/utils/scale.js';
import QuestionnaireForm from '@/components/QuestionnaireForm/QuestionnaireForm.vue'; // 根据实际路径调整

const scalelist = getOcirScale();

// 处理提交事件，从子组件接收总分并导航到结果页面
const handleSubmit = (totalScore) => {
  uni.navigateTo({
    url: 'ocir_result?score=' + totalScore
  });
};

// 返回按钮逻辑
const goback = () => {
  uni.navigateBack();
};
</script>

<style lang="scss" scoped>
.titleBar {
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  image {
    height: 45rpx;
    width: 45rpx;
  }
  .navTitle {
    margin: 0px 30rpx;
    font-size: 36rpx;
    font-weight: bold;
  }
}
.question {
  padding: 30rpx;
}
</style>