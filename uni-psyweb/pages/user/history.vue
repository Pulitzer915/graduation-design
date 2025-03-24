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
			SDS量表
		</view>
		<image
			src="/static/image/mp-axure-image/catalog.png"
		></image>
	</view>
	<view class="title">
		历史测评曲线
	</view>
	<view class="charts-box">
		<qiun-data-charts
			type="line"
			:chartData="chartData"
			:opts="opts"
			:canvas2d="true"
		/>
	</view>
	<view class="pickerBorder">
		<view class="pickerbox">
			<uv-picker ref="picker" :columns="selectColumns" @confirm="pickConfirm"></uv-picker>
			<uv-button type="primary" @click="openPicker">{{ selectColumns[0][selectIndex] }}</uv-button>
		</view>
	</view>
	<view class="title">
		全部历史测评
	</view>
	<view class="listbox">
		<view class="list" v-for="(item, index) in scoreList">
			<view class="score" :style="{backgroundColor: colorList[findIndexByScore(item.score)]}">
				{{ item.score }}
			</view>
			<view class="level">
				{{ resultList[findIndexByScore(item.score)].title }}
			</view>
			<view class="date">
				{{ convertTimestampToChineseDateString(item.datetime) }}
			</view>
		</view>
	</view>
	<view style="height: 30rpx;"></view>
</template>

<script setup>
import {onLoad} from "@dcloudio/uni-app"
import { ref, reactive } from 'vue'
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"

onLoad((e) => {
	console.log(e.user_id);
})

const chartData = ref({});

const opts = ref({
	timing: "easeOut",
	duration: 1000,
	rotate: false,
	rotateLock: false,
	color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
	padding: [15,10,0,0],
	fontSize: 13,
	fontColor: "#666666",
	dataLabel: true,
	dataPointShape: true,
	dataPointShapeType: "solid",
	touchMoveLimit: 60,
	enableScroll: false,
	enableMarkLine: false,
	legend: {
		show: false,
		position: "bottom",
		float: "center",
		padding: 5,
		margin: 5,
		backgroundColor: "rgba(0,0,0,0)",
		borderColor: "rgba(0,0,0,0)",
		borderWidth: 0,
		fontSize: 13,
		fontColor: "#666666",
		lineHeight: 11,
		hiddenColor: "#CECECE",
		itemGap: 10
	},
	xAxis: {
		disableGrid: true,
		disabled: false,
		axisLine: true,
		axisLineColor: "#CCCCCC",
		calibration: false,
		fontColor: "#666666",
		fontSize: 10,
		lineHeight: 20,
		marginTop: 10,
		rotateLabel: true,
		rotateAngle: 45,
		itemCount: 5,
		boundaryGap: "center",
		splitNumber: 5,
		gridColor: "#CCCCCC",
		gridType: "solid",
		dashLength: 4,
		gridEval: 1,
		scrollShow: false,
		scrollAlign: "left",
		scrollColor: "#A6A6A6",
		scrollBackgroundColor: "#EFEBEF",
		title: "",
		titleFontSize: 10,
		titleOffsetY: 0,
		titleOffsetX: -10,
		titleFontColor: "#666666",
		format: ""
	},
	yAxis: {
		gridType: "dash",
		dashLength: 2,
		disabled: false,
		disableGrid: false,
		splitNumber: 5,
		gridColor: "#CCCCCC",
		padding: 10,
		showTitle: true,
		data: [
			{
				type: "value",
				position: "left",
				disabled: false,
				axisLine: true,
				axisLineColor: "#CCCCCC",
				calibration: false,
				fontColor: "#666666",
				fontSize: 12,
				textAlign: "right",
				title: "",
				titleFontSize: 10,
				titleOffsetY: -5,
				titleOffsetX: 0,
				titleFontColor: "#666666",
				min: 0,
				max: null,
				tofix: null,
				unit: "",
				format: ""
			}
		]
	},
	extra: {
		line: {
			type: "curve",
			width: 2,
			activeType: "hollow",
			linearType: "none",
			onShadow: false,
			animation: "vertical"
		},
		tooltip: {
			showBox: true,
			showArrow: false,
			showCategory: false,
			borderWidth: 0,
			borderRadius: 5,
			borderColor: "#000000",
			borderOpacity: 0.7,
			bgColor: "#000000",
			bgOpacity: 0.7,
			gridType: "solid",
			dashLength: 4,
			gridColor: "#CCCCCC",
			boxPadding: 3,
			fontSize: 13,
			lineHeight: 20,
			fontColor: "#FFFFFF",
			legendShow: true,
			legendShape: "auto",
			splitLine: true,
			horizentalLine: false,
			xAxisLabel: false,
			yAxisLabel: false,
			labelBgColor: "#FFFFFF",
			labelBgOpacity: 0.7,
			labelFontColor: "#666666"
		},
		markLine: {
			type: "solid",
			dashLength: 4,
			data: []
		}
	}
})
	  
