// SDS量表信息
const SDS_SCALE = {
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

export const getSdsScale = () => {
	return SDS_SCALE
}

const SAS_SCALE = {
    "name": "焦虑自评量表SAS",
    "question": [
        {
            "title": "我感到比往常更加神经过敏和焦虑",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我无缘无故感到担心",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我容易心烦意乱或感到恐慌",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我感到我的身体好像被分成几块，支离破碎",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我感到事事都很顺利，不会有倒霉的事情发生",
            "option": [
				{ "score": 4, "answer": "没有或很少有" },
				{ "score": 3, "answer": "有时有" },
				{ "score": 2, "answer": "大部分时间有" },
                { "score": 1, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我的四肢抖动和震颤",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我因头痛、颈痛、背痛而烦恼",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我感到无力且容易疲劳",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我感到很平静，能安静坐下来",
            "option": [
                { "score": 4, "answer": "没有或很少有" },
                { "score": 3, "answer": "有时有" },
                { "score": 2, "answer": "大部分时间有" },
                { "score": 1, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我感到我的心跳较快",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我因阵阵的眩晕而不舒服",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我有阵阵要昏倒的感觉",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我呼吸时进气和出气都不费力",
            "option": [
                { "score": 4, "answer": "没有或很少有" },
                { "score": 3, "answer": "有时有" },
                { "score": 2, "answer": "大部分时间有" },
                { "score": 1, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我的手指和脚趾感到麻木和刺痛",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我因胃痛和消化不良而苦恼",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我必须时常排尿",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我的手总是很温暖而干燥",
            "option": [
                { "score": 4, "answer": "没有或很少有" },
                { "score": 3, "answer": "有时有" },
                { "score": 2, "answer": "大部分时间有" },
                { "score": 1, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我觉得脸发烧发红",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我容易入睡，晚上休息很好",
            "option": [
                { "score": 4, "answer": "没有或很少有" },
                { "score": 3, "answer": "有时有" },
                { "score": 2, "answer": "大部分时间有" },
                { "score": 1, "answer": "绝大多数时间有" }
            ]
        },
        {
            "title": "我做恶梦",
            "option": [
                { "score": 1, "answer": "没有或很少有" },
                { "score": 2, "answer": "有时有" },
                { "score": 3, "answer": "大部分时间有" },
                { "score": 4, "answer": "绝大多数时间有" }
            ]
        }
    ]
}

export const getSasScale = () => {
	return SAS_SCALE
}

const MDQ_SCALE = {
    "name": "心境障碍问卷MDQ",
    "question": [
        {
            "title": "你感到非常好或者非常开心，但其他人认为你与平时不一样，或因为特别开心，兴奋而给你带来麻烦？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你特别容易激动，好指责他人，或易斗殴或吵架？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你比平时更充满自信？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "睡眠比平时明显减少，但你并不感到缺乏睡眠？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你比平时更健谈或讲话特别快？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你感到思维迅速，想法特别多，或者难以减慢你的思维？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你很容易随境转移，注意力很难集中，或很难专心做一件事？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你比平时更加精力充沛？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你比平时更加积极主动或忙忙碌碌？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你比平时更加乐于社交或外出，例如半夜还在打电话给朋友？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你比平时性兴趣更强烈？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "你与平时处事的方式不一样，使得他们感到过分，愚蠢，或者太危险？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        },
        {
            "title": "花钱大方给你或家人带来麻烦？",
            "option": [
                {
                    "score": 1,
                    "answer": "是"
                },
                {
                    "score": 0,
                    "answer": "否"
                }
            ]
        }
    ]
}

export const getMdqScale = () => {
	return MDQ_SCALE
}

const PQ16_SCALE = {
  "name": "量表名称", 
  "question": [
    {
      "title": "我对喜欢的事情不再有兴趣。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我经常经历一些似曾发生过的事情。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我有时可以闻到别人闻不到的气味，或尝到别人尝不出的味道。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我耳朵里经常出现一些不寻常的声音，如撞击声、碎裂声、嘶嘶声、拍打声、铃声等。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我有时会对自己经历的事情是真实的还是想像的感到困惑。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "当我注视他人或者镜子中的自己时，会发现面部在发生变化。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我与人首次会面时会非常不安。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我曾看到过别人无法看到的事物。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我的想法有时很强烈以至于我几乎都能听到。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我有时能从广告、商店橱窗或者周围事物的排列方式中发现特别的意义。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "有时我觉得无法控制自己的思维或想法。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "有时我会突然被远处一些平时没意识到的声音弄得分心。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我曾听到别人无法听到的声音，诸如窃窃私语或谈话声。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我经常感到别人在针对我。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我曾感到过，虽然看不见，但是有人或某种力量在我周围。",
      "option": [
        { "answer": "否/是-无痛苦", "score": 0 },
        { "answer": "是-轻度痛苦", "score": 1 },
        { "answer": "是-中度痛苦", "score": 2 },
        { "answer": "是-重度痛苦", "score": 3 }
      ]
    },
    {
      "title": "我感到身体的某些部位以某种方式发生了变化，或某些部位的功能与以往不同。",
      "option": [
		{ "answer": "否/是-无痛苦", "score": 0 },
		{ "answer": "是-轻度痛苦", "score": 1 },
		{ "answer": "是-中度痛苦", "score": 2 },
		{ "answer": "是-重度痛苦", "score": 3 }
	  ]
	},
  ]
}

export const getPq16Scale = () => {
	return PQ16_SCALE
}

const OCIR_SCALE = {
  "name": "强迫症症状分类量表修订版",
  "question": [
    {
      "title": "我囤积了很多事情",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "不管有没有需要我都经常重复检查",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "如果事情没有安排好我会心烦意乱",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我做事情的时候会强迫自己去数数",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "如果我知道一样东西被陌生人或谁碰过我就很难接受让自己再去碰",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我很难控制自己的思想",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我收集我不需要的东西",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我反复检查门，窗，抽屉等",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "如果别人改变了我计划好的事情我会觉得心烦意乱",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我强迫自己重复某些数字",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我有时候强迫自己洗澡或清洗我自己因为我觉得脏",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "当有和我意愿相反的想法时我会觉得心烦意乱",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我不乱东西，因为我怕以后会用到",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "关掉后我还会反复确认煤气、水龙头、电灯开关",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我需要事情按照特定的顺序安排",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我觉得有好的和坏的数字",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我比一般情况下洗手次数更多，洗手时间更长",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    },
    {
      "title": "我经常会有龌龊的想法然后无法摆脱",
      "option": [
        { "answer": "完全没有", "score": 0 },
        { "answer": "轻微", "score": 1 },
        { "answer": "中等", "score": 2 },
        { "answer": "非常", "score": 3 },
        { "answer": "很严重", "score": 4 }
      ]
    }
  ]
}

export const getOcirScale = () => {
	return OCIR_SCALE
}
