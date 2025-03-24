"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_modal2 = common_vendor.resolveComponent("uv-modal");
  _easycom_uv_modal2();
}
const _easycom_uv_modal = () => "../../uni_modules/uv-modal/components/uv-modal/uv-modal.js";
if (!Math) {
  _easycom_uv_modal();
}
const modalContent = "在评估过程中您将与小麦机器人完成多轮交流，请根据自身真实情况完成回答以得到最准确的结果";
const _sfc_main = {
  __name: "robot",
  setup(__props) {
    const startModal = common_vendor.ref(null);
    common_vendor.onShow(() => {
      common_vendor.nextTick$1(() => {
        startModal.value.open();
      });
    });
    const modalConfirm = () => {
      common_vendor.index.reLaunch({
        url: "/pages/robot/chat"
      });
    };
    const modelCancel = () => {
      common_vendor.index.showTabBar();
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: modalContent,
        b: common_vendor.sr(startModal, "5118fab1-0", {
          "k": "startModal"
        }),
        c: common_vendor.o(modalConfirm),
        d: common_vendor.o(modelCancel),
        e: common_vendor.p({
          title: "欢迎使用小麦机器人Beta版",
          showCancelButton: true,
          closeOnClickOverlay: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5118fab1"]]);
wx.createPage(MiniProgramPage);
