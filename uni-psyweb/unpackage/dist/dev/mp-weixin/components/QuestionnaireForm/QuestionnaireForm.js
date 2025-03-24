"use strict";
const common_vendor = require("../../common/vendor.js");
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
  __name: "QuestionnaireForm",
  props: {
    scalelist: {
      type: Object,
      required: true
    }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = common_vendor.ref(null);
    const formModel = common_vendor.ref(
      props.scalelist.question.reduce((acc, item, index) => {
        acc[`option${index + 1}`] = { question: item.title, score: 1 };
        return acc;
      }, {})
    );
    const rules = common_vendor.ref(
      props.scalelist.question.reduce((acc, _, index) => {
        acc[`option${index + 1}.score`] = {
          type: "number",
          required: true,
          message: "此项为必填项",
          trigger: ["blur", "change"]
        };
        return acc;
      }, {})
    );
    const handleSubmit = () => {
      formRef.value.validate().then(() => {
        const totalScore = Object.values(formModel.value).reduce(
          (sum, current) => sum + current.score,
          0
        );
        emit("submit", totalScore);
        common_vendor.index.showToast({
          icon: "success",
          title: "校验通过"
        });
      }).catch(() => {
        common_vendor.index.showToast({
          icon: "error",
          title: "校验失败"
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.scalelist.question, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.title),
            c: common_vendor.f(item.option, (itm, idx, i1) => {
              return {
                a: common_vendor.t(itm.answer),
                b: idx,
                c: "a91cb998-3-" + i0 + "-" + i1 + "," + ("a91cb998-2-" + i0),
                d: common_vendor.p({
                  label: itm.score,
                  name: itm.score,
                  customStyle: {
                    margin: "8px"
                  },
                  labelSize: "26rpx"
                })
              };
            }),
            d: "a91cb998-2-" + i0 + "," + ("a91cb998-1-" + i0),
            e: common_vendor.o(($event) => formModel.value[`option${index + 1}`].score = $event, index),
            f: common_vendor.p({
              placement: "column",
              modelValue: formModel.value[`option${index + 1}`].score
            }),
            g: index,
            h: "a91cb998-1-" + i0 + ",a91cb998-0",
            i: common_vendor.p({
              prop: `option${index + 1}.score`,
              labelWidth: "16rpx"
            })
          };
        }),
        b: common_vendor.o(handleSubmit),
        c: common_vendor.p({
          type: "primary",
          text: "提交"
        }),
        d: common_vendor.sr(formRef, "a91cb998-0", {
          "k": "formRef"
        }),
        e: common_vendor.p({
          model: formModel.value,
          rules: rules.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a91cb998"]]);
wx.createComponent(Component);
