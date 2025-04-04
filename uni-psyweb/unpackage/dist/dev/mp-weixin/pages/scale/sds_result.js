"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const utils_score = require("../../utils/score.js");
if (!Math) {
  ResultDisplay();
}
const ResultDisplay = () => "../../components/ResultDisplay/ResultDisplay.js";
const _sfc_main = {
  __name: "sds_result",
  setup(__props) {
    const score = common_vendor.ref(0);
    const status = common_vendor.ref("");
    const colorList = ["#6CC615", "#4E9DFF", "#F3AD36", "#EB6C6B"];
    const resultList = common_vendor.reactive([
      {
        "title": "无症状",
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
    ]);
    const advice = common_vendor.ref("");
    common_vendor.onLoad((e) => {
      score.value = parseInt(e.score) || 0;
      status.value = utils_score.getSdsResult(score.value);
    });
    const backToHome = () => {
      common_vendor.index.switchTab({
        url: "/pages/scale/scale"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        c: common_vendor.o(backToHome),
        d: common_vendor.p({
          score: score.value,
          status: status.value,
          resultList,
          colorList,
          advice: advice.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b20c6c0b"]]);
wx.createPage(MiniProgramPage);
