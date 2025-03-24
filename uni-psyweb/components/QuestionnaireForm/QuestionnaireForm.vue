<template>
  <uv-form :model="formModel" :rules="rules" ref="formRef">
    <uv-form-item
      v-for="(item, index) in scalelist.question"
      :key="index"
      :prop="`option${index + 1}.score`"
      labelWidth="16rpx"
    >
      <uv-radio-group
        v-model="formModel[`option${index + 1}`].score"
        placement="column"
      >
        <view class="questioncontent">
          {{ index + 1 }}. {{ item.title }}
        </view>
        <uv-radio
          v-for="(itm, idx) in item.option"
          :key="idx"
          :label="itm.score"
          :name="itm.score"
          :customStyle="{ margin: '8px' }"
          :labelSize="'26rpx'"
        >
          {{ itm.answer }}
        </uv-radio>
      </uv-radio-group>
    </uv-form-item>
    <uv-button
      type="primary"
      text="提交"
      @click="handleSubmit"
      class="submit"
    ></uv-button>
  </uv-form>
</template>

<script setup>
import { ref } from 'vue';

// 定义 Props 接受量表数据
const props = defineProps({
  scalelist: {
    type: Object,
    required: true
  }
});

// 定义 Emits
const emit = defineEmits(['submit']);

// 定义表单引用
const formRef = ref(null);

// 定义表单模型，基于传入的 scalelist 动态生成
const formModel = ref(
  props.scalelist.question.reduce((acc, item, index) => {
    acc[`option${index + 1}`] = { question: item.title, score: 1 };
    return acc;
  }, {})
);

// 定义验证规则
const rules = ref(
  props.scalelist.question.reduce((acc, _, index) => {
    acc[`option${index + 1}.score`] = {
      type: 'number',
      required: true,
      message: '此项为必填项',
      trigger: ['blur', 'change']
    };
    return acc;
  }, {})
);

// 处理提交逻辑
const handleSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      // 计算总分
      const totalScore = Object.values(formModel.value).reduce(
        (sum, current) => sum + current.score,
        0
      );

      // 触发父组件的 submit 事件，并传递总分
      emit('submit', totalScore);

      // 显示成功提示
      uni.showToast({
        icon: 'success',
        title: '校验通过'
      });
    })
    .catch(() => {
      // 显示失败提示
      uni.showToast({
        icon: 'error',
        title: '校验失败'
      });
    });
};
</script>

<style scoped>
.questioncontent {
  width: 100%;
  font-size: 28rpx;
  margin-bottom: 8rpx;
}
.submit {
  margin-top: 15rpx;
}
</style>
