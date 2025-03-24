<template>
	<view class="pageBg" style="overflow: hidden;">
		<view class="status_bar" :style="{height: getStatusBarHeight() + 'px'}">
			<!-- 这里是状态栏 -->
		</view>
		<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
			
		</view>
		<view class="userinfo">
			<uv-avatar
				:text="user_name[0]"
				fontSize="18"
				randomBgColor
				size="160rpx"
			></uv-avatar>
			<view class="info">
				{{ user_name }}
			</view>
		</view>
		<template v-if="user_status">
			<view class="tool">
				<uv-list border>
					<uv-list-item show-arrow title="历史记录" link="navigateTo" :to='`history?user_id=${user_id}`'></uv-list-item>
					<uv-list-item show-arrow border title="其他" ></uv-list-item>
				</uv-list>
			</view>
			<view class="logout">
				<uv-button type="error">退出登录</uv-button>
			</view>
		</template>
		<template v-else>
			<view class="logout">
				<uv-button type="primary" @click="goLogin">登录</uv-button>
			</view>
			<view class="logout">
				<uv-button type="success" @click="goRegister">注册</uv-button>
			</view>
		</template>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"

const user_id = ref('v96vwg02')
const user_status = ref(true)
const user_name = ref('用户名')

const goRegister = () => {
	uni.navigateTo({
		url: '/pages/user/register'
	})
}

const goLogin = () => {
	uni.navigateTo({
		url: '/pages/user/login'
	})
}

</script>

<style lang="scss" scoped>
.userinfo{
	margin: 30rpx;
	padding: 90rpx;
	display: flex;
	align-items: center;
	border-radius: 5px;
	.info{
		flex-grow: 1;
		padding: 0 0 0 80rpx;
		font-size: 36rpx;
	}
}
.tool{
	margin: 0 30rpx;
}
.logout{
	margin: 30rpx;
}
</style>
