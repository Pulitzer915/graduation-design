"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const utils_score = require("../../utils/score.js");
if (!Math) {
  ResultDisplay();
}
const ResultDisplay = () => "../../components/ResultDisplay/ResultDisplay.js";
const _sfc_main = {
  __name: "pq16_result",
  setup(__props) {
    const score = common_vendor.ref(0);
    const status = common_vendor.ref("");
    const colorList = ["#6CC615", "#F3AD36"];
    const resultList = common_vendor.reactive([
      {
        "title": "无症状",
        "content": "0~7分"
      },
      {
        "title": "可能存在精神分裂症症状",
        "content": "8分以上"
      }
    ]);
    const advice = common_vendor.ref("");
    common_vendor.onLoad((e) => {
      score.value = parseInt(e.score) || 0;
      status.value = utils_score.getPq16Result(score.value);
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1f0e3515"]]);
wx.createPage(MiniProgramPage);
