"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uv_radio2 = common_vendor.resolveComponent("uv-radio");
  const _easycom_uv_radio_group2 = common_vendor.resolveComponent("uv-radio-group");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  (_easycom_uv_radio2 + _easycom_uv_radio_group2 + _easycom_uv_form_item2 + _easycom_uv_button2 + _easycom_uv_form2)();
}
const _easycom_uv_radio = () => "../../uni_modules/uv-radio/components/uv-radio/uv-radio.js";
const _easycom_uv_radio_group = () => "../../uni_modules/uv-radio/components/uv-radio-group/uv-radio-group.js";
const _easycom_uv_form_item = () => "../../uni_modules/uv-form/components/uv-form-item/uv-form-item.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uv_form = () => "../../uni_modules/uv-form/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_radio + _easycom_uv_radio_group + _easycom_uv_form_item + _easycom_uv_button + _easycom_uv_form)();
}
const _sfc_main = {
  __name: "question",
  setup(__props) {
    common_vendor.onLoad((e) => {
      console.log(e.scale_id);
    });
    const formRef = common_vendor.ref(null);
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
    };
    const formModel = common_vendor.ref(scalelist.question.reduce((acc, item, index) => {
      acc[`option${index + 1}`] = { "question": item.title, "score": 2 };
      return acc;
    }, {}));
    const rules = common_vendor.ref(scalelist.question.reduce((acc, _, index) => {
      acc[`option${index + 1}.score`] = { type: "number", required: true, message: "此项为必填项", trigger: ["blur", "change"] };
      return acc;
    }, {}));
    const submit = () => {
      formRef.value.validate().then((res) => {
        common_vendor.index.showToast({
          icon: "success",
          title: "校验通过"
        });
        const totalScore = Object.values(formModel.value).reduce((sum, current) => sum + current.score, 0);
        common_vendor.index.navigateTo({
          url: "result?score=" + totalScore
        });
      }).catch((errors) => {
        common_vendor.index.showToast({
          icon: "error",
          title: "校验失败"
        });
      });
    };
    const goback = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_assets._imports_0$1,
        c: common_vendor.o(goback),
        d: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        e: common_vendor.f(scalelist.question, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.title),
            c: common_vendor.f(item.option, (itm, idx, i1) => {
              return {
                a: itm.title,
                b: "dad0ac0b-3-" + i0 + "-" + i1 + "," + ("dad0ac0b-2-" + i0),
                c: common_vendor.p({
                  customStyle: {
                    margin: "8px"
                  },
                  label: itm.answer,
                  name: itm.score,
                  labelSize: "26rpx"
                })
              };
            }),
            d: index,
            e: "dad0ac0b-2-" + i0 + "," + ("dad0ac0b-1-" + i0),
            f: common_vendor.o(($event) => formModel.value[`option${index + 1}`]["score"] = $event, index),
            g: common_vendor.p({
              placement: "column",
              modelValue: formModel.value[`option${index + 1}`]["score"]
            }),
            h: "dad0ac0b-1-" + i0 + ",dad0ac0b-0",
            i: common_vendor.p({
              prop: `option${index + 1}.score`,
              labelWidth: "16rpx"
            })
          };
        }),
        f: common_vendor.o(($event) => submit()),
        g: common_vendor.p({
          type: "primary",
          text: "提交"
        }),
        h: common_vendor.sr(formRef, "dad0ac0b-0", {
          "k": "formRef"
        }),
        i: common_vendor.p({
          model: formModel.value,
          rules: rules.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dad0ac0b"]]);
wx.createPage(MiniProgramPage);
