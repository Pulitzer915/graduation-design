<template>
	<view class="pageBg" style="overflow: hidden;">
		<view class="status_bar" :style="{height: getStatusBarHeight() + 'px'}">
			<!-- 这里是状态栏 -->
		</view>
		<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
			<view class="navTitle">
				全部量表
			</view>
		</view>
		<view class="scalebox" v-for="(item, index) in navList" :key="item.id" @click="goQuestion(item.scale_id)">
			<!-- <image :src="item.imgSrc" mode="aspectFill"></image> -->
			<view class="info">
				<view class="title">
					{{ item.title }}
				</view>
				<view class="content">
					{{ item.content }}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue';
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"

const navList = reactive([
	{
		id: '1',
		title: 'SDS量表',
		content: '抑郁自评量表(SDS)是抑郁自评量表中最著名的量表之一，为美国教育卫生福利部推荐的用于精神药理学研究的量表之一。因使用简便，能直观反映病人抑郁的主观感受，当前广泛应用于抑郁症测试筛查。',
		imgSrc: 'https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/scale-banner/SDS.png',
		scale_id: 'sds_scale'
	},
	{
		id: '2',
		title: 'SAS量表',
		content: '焦虑自评量表(SAS)是一种分析病人主观症状的相当简便的临床工具。由于焦虑是心理咨询门诊中较常见的一种情绪障碍，所以近年来SAS是咨询门诊中了解焦虑症状的常用量表。',
		imgSrc: 'https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/scale-banner/PHQ-9.png',
		scale_id: 'sas_scale'
	},
	{
		id: '3',
		title: 'MDQ量表',
		content: 'MDQ用于筛查双相情感障碍（躁狂抑郁症），主要包含13个项目。该量表为目前世界范围内最常用的双相障碍筛查量表。',
		imgSrc: 'https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/scale-banner/CES-D.png',
		scale_id: 'mdq_scale'
	},
	{
		id: '4',
		title: 'PQ-16量表',
		content: '精神病前驱期问卷（Prodromal Questionnaire, PQ-16） 是一种用于评估精神病（如精神分裂症）前驱期症状的自评工具。该问卷主要用于识别个体是否经历了可能预示精神病发展的早期症状（前驱期症状），尤其是阳性症状如幻觉、妄想等。',
		imgSrc: 'https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/scale-banner/BDI.png',
		scale_id: 'pq16_scale'
	},
	{
		id: '5',
		title: 'OCI-R量表',
		content: 'OCI-R由Foe等人在1998年编制的强迫量表(OCI)的基础上修订而成，OCI-R在很多国家的临床和非临床样本中都得到广泛的应用，具有较好的信、效度。国内唐苏勤等人分别在非临床样本和临床样本中进行了信、 效度检验， 证明了OCI-R中文版具有良好的信、效度。',
		imgSrc: 'https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/scale-banner/BDI.png',
		scale_id: 'ocir_scale'
	}
])

const goQuestion = (scale_id) => {
	uni.navigateTo({
		url: scale_id
	});
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
.scalebox{
	margin: 30rpx;
	border: 1 solid gray;
	display: flex;
	// height: 260rpx;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	background-color: #FFFFFF;
	image{
		height: 100%;
		width: 260rpx;
	};
	.info{
		flex: 1;
		overflow: hidden;
		.title{
			margin: 0 15rpx;
			padding: 12rpx 0;
			font-size: 30rpx;
			font-weight: bold;
			color: #333333;
			border-bottom: 1px solid #CDCDCD;
		}
		.content{
			padding: 12rpx;
			font-size: 26rpx;
			color: #A3A3A3;
			text-align: justify;
		}
	}
}
</style>
