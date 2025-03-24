"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uv_loading_icon2 = common_vendor.resolveComponent("uv-loading-icon");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_modal2 = common_vendor.resolveComponent("uv-modal");
  (_easycom_uv_loading_icon2 + _easycom_uv_textarea2 + _easycom_uv_image2 + _easycom_uv_button2 + _easycom_uv_modal2)();
}
const _easycom_uv_loading_icon = () => "../../uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon.js";
const _easycom_uv_textarea = () => "../../uni_modules/uv-textarea/components/uv-textarea/uv-textarea.js";
const _easycom_uv_image = () => "../../uni_modules/uv-image/components/uv-image/uv-image.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uv_modal = () => "../../uni_modules/uv-modal/components/uv-modal/uv-modal.js";
if (!Math) {
  (_easycom_uv_loading_icon + _easycom_uv_textarea + _easycom_uv_image + _easycom_uv_button + _easycom_uv_modal)();
}
const modalContent = "通过上述交流，我已为您匹配到最贴近您自身情况的量表作为辅助评估";
const _sfc_main = {
  __name: "chat",
  setup(__props) {
    const pageHeight = common_vendor.ref(1e3);
    const inputMessage = common_vendor.ref("");
    common_vendor.ref([]);
    common_vendor.ref([]);
    const loadingSwitch = common_vendor.ref(false);
    const goNext = common_vendor.ref(true);
    const goScale = common_vendor.ref(true);
    const goHome = common_vendor.ref(false);
    const continueModal = common_vendor.ref(null);
    const height = common_vendor.ref(0);
    const scrollTop = common_vendor.ref(1e4);
    const inputTag = common_vendor.computed(() => {
      return inputMessage.value.trim() === "";
    });
    const memory = common_vendor.ref({
      "user_features": [],
      "used_features": [],
      "messages": [
        {
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
    });
    common_vendor.onMounted(() => {
      common_vendor.nextTick$1(() => {
        common_vendor.index.getSystemInfo({
          success: (res) => {
            pageHeight.value = res.windowHeight;
          }
        });
      });
    });
    const submit = () => {
      let tempMessage = inputMessage.value;
      inputMessage.value = "";
      memory.value.messages.push({
        role: "user",
        content: tempMessage
      });
      loadingSwitch.value = true;
      common_vendor.index.request({
        url: "http://9fv93og14537.vicp.fun:37636/chat/",
        //仅为示例，并非真实接口地址。
        method: "POST",
        data: memory.value,
        success: ({ data }) => {
          loadingSwitch.value = false;
          memory.value = data;
          if (data.is_end == 1) {
            if (data.possible_diseases.length > 0) {
              common_vendor.index.setStorageSync("memory", memory.value);
              goNext.value = true;
              goScale.value = true;
            } else {
              goNext.value = true;
              goHome.value = true;
            }
          }
        }
      });
    };
    const goNow = () => {
      common_vendor.index.navigateTo({
        url: "/pages/robot/recommend_scale"
      });
    };
    const goToHome = () => {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    };
    const modalConfirm = () => {
      estimate();
    };
    const modelCancel = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    const goback = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    const textareaFocus = (event) => {
      height.value = event.detail.height + 200 + 60 + 40;
      common_vendor.nextTick$1(() => {
        scrollTop.value += 1;
      });
    };
    const textareaBlur = (event) => {
      height.value = 0;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_assets._imports_0$1,
        c: common_vendor.o(goback),
        d: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        e: common_vendor.f(memory.value.messages, (item, index, i0) => {
          return common_vendor.e({
            a: item.role == "assistant"
          }, item.role == "assistant" ? {
            b: common_vendor.t(item.content)
          } : {
            c: common_vendor.t(item.content)
          });
        }),
        f: loadingSwitch.value
      }, loadingSwitch.value ? {
        g: common_vendor.p({
          mode: "spinner",
          size: "34rpx"
        })
      } : {}, {
        h: goNext.value
      }, goNext.value ? common_vendor.e({
        i: goScale.value
      }, goScale.value ? {} : {}, {
        j: goHome.value
      }, goHome.value ? {} : {}) : {}, {
        k: scrollTop.value,
        l: !goNext.value
      }, !goNext.value ? common_vendor.e({
        m: common_vendor.o(textareaFocus),
        n: common_vendor.o(textareaBlur),
        o: common_vendor.o(($event) => inputMessage.value = $event),
        p: common_vendor.p({
          placeholder: "请输入内容",
          maxlength: -1,
          border: "none",
          height: "60rpx",
          ["adjust-position"]: false,
          textStyle: {
            fontSize: "26rpx"
          },
          customStyle: {
            borderRadius: "10px",
            display: "flex",
            flex: "1"
          },
          modelValue: inputMessage.value
        }),
        q: loadingSwitch.value
      }, loadingSwitch.value ? {
        r: common_vendor.p({
          mode: "circle",
          ["timing-function"]: "ease-in-out",
          size: "36rpx"
        })
      } : common_vendor.e({
        s: inputTag.value
      }, inputTag.value ? {
        t: common_vendor.p({
          src: "/static/image/mp-axure-image/submit.png",
          width: "60rpx",
          height: "60rpx"
        })
      } : {
        v: common_vendor.o(submit),
        w: common_vendor.p({
          src: "/static/image/mp-axure-image/submit-h.png",
          width: "60rpx",
          height: "60rpx"
        })
      })) : common_vendor.e({
        x: goScale.value
      }, goScale.value ? {
        y: common_vendor.o(goNow),
        z: common_vendor.p({
          ["custom-style"]: {
            borderRadius: "14px"
          },
          type: "primary"
        })
      } : {}, {
        A: goHome.value
      }, goHome.value ? {
        B: common_vendor.o(goToHome),
        C: common_vendor.p({
          ["custom-style"]: {
            borderRadius: "14px"
          },
          type: "primary"
        })
      } : {}), {
        D: height.value + "rpx",
        E: modalContent,
        F: common_vendor.sr(continueModal, "2bdd774b-7", {
          "k": "continueModal"
        }),
        G: common_vendor.o(modalConfirm),
        H: common_vendor.o(modelCancel),
        I: common_vendor.p({
          title: "已为您准备好相关题目",
          showCancelButton: true,
          closeOnClickOverlay: false,
          confirmText: "前往完成",
          cancelText: "退出"
        }),
        J: pageHeight.value + "px"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2bdd774b"]]);
wx.createPage(MiniProgramPage);
