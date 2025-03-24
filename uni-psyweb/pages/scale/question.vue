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
						:key="itm.title" 
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
		<view class="safe-area-inset-bottom">
			
		</view>
	</view>
</template>

<script setup>
import {onLoad} from "@dcloudio/uni-app"
import { reactive, ref } from "vue";
import { getStatusBarHeight, getTitleBarHeight } from "@/utils/system.js"

onLoad((e) => {
	console.log(e.scale_id);
})

const formRef = ref(null)

//模拟从后端接收的量表数据
const scalelist = {
    "name": "抑郁自评量表SDS",
    "question": [
        {
            "title": "我觉得闷闷不乐，情绪低沉",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我觉得一天之中早晨最好",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我一阵阵哭出来或觉得想哭",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我晚上睡眠不好",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我吃的跟平常一样多",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我与异性亲密接触时和以往一样感觉愉快",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我发觉我的体重在下降",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我有便秘的苦恼",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我心跳比平时快",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我无缘无故地感到疲乏",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我的头脑跟平常一样清楚",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我觉得经常做的事情并没有困难",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我觉得不安而平静不下来",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我对将来抱有希望",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我比平常容易生气激动",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我觉得作出决定是容易的",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我觉得自己是个有用的人，有人需要我",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*我的生活过得很有意思",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "我认为如果我死了别人会生活得好些",
            "option": [
                {
                    "score": 1,
                    "answer": "没有或很少"
                },
                {
                    "score": 2,
                    "answer": "少部分时间"
                },
                {
                    "score": 3,
                    "answer": "相当多时间"
                },
                {
                    "score": 4,
                    "answer": "绝大部分或全部时间"
                }
            ]
        },
        {
            "title": "*平常感兴趣的事我仍然感兴趣",
            "option": [
                {
                    "score": 4,
                    "answer": "没有或很少"
                },
                {
                    "score": 3,
                    "answer": "少部分时间"
                },
                {
                    "score": 2,
                    "answer": "相当多时间"
                },
                {
                    "score": 1,
                    "answer": "绝大部分或全部时间"
                }
            ]
        }
    ]
}


// 使用reduce方法创建formModel对象,记录用户回答的题目以及该题目的得分
const formModel = ref(scalelist.question.reduce((acc, item, index) => {
  acc[`option${index + 1}`] = { 'question': item.title, 'score': 2 };
  return acc;
}, {}));


//生成验证规则
const rules = ref(scalelist.question.reduce((acc, _, index) => {
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
		uni.navigateTo({
			url:'result?score=' + totalScore
		})
	}).catch(errors => {
		uni.showToast({
			icon: 'error',
			title: '校验失败'
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
