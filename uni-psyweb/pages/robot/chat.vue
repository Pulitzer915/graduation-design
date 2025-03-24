<template>
	<view class="page" :style="{height: pageHeight + 'px'}">
		<view class="chatBorder">
			<!-- <uv-sticky :offsetTop="-1000"> -->
			<view class="status_bar" :style="{height: getStatusBarHeight() + 'px'}">
				<!-- 这里是状态栏 -->
			</view>
			<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
				<image
					src="/static/image/mp-axure-image/goback.png"
					@click="goback"
				></image>
				<view class="navTitle">
					小麦助手
				</view>
			</view>
			<!-- </uv-sticky> -->
			<view class="scrollViewBorder">
				<scroll-view 
					:scroll-y="true" 
					class="chatBox"
					:scroll-top="scrollTop"
				>
					<template v-for="(item, index) in memory.messages">
						<view class="chatMessageAssistant" v-if="item.role == 'assistant'">
							<view class="chatMessageAssistantContent">
								{{ item.content }}
							</view>
							<view class="" :style="{flexGrow: '1'}">
								
							</view>
						</view>
						<view class="chatMessageUser" v-else>
							<view class="" :style="{flexGrow: '1'}">
								
							</view>
							<view class="chatMessageUserContent">
								{{ item.content }}
							</view>
						</view>
					</template>
					<view class="chatMessageAssistant" v-if="loadingSwitch">
						<view class="chatMessageAssistantLoadingIcon">
							<uv-loading-icon mode="spinner" size="34rpx"></uv-loading-icon>
						</view>
						<view class="" :style="{flexGrow: '1'}">
							
						</view>
					</view>
					<template v-if="goNext">
						<view class="chatMessageAssistantResult" v-if="goScale">
							<text style="">经过我们刚才的交流，小麦已经为您准备好了合适的量表。点击下方按钮前往作答，小麦将向您提供更精确的评估结果。</text>
						</view>
						<view class="chatMessageAssistant" v-if="goHome">
							<text class="chatMessageAssistantContent">通过上述交流，我无法向您提供合适的量表</text>
							<view class="" :style="{flexGrow: '1'}">
								
							</view>
						</view>
					</template>
					<!-- <view class="spacePadding">
						
					</view> -->
				</scroll-view >
			</view>
			<view class="submitBox">
				<view class="borderBox" v-if="!goNext">
					<uv-textarea
						v-model="inputMessage"
						placeholder="请输入内容"
						:maxlength="-1"
						border="none"
						height="60rpx"
						:adjust-position="false"
						:textStyle="{fontSize: '26rpx'}"
						:customStyle="{borderRadius: '10px', display: 'flex', flex: '1'}"
						@focus="textareaFocus"
						@blur="textareaBlur"
					></uv-textarea>
					<view style="display: flex; width:60rpx; height:60rpx; justify-content: center; align-self: center" v-if="loadingSwitch">
						<uv-loading-icon mode="circle" timing-function="ease-in-out" size="36rpx"></uv-loading-icon>
					</view>
					<view class="submit" v-else>
						<uv-image
							src="/static/image/mp-axure-image/submit.png"
							width="60rpx"
							height="60rpx"
							v-if="inputTag"
						></uv-image>
						<uv-image
							src="/static/image/mp-axure-image/submit-h.png"
							width="60rpx"
							height="60rpx"
							@click="submit"
							v-else
						></uv-image>
					</view>
				</view>
				<template v-else>
					<view class="boderBox" v-if="goScale">
						<uv-button :custom-style="{borderRadius: '14px', }" type="primary" class="goNextButton" @click="goNow">立即前往</uv-button>
					</view>
					<view class="boderBox" v-if="goHome">
						<uv-button :custom-style="{borderRadius: '14px', }" type="primary" class="goNextButton" @click="goToHome">回到首页</uv-button>
					</view>
				</template>
				<view :style="{height: height + 'rpx'}">
					
				</view>
			</view>
			<view class="safe-area-inset-bottom">
				
			</view>
		</view>
		<uv-modal
			ref="continueModal"
			title="已为您准备好相关题目"
			showCancelButton
			:closeOnClickOverlay = "false"
			confirmText = "前往完成"
			cancelText = "退出"
			@confirm="modalConfirm"
			@cancel="modelCancel"
		>
			<view class="modalSlot">
				<rich-text :nodes="modalContent"></rich-text>
			</view>
		</uv-modal>
	</view>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue';
import {onLoad, onUnload} from "@dcloudio/uni-app"
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"

const pageHeight = ref(1000)
const inputMessage = ref('')
const features = ref([])
const candidate_diseases = ref([])
const loadingSwitch = ref(false)
const goNext = ref(true)
const goScale = ref(true)
const goHome = ref(false)
const continueModal = ref(null)
const modalContent = "通过上述交流，我已为您匹配到最贴近您自身情况的量表作为辅助评估"
const height = ref(0)
const scrollTop = ref(10000)
const inputTag = computed(() => {
	return inputMessage.value.trim() === ''
})
const memory = ref({
	"user_features": [],
	"used_features": [],
	"messages": [{
			role: "assistant",
			content: "您好，请问您最近生活如何，有什么情绪上的困扰吗？"
		},
		{
			role: "user",
			content: "我经常感觉很累，没有力气做任何事。而且我上课的时候总是分心，想着其他事情。"
		},
		{
			role: "assistant",
			content: "很抱歉听到你感到如此疲惫和虚弱，无法集中精力。你能告诉我当你在下课后，会因此感到焦虑或者难过吗？"
		},
		{
			role: "user",
			content: "没有别的了，就这些情况。"
		}
	],
	"is_end": 0
})