const scoreList = ref([
    {
        "score": 20,
        "datetime": 1688596451
    },
    {
        "score": 46,
        "datetime": 1688682304
    },
    {
        "score": 18,
        "datetime": 1688724224
    },
    {
        "score": 53,
        "datetime": 1689442092
    },
    {
        "score": 20,
        "datetime": 1689781309
    },
	{
	    "score": 44,
	    "datetime": 1689781309
	},
	{
	    "score": 60,
	    "datetime": 1689781309
	}
])

const picker = ref(null)

const selectColumns = [['近7次得分', '近一个月得分']]
const selectIndex = ref(0)

const colorList = ["#6CC615", "#4E9DFF", "#F3AD36", "#EB6C6B"]
const resultList = reactive([
    {
        "title": "无抑郁",
        "content": "0~39分"
    },
    {
        "title": "轻度",
        "content": "40~47分"
    },
    {
        "title": "中度",
        "content": "48~55分"
    },
    {
        "title": "重度",
        "content": "56分以上"
    }
])

// 将时间戳转换为年月日格式的字符串
const convertTimestampToDateString = (timestamp) => {
    // 注意，这里的时间戳需要是毫秒单位，原始数据是秒单位
    const date = new Date(timestamp * 1000);
    return date.getFullYear() + '-' + 
           ('0' + (date.getMonth() + 1)).slice(-2) + '-' + 
           ('0' + date.getDate()).slice(-2);
}

// 将时间戳转换为年月日格式的字符串
const convertTimestampToChineseDateString = (timestamp) => {
    // 注意，这里的时间戳需要是毫秒单位，原始数据是秒单位
    const date = new Date(timestamp * 1000);
    return date.getFullYear() + '年' + 
           ('0' + (date.getMonth() + 1)).slice(-2) + '月' + 
           ('0' + date.getDate()).slice(-2) + '日';
}

// 转换scoreList到chartData格式
chartData.value = {
  categories: scoreList.value.map(item => convertTimestampToDateString(item.datetime)),
  series: [{
    name: "",
    data: scoreList.value.map(item => item.score)
  }]
};

const openPicker = () => {
	picker.value.open()
}

const pickConfirm = (e) => {
	selectIndex.value = e.indexs[0];
}

const findIndexByScore = (score) => {
  for (let i = 0; i < resultList.length; i++) {
    const range = resultList[i].content;
    if (range.includes('以上')) {
      const minScore = parseInt(range.split('分以上')[0]);
      if (score >= minScore) return i;
    } else {
      const [minScore, maxScore] = range.split('~').map(s => parseInt(s));
      if (score >= minScore && score <= maxScore) return i;
    }
  }
  // 如果分数不在任何已定义的范围内，可以根据需要返回一个默认值，比如-1
  return -1;
}

const goback = () => {
	uni.navigateBack()
}

</script>

<style lang="scss" scoped>
.titleBar{
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	image{
		height: 45rpx;
		width: 45rpx;
	}
	.navTitle{
		margin: 0 10rpx 0 30rpx;
		font-size: 36rpx;
		font-weight: bold;
	}
}
.title{
	margin: 30rpx;
	padding-left: 24rpx;
	border-radius: 5px;
	background-color: #E0E8F6;
	height: 80rpx;
	font-size: 32rpx;
	display: flex;
	align-items: center;
	line-height: 80rpx;
}
.charts-box{
	margin: 30rpx;
}
.pickerBorder{
	display: flex;
	margin: 0 30rpx;
	height: 60rpx;
	justify-content: flex-end; /* 使子元素对齐到右侧 */
	.pickerbox{
		:deep(){
			width: 40%;
			.uv-button{
				height: 60rpx;
				line-height: 60rpx;
			}
		}
	}
}
.listbox{
	margin: 30rpx;
	border-bottom: 1px solid #F3F3F3;
	.list{
		height: 100rpx;
		display: flex;
		align-items: center;
		padding: 0 10rpx;
		border-top: 1px solid #F3F3F3;
		.score{
			height: 80rpx;
			width: 80rpx;
			background-color: #EB6C6B;
			border-radius: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 36rpx;
			color: #fff;
		}
		.level{
			flex-grow: 1;
			padding: 20rpx;
			color: #999999;
		}
		.date{
			color: #999999;
		}
	}
}
</style>