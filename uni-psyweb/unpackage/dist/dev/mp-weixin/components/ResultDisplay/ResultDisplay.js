"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  _easycom_uv_button2();
}
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
const _sfc_main = {
  __name: "ResultDisplay",
  props: {
    score: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    resultList: {
      type: Array,
      required: true
    },
    colorList: {
      type: Array,
      required: true
    },
    advice: {
      type: String,
      default: ""
    }
  },
  emits: ["back-index"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const backIndex = () => {
      emit("back-index");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.score + "分"),
        b: common_vendor.t(__props.status),
        c: common_vendor.f(__props.resultList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: __props.colorList[index],
            c: common_vendor.t(item.content),
            d: index
          };
        }),
        d: common_vendor.t(__props.advice),
        e: common_vendor.o(backIndex),
        f: common_vendor.p({
          text: "回到首页",
          type: "primary"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d0605812"]]);
wx.createComponent(Component);