onMounted(() => {
	nextTick(() => {
	    uni.getSystemInfo({
			success: (res) => {
				pageHeight.value = res.windowHeight
			}
	    })
	})
})

const submit = () => {
	let tempMessage = inputMessage.value
	// let tempMessageList = memory.value.messages
	inputMessage.value = ''
	memory.value.messages.push({
		role: "user",
		content: tempMessage
	})
	loadingSwitch.value = true
	uni.request({
	    url: 'http://9fv93og14537.vicp.fun:37636/chat/', //仅为示例，并非真实接口地址。
		method: 'POST',
	    data: memory.value,
	    success: ({data}) => {
			loadingSwitch.value = false
			memory.value = data
			if(data.is_end == 1){
				if(data.possible_diseases.length > 0){
					uni.setStorageSync('memory', memory.value)
					goNext.value = true
					goScale.value = true
				}
				else{
					goNext.value = true
					goHome.value = true
				}
				
			}
	    }
	});
}

// const estimate = () => {
// 	uni.request({
// 	    url: 'http://10.16.22.110:8001/estimation/', //仅为示例，并非真实接口地址。
// 		method: 'POST',
// 	    data: {
// 			user_description: user_description.value
// 	    },
// 	    success: (res) => {
// 			let scale = JSON.parse(res.data.scale)
// 			// 设置数据到存储
// 			uni.setStorageSync('chatScale', scale);
// 			uni.reLaunch({
// 				url: '/pages/robot/question'
// 			})
// 	    }
// 	});
// }

const goNow = () => {
	uni.navigateTo({
		url: "/pages/robot/recommend_scale"
	})
}

const goToHome = () => {
	uni.reLaunch({
		url:"/pages/index/index"
	})
}

const modalConfirm = () => {
	estimate()
}

const modelCancel = () => {
	uni.switchTab({
		url: '/pages/index/index'
	})
}

const goback = () => {
	uni.switchTab({
		url: '/pages/index/index'
	});
}

const textareaFocus = (event) => {
	height.value = event.detail.height + 200 + 60 + 40;
	// 需要在下次 DOM 更新循环结束之后执行延迟回调才能成功刷新到底部
	nextTick(() => {
		scrollTop.value += 1
	})
	
}
const textareaBlur = (event) => {
	height.value = 0
}

</script>

<style lang="scss" scoped>
// .page{
// 	height: 100vh;
// }
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
.chatBorder{
	display: flex;
	flex-direction: column;
	height: 100%;
}
.scrollViewBorder{
	display: flex;
	flex-grow: 1;
	flex-direction: column;
}
.chatBox{
	display: flex;
	height: 0rpx;
	// padding-top: 20rpx;
	flex-grow: 1;
	flex-direction: column;
	.chatMessageAssistantResult{
		display: flex;
		align-self: flex-start;
		font-size: 26rpx;
		padding: 20rpx 22rpx;
		color: #0D0D0D;
		background-color: #F4F4F5;
		margin: 16rpx 22rpx;	
		border-radius: 5px 18px 18px 18px; 
		text-align: justify;
		flex-direction: row;
	}
	.chatMessageAssistantLoadingIcon{
		background-color: #F4F4F5;
		padding:20rpx 22rpx;
		border-radius: 5px 18px 18px 18px; 
		text-align: justify;
	}
	.chatMessageAssistant{
		display: flex;
		font-size: 26rpx;
		padding:16rpx 22rpx;
		color: #0D0D0D;
		.chatMessageAssistantContent{
			background-color: #F4F4F5;
			padding:20rpx 22rpx;
			border-radius: 5px 18px 18px 18px; 
			text-align: justify;
		}
	}
	.chatMessageUser{
		display: flex;
		font-size: 26rpx;
		padding:16rpx 22rpx;
		color: white;
		justify-content: flex-end;
		.chatMessageUserContent{
			background-color: #138DDE;
			padding:20rpx 22rpx;
			border-radius: 18px 5px 18px 18px; 
			text-align: justify;
		}
	}
	.spacePadding{
		height: calc(330rpx + env(safe-area-inset-bottom));
	}
}
.submitBox{
	flex-grow: 0;
	// background-color: #F4F4F5;
	padding: 20rpx 30rpx;
	.borderBox{
		border: 1px solid #DADBDE;
		border-radius: 10px;
		width: 100%;
		display: flex;
		.submit{
			display: flex;
			background-color: #FFFFFF;
			border-radius: 10px;
			justify-content: center;
			align-self: center;
		}
	}
}
.modalSlot{
	color: #959595
}
</style>

