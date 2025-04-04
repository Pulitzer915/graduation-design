"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const scalelist = common_vendor.ref(common_vendor.index.getStorageSync("chatScale"));
    const formRef = common_vendor.ref(null);
    const formModel = common_vendor.ref(scalelist.value.question.reduce((acc, item, index) => {
      acc[`option${index + 1}`] = { "question": item.title, "score": 1 };
      return acc;
    }, {}));
    const rules = common_vendor.ref(scalelist.value.question.reduce((acc, _, index) => {
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
        common_vendor.index.reLaunch({
          url: "/pages/scale/result?score=" + totalScore
        });
      }).catch((errors) => {
        common_vendor.index.showToast({
          icon: "error",
          title: "校验失败"
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        c: common_vendor.f(scalelist.value.question, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.title),
            c: common_vendor.f(item.option, (itm, idx, i1) => {
              return {
                a: "1913127b-3-" + i0 + "-" + i1 + "," + ("1913127b-2-" + i0),
                b: common_vendor.p({
                  customStyle: {
                    margin: "8px"
                  },
                  label: itm.answer,
                  name: itm.score,
                  labelSize: "26rpx"
                })
              };
            }),
            d: item.title,
            e: index,
            f: "1913127b-2-" + i0 + "," + ("1913127b-1-" + i0),
            g: common_vendor.o(($event) => formModel.value[`option${index + 1}`]["score"] = $event, index),
            h: common_vendor.p({
              placement: "column",
              modelValue: formModel.value[`option${index + 1}`]["score"]
            }),
            i: "1913127b-1-" + i0 + ",1913127b-0",
            j: common_vendor.p({
              prop: `option${index + 1}.score`,
              labelWidth: "16rpx"
            })
          };
        }),
        d: common_vendor.o(($event) => submit()),
        e: common_vendor.p({
          type: "primary",
          text: "提交"
        }),
        f: common_vendor.sr(formRef, "1913127b-0", {
          "k": "formRef"
        }),
        g: common_vendor.p({
          model: formModel.value,
          rules: rules.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1913127b"]]);
wx.createPage(MiniProgramPage);
