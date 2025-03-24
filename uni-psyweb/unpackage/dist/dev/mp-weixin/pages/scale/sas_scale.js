"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
const utils_scale = require("../../utils/scale.js");
if (!Math) {
  QuestionnaireForm();
}
const QuestionnaireForm = () => "../../components/QuestionnaireForm/QuestionnaireForm.js";
const _sfc_main = {
  __name: "sas_scale",
  setup(__props) {
    const scalelist = utils_scale.getSasScale();
    const handleSubmit = (totalScore) => {
      common_vendor.index.navigateTo({
        url: "sas_result?score=" + totalScore
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
        e: common_vendor.o(handleSubmit),
        f: common_vendor.p({
          scalelist: common_vendor.unref(scalelist)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9030c109"]]);
wx.createPage(MiniProgramPage);
