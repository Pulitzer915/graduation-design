"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _easycom_uv_list_item2 = common_vendor.resolveComponent("uv-list-item");
  const _easycom_uv_list2 = common_vendor.resolveComponent("uv-list");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_avatar2 + _easycom_uv_list_item2 + _easycom_uv_list2 + _easycom_uv_button2)();
}
const _easycom_uv_avatar = () => "../../uni_modules/uv-avatar/components/uv-avatar/uv-avatar.js";
const _easycom_uv_list_item = () => "../../uni_modules/uv-list/components/uv-list-item/uv-list-item.js";
const _easycom_uv_list = () => "../../uni_modules/uv-list/components/uv-list/uv-list.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_list_item + _easycom_uv_list + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const user_id = common_vendor.ref("v96vwg02");
    const user_status = common_vendor.ref(true);
    const user_name = common_vendor.ref("用户名");
    const goRegister = () => {
      common_vendor.index.navigateTo({
        url: "/pages/user/register"
      });
    };
    const goLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/user/login"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        c: common_vendor.p({
          text: user_name.value[0],
          fontSize: "18",
          randomBgColor: true,
          size: "160rpx"
        }),
        d: common_vendor.t(user_name.value),
        e: user_status.value
      }, user_status.value ? {
        f: common_vendor.p({
          ["show-arrow"]: true,
          title: "历史记录",
          link: "navigateTo",
          to: `history?user_id=${user_id.value}`
        }),
        g: common_vendor.p({
          ["show-arrow"]: true,
          border: true,
          title: "其他"
        }),
        h: common_vendor.p({
          border: true
        }),
        i: common_vendor.p({
          type: "error"
        })
      } : {
        j: common_vendor.o(goLogin),
        k: common_vendor.p({
          type: "primary"
        }),
        l: common_vendor.o(goRegister),
        m: common_vendor.p({
          type: "success"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
