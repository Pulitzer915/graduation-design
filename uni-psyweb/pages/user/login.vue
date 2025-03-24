<template>
	<view class="status_bar" :style="{height: getStatusBarHeight() + 'px'}">
		<!-- 这里是状态栏 -->
	</view>
	<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
		<image
			src="/static/image/mp-axure-image/goback.png"
			@click="goback"
		></image>
		<view class="navTitle">
			登录
		</view>
	</view>
	<view class="logo">
		
	</view>
	<view class="form">
		<uv-form labelPosition="left" :model="formModel" :rules="rules" ref="form" labelWidth="140rpx">
			<uv-form-item label="邮箱" prop="email" borderBottom>
				<uv-input v-model="formModel.email" border="none" clearable placeholder="请输入邮箱">
				</uv-input>
			</uv-form-item>
			<uv-form-item label="密码" prop="password" borderBottom>
				<uv-input v-model="formModel.password" type="password" border="none" clearable placeholder="请输入密码">
				</uv-input>
			</uv-form-item>
			<uv-button type="primary" text="登录" customStyle="margin-top: 10px" @click="submit"></uv-button>
		</uv-form>
		<uv-toast ref="toast"></uv-toast>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from "@dcloudio/uni-app"
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"
import CryptoJS from 'crypto-js';


onLoad(() => {
	
})

const readStatus = ref([])
const form = ref(null)
const Select = ref(null)
const currentDate = ref(Number(new Date))
const datetimePicker = ref(null)
const code = ref(null)
const toast = ref(null)
const formModel = ref({
	email: '1024996926@qq.com',
	password: 'lc65120101',
})
const rules = ref({
	'email': {
		type: 'email',
		required: true,
		message: '请输入正确的邮箱地址',
		trigger: ['blur', 'change']
	},
	'password': {
		type: 'string',
		required: true,
		message: '请填写密码',
		trigger: ['blur', 'change']
	}
})

const submit = () => {
	form.value.validate().then(res => {
		toast.value.show({
			message: "已提交",
			type: "primary ",
			duration: "1000"
		})
	// 	uni.request({
	// 		url: "http://www.farm.com/login",
	// 		method: "POST",
	// 		data:{
	// 			form: formModel.value
	// 		},
	// 		success: ({ data }) => {
	// 			console.log(data);
	// 			// if(data.code == 200){
	// 			// 	toast.value.show({
	// 			// 		message: data.message,
	// 			// 		type: "success",
	// 			// 		duration: "1000"
	// 			// 	})
	// 			// }
	// 			// else{
	// 			// 	toast.value.show({
	// 			// 		message: data.message,
	// 			// 		type: "error",
	// 			// 		duration: "1000"
	// 			// 	})
	// 			// }
	// 		}
	// 	})
	// }).catch(errors => {
	// 	toast.value.show({
	// 		message: "校验错误",
	// 		type: "error",
	// 		duration: "1000"
	// 	})
		uni.switchTab({
			url: '/pages/user/history'
		});
	})
}

const goback = () => {
	uni.navigateBack()
}

</script>

<style lang="scss" scoped>
.titleBar{
	display: flex;
	align-items: center;
	padding-left: 30rpx;
	image{
		height: 45rpx;
		width: 45rpx;
	}
	.navTitle{
		margin: 0px 30rpx;
		font-size: 36rpx;
		font-weight: bold;
	}
}
.logo{
	height: 420rpx;
}
.form{
	margin: 40rpx;
}
.borderbox{
	margin: 20rpx 0rpx;
}
</style>
