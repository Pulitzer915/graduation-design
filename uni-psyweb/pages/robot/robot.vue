<template>
	<uv-modal
		ref="startModal"
		title="欢迎使用小麦机器人Beta版"
		showCancelButton
		:closeOnClickOverlay = "false"
		@confirm="modalConfirm"
		@cancel="modelCancel"
	>
		<view class="modalSlot">
			<rich-text :nodes="modalContent"></rich-text>
		</view>
	</uv-modal>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import {onLoad, onShow} from "@dcloudio/uni-app"

const startModal = ref(null)
const modalContent = "在评估过程中您将与小麦机器人完成多轮交流，请根据自身真实情况完成回答以得到最准确的结果"

onShow(() => {
	nextTick(() => {
		startModal.value.open()
	})
});

const modalConfirm = () => {
	uni.reLaunch({
		url:"/pages/robot/chat"
	})
}

const modelCancel = () => {
	uni.showTabBar()
	uni.switchTab({
		url: '/pages/index/index'
	});
}


</script>

<style lang="scss" scoped>
.modalSlot{
	color: #959595
}
</style>
