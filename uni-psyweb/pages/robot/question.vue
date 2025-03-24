<template>
	<view class="status_bar" :style="{height: getStatusBarHeight() + 'px'}">
		<!-- 这里是状态栏 -->
	</view>
	<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
		<view class="navTitle">
			辅助评估
		</view>
	</view>
	<view class="question">
		<uv-form :model="formModel" :rules="rules" ref="formRef">
			<uv-form-item
				v-for="(item, index) in scalelist.question"
				:prop="`option${index + 1}.score`"
				labelWidth="16rpx"
			>
				<uv-radio-group
					v-model="formModel[`option${index + 1}`]['score']"
					:key="index"
					placement=column
				>
					<view class="questioncontent">
						{{ index+1 }}. {{item.title}}
					</view>
					<uv-radio 
						:customStyle="{margin: '8px'}" 
						v-for="(itm, idx) in item.option" 
						:key="item.title" 
						:label="itm.answer" 
						:name="itm.score"
						labelSize=26rpx
					>
					</uv-radio>
					<!-- <view class="separate"></view> -->
				</uv-radio-group>
			</uv-form-item>
			<uv-button
				type="primary"
				text="提交"
				@click="submit()"
				class="submit"
			>
			</uv-button>
		</uv-form>
	</view>
	<view class="safe-area-inset-bottom">
		
	</view>
</template>

<script setup>
import {onLoad} from "@dcloudio/uni-app"
import { reactive, ref } from "vue";
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"


const scalelist = ref(uni.getStorageSync('chatScale'))

const formRef = ref(null)

// 使用reduce方法创建formModel对象,记录用户回答的题目以及该题目的得分
const formModel = ref(scalelist.value.question.reduce((acc, item, index) => {
  acc[`option${index + 1}`] = { 'question': item.title, 'score': 1 };
  return acc;
}, {}));


//生成验证规则
const rules = ref(scalelist.value.question.reduce((acc, _, index) => {
      acc[`option${index + 1}.score`] = { type: 'number', required: true, message: '此项为必填项', trigger: ['blur', 'change'] };
      return acc;
    }, {}));

const submit = () => {
	formRef.value.validate().then(res => {
		uni.showToast({
			icon: 'success',
			title: '校验通过'
		})
		const totalScore = Object.values(formModel.value).reduce((sum, current) => sum + current.score, 0);
		uni.reLaunch({
			url:'/pages/scale/result?score=' + totalScore
		})
		
	}).catch(errors => {
		uni.showToast({
			icon: 'error',
			title: '校验失败'
		})
	})
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
.question{
	padding: 30rpx;
	.uv-radio-group{
		display: flex;
		flex-direction: column;
		.questioncontent{
			width: 100%;
			font-size: 28rpx;
		}
		.separate{
			height: 15rpx;
		}
	}
}
.submit{
	margin-top: 15rpx;
}
</style>
