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
			注册
		</view>
	</view>
	<view class="logo">
		
	</view>
	<view class="form">
		<uv-form labelPosition="left" :model="formModel" :rules="rules" ref="form" labelWidth="140rpx">
			<uv-form-item label="用户名" prop="name" borderBottom>
				<uv-input v-model="formModel.name" border="none" placeholder="请输入用户名">
				</uv-input>
			</uv-form-item>
			<uv-form-item label="性别" prop="gender" borderBottom @click="showSexSelect">
				<uv-input v-model="formModel.gender" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none">
				</uv-input>
				<template v-slot:right>
					<uv-icon name="arrow-right"></uv-icon>
				</template>
			</uv-form-item>
			<uv-form-item label="出生日期" prop="birth" borderBottom @click="showDatetimePicker">
				<uv-input :value="timestampToYMD(formModel.birth)" disabled disabledColor="#ffffff" placeholder="请选择日期" border="none">
				</uv-input>
				<template v-slot:right>
					<uv-icon name="arrow-right"></uv-icon>
				</template>
			</uv-form-item>
			<uv-form-item label="密码" prop="password" borderBottom>
				<uv-input v-model="formModel.password" type="password" border="none" placeholder="请输入密码">
				</uv-input>
			</uv-form-item>
			<uv-form-item label="确认密码" prop="rePassword" borderBottom>
				<uv-input v-model="formModel.rePassword" type="password" border="none" placeholder="请再次确认密码">
				</uv-input>
			</uv-form-item>
			<uv-form-item label="邮箱" prop="email" borderBottom>
				<uv-input v-model="formModel.email" border="none" placeholder="请输入邮箱">
				</uv-input>
			</uv-form-item>
			<uv-form-item label="验证码" prop="code" borderBottom>
				<uv-input v-model="formModel.code" placeholder="请输入验证码" border="none">
				</uv-input>
				<template v-slot:right>
					<uv-code seconds="10" ref="code" @change="codeChange" @end="codeEnd"></uv-code>
					<uv-button size="mini" type="success" @click="getCode" :disabled="sendCode" >{{tips}}</uv-button>
				</template>
			</uv-form-item>
			<view class="borderbox">
				<uv-checkbox-group
					class="protocol"
					v-model="readStatus"
					shape="circle"
					size="30rpx"
					labelSize="26rpx"
					iconSize="20rpx"
				>
					<uv-checkbox
						class="checkbox"
						:name="1"
						label="我已阅读相关协议"
						labelColor="grey"
					></uv-checkbox>
				</uv-checkbox-group>
			</view>
			<uv-button type="primary" text="注册" customStyle="margin-top: 10px" @click="submit"></uv-button>
		</uv-form>
		<uv-action-sheet ref="Select" :actions="actions" title="请选择性别" @select="sexSelect">
		</uv-action-sheet>
		<uv-datetime-picker ref="datetimePicker" v-model="currentDate" mode="date" @confirm="confirmDateTime">
		</uv-datetime-picker>
		<uv-toast ref="toast"></uv-toast>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from "@dcloudio/uni-app"
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"

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
	name: '普利策老来俏',
	gender: '男',
	birth: 1712663295175,
	password: 'lc65120101',
	rePassword: 'lc65120101',
	email: '1024996926@qq.com',
	code: '1234'
})
const rules = ref({
	'name': {
		type: 'string',
		required: true,
		message: '请填写姓名',
		trigger: ['blur', 'change']
	},
	'gender': {
		type: 'string',
		max: 1,
		required: true,
		message: '请选择男或女',
		trigger: ['blur', 'change']
	},
	'birth': {
		type: 'number',
		required: true,
		message: '请选择出生日期',
		trigger: ['blur', 'change']
	},
	'password': {
		type: 'string',
		required: true,
		message: '请填写密码',
		trigger: ['blur', 'change']
	},
	'rePassword': [
		{ type: 'string', required: true, message: '请再次输入密码', trigger: 'blur' },
		{ validator: (rule, value, callback) => {
			if (value !== formModel.value.password) {
			  callback(new Error('两次输入的密码不一致'));
			} else {
			  callback();
			}
		}, trigger: 'blur'}
	],
	'email': {
		type: 'email',
		required: true,
		message: '请输入正确的邮箱地址',
		trigger: ['blur', 'change']
	},
	'code': {
		type: 'string',
		required: true,
		message: '请输入验证码',
		trigger: ['blur', 'change']
	}
})
const actions = ref([
	{ name: '男', value: '男' },
	{ name: '女', value: '女' }
])
const tips = ref('获取验证码')
const sendCode = ref(false)

const showSexSelect  = () => {
	uni.hideKeyboard()
	Select.value.open()
}

const sexSelect = (action) => {
	formModel.value.gender = action.value;
	form.value.validateField('gender')
}

const showDatetimePicker = () => {
	uni.hideKeyboard()
	datetimePicker.value.open()
}

const timestampToYMD = (timestamp) => {
  // 创建一个新的 Date 对象，传入时间戳作为参数
  const date = new Date(timestamp);

  // 获取年、月、日
  const year = date.getFullYear();
  // getMonth() 方法返回的月份是从 0 开始的，所以需要加 1
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份补零
  const day = String(date.getDate()).padStart(2, '0'); // 日补零

  // 返回年-月-日的格式
  return `${year}-${month}-${day}`;
}

const confirmDateTime = (e) => {
	formModel.value.birth =  e.value
	form.value.validateField('birth')
}

const getCode = () => {
	sendCode.value = true,
	code.value.start()
	uni.request({
		url: "http://www.farm.com/email_send",
		method: "POST",
		data:{
			email: formModel.value.email,
		},
		success: ({ data }) => {
			if(data.code == 200){
				toast.value.show({
					message: data.message,
					type: "success",
					duration: "1000"
				})
			}
			else{
				toast.value.show({
					message: data.message,
					type: "error",
					duration: "1000"
				})
			}
		},
		fail: (res) => {
			toast.value.show({
				message: "请求发送失败",
				type: "error",
				duration: "1000"
			})
		},
		complete: () => {
			
		}
	})
}

const codeChange = (text) => {
	tips.value = text
}

const codeEnd = () => {
	sendCode.value = false;
}

const submit = () => {
	if (readStatus.value.length == 0){
		toast.value.show({
			message: "请阅读相关协议",
			type: "error",
			duration: "1000"
		})
		return
	}
	form.value.validate().then(res => {
		toast.value.show({
			message: "已提交",
			type: "primary ",
			duration: "1000"
		})
		uni.request({
			url: "http://www.farm.com/register",
			method: "POST",
			data:{
				form: formModel.value,
			},
			success: ({ data }) => {
				if(data.code == 200){
					toast.value.show({
						message: data.message,
						type: "success",
						duration: "1000"
					})
				}
				else{
					toast.value.show({
						message: data.message,
						type: "error",
						duration: "1000"
					})
				}
			}
		})
	}).catch(errors => {
		toast.value.show({
			message: "校验错误",
			type: "error",
			duration: "1000"
		})
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
	height: 280rpx;
}
.form{
	margin: 40rpx;
}
.borderbox{
	margin: 20rpx 0rpx;
}
</style>
