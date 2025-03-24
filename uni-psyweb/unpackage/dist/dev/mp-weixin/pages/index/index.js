"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  _easycom_uv_button2();
}
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.reactive([
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-banner/SDSbanner.png",
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-banner/CES-Dbanner.png",
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-banner/BDIbanner.png",
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-banner/PHQ-9banner.png"
    ]);
    const scrollList = common_vendor.reactive([
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-scale/PHQ-9.png",
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-scale/CES-D.png",
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-scale/BDI.png",
      "https://penglc-bucket.oss-cn-chengdu.aliyuncs.com/image/index-scale/SDS.png"
    ]);
    const goToRobot = () => {
      common_vendor.index.switchTab({
        url: "/pages/robot/robot"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        c: common_vendor.f(bannerList, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        d: common_vendor.f(scrollList, (item, index, i0) => {
          return {
            a: item
          };
        }),
        e: common_assets._imports_0,
        f: common_vendor.o(goToRobot),
        g: common_vendor.p({
          text: "前往体验",
          type: "primary"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
