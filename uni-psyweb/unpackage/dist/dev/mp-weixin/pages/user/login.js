"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_toast2 = common_vendor.resolveComponent("uv-toast");
  (_easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_button2 + _easycom_uv_form2 + _easycom_uv_toast2)();
}
const _easycom_uv_input = () => "../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../uni_modules/uv-form/components/uv-form-item/uv-form-item.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uv_form = () => "../../uni_modules/uv-form/components/uv-form/uv-form.js";
const _easycom_uv_toast = () => "../../uni_modules/uv-toast/components/uv-toast/uv-toast.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_form_item + _easycom_uv_button + _easycom_uv_form + _easycom_uv_toast)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    common_vendor.onLoad(() => {
    });
    common_vendor.ref([]);
    const form = common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref(Number(/* @__PURE__ */ new Date()));
    common_vendor.ref(null);
    common_vendor.ref(null);
    const toast = common_vendor.ref(null);
    const formModel = common_vendor.ref({
      email: "1024996926@qq.com",
      password: "lc65120101"
    });
    const rules = common_vendor.ref({
      "email": {
        type: "email",
        required: true,
        message: "请输入正确的邮箱地址",
        trigger: ["blur", "change"]
      },
      "password": {
        type: "string",
        required: true,
        message: "请填写密码",
        trigger: ["blur", "change"]
      }
    });
    const submit = () => {
      form.value.validate().then((res) => {
        toast.value.show({
          message: "已提交",
          type: "primary ",
          duration: "1000"
        });
        common_vendor.index.switchTab({
          url: "/pages/user/history"
        });
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
        e: common_vendor.o(($event) => formModel.value.email = $event),
        f: common_vendor.p({
          border: "none",
          clearable: true,
          placeholder: "请输入邮箱",
          modelValue: formModel.value.email
        }),
        g: common_vendor.p({
          label: "邮箱",
          prop: "email",
          borderBottom: true
        }),
        h: common_vendor.o(($event) => formModel.value.password = $event),
        i: common_vendor.p({
          type: "password",
          border: "none",
          clearable: true,
          placeholder: "请输入密码",
          modelValue: formModel.value.password
        }),
        j: common_vendor.p({
          label: "密码",
          prop: "password",
          borderBottom: true
        }),
        k: common_vendor.o(submit),
        l: common_vendor.p({
          type: "primary",
          text: "登录",
          customStyle: "margin-top: 10px"
        }),
        m: common_vendor.sr(form, "6163e5ce-0", {
          "k": "form"
        }),
        n: common_vendor.p({
          labelPosition: "left",
          model: formModel.value,
          rules: rules.value,
          labelWidth: "140rpx"
        }),
        o: common_vendor.sr(toast, "6163e5ce-6", {
          "k": "toast"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6163e5ce"]]);
wx.createPage(MiniProgramPage);
