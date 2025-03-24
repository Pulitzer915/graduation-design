"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_icon2 + _easycom_uv_button2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "recommend_scale",
  setup(__props) {
    const memory = common_vendor.ref({ "possible_diseases": [] });
    common_vendor.onMounted(() => {
      memory.value = common_vendor.index.getStorageSync("memory");
      console.log(memory.value);
    });
    const DISEASE_MAPPING_SCALE_NAME = {
      "抑郁发作": "SDS量表",
      "躁狂发作": "MDQ量表",
      "广泛性焦虑障碍": "SAS量表",
      "强迫症": "OCI-R量表",
      "精神分裂症": "PQ-16量表"
    };
    const DISEASE_MAPPING_SCALE_URL = {
      "抑郁发作": "/pages/scale/sds_scale",
      "躁狂发作": "/pages/scale/mdq_scale",
      "广泛性焦虑障碍": "/pages/scale/sas_scale",
      "强迫症": "/pages/scale/ocir_scale",
      "精神分裂症": "/pages/scale/pq16_scale"
    };
    const buttonStyle = {
      borderColor: "#3c9cff",
      height: "80rpx",
      justifyContent: "space-between"
    };
    const buttonTextStyle = {};
    const goToScale = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        c: common_vendor.f(memory.value.possible_diseases, (item, k0, i0) => {
          return {
            a: common_vendor.t(DISEASE_MAPPING_SCALE_NAME[item.name]),
            b: "535762a6-1-" + i0 + "," + ("535762a6-0-" + i0),
            c: common_vendor.o(($event) => goToScale(DISEASE_MAPPING_SCALE_URL[item.name]), item.name),
            d: "535762a6-0-" + i0,
            e: item.name
          };
        }),
        d: common_vendor.p({
          name: "arrow-right"
        }),
        e: common_vendor.p({
          customStyle: buttonStyle,
          customTextStyle: buttonTextStyle
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
