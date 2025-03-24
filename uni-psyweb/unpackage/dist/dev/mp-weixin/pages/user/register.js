"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_code2 = common_vendor.resolveComponent("uv-code");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_checkbox2 = common_vendor.resolveComponent("uv-checkbox");
  const _easycom_uv_checkbox_group2 = common_vendor.resolveComponent("uv-checkbox-group");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_action_sheet2 = common_vendor.resolveComponent("uv-action-sheet");
  const _easycom_uv_datetime_picker2 = common_vendor.resolveComponent("uv-datetime-picker");
  const _easycom_uv_toast2 = common_vendor.resolveComponent("uv-toast");
  (_easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_icon2 + _easycom_uv_code2 + _easycom_uv_button2 + _easycom_uv_checkbox2 + _easycom_uv_checkbox_group2 + _easycom_uv_form2 + _easycom_uv_action_sheet2 + _easycom_uv_datetime_picker2 + _easycom_uv_toast2)();
}
const _easycom_uv_input = () => "../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../uni_modules/uv-form/components/uv-form-item/uv-form-item.js";
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_code = () => "../../uni_modules/uv-code/components/uv-code/uv-code.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uv_checkbox = () => "../../uni_modules/uv-checkbox/components/uv-checkbox/uv-checkbox.js";
const _easycom_uv_checkbox_group = () => "../../uni_modules/uv-checkbox/components/uv-checkbox-group/uv-checkbox-group.js";
const _easycom_uv_form = () => "../../uni_modules/uv-form/components/uv-form/uv-form.js";
const _easycom_uv_action_sheet = () => "../../uni_modules/uv-action-sheet/components/uv-action-sheet/uv-action-sheet.js";
const _easycom_uv_datetime_picker = () => "../../uni_modules/uv-datetime-picker/components/uv-datetime-picker/uv-datetime-picker.js";
const _easycom_uv_toast = () => "../../uni_modules/uv-toast/components/uv-toast/uv-toast.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_form_item + _easycom_uv_icon + _easycom_uv_code + _easycom_uv_button + _easycom_uv_checkbox + _easycom_uv_checkbox_group + _easycom_uv_form + _easycom_uv_action_sheet + _easycom_uv_datetime_picker + _easycom_uv_toast)();
}
const _sfc_main = {
  __name: "register",
  setup(__props) {
    common_vendor.onLoad(() => {
    });
    const readStatus = common_vendor.ref([]);
    const form = common_vendor.ref(null);
    const Select = common_vendor.ref(null);
    const currentDate = common_vendor.ref(Number(/* @__PURE__ */ new Date()));
    const datetimePicker = common_vendor.ref(null);
    const code = common_vendor.ref(null);
    const toast = common_vendor.ref(null);
    const formModel = common_vendor.ref({
      name: "普利策老来俏",
      gender: "男",
      birth: 1712663295175,
      password: "lc65120101",
      rePassword: "lc65120101",
      email: "1024996926@qq.com",
      code: "1234"
    });
    const rules = common_vendor.ref({
      "name": {
        type: "string",
        required: true,
        message: "请填写姓名",
        trigger: ["blur", "change"]
      },
      "gender": {
        type: "string",
        max: 1,
        required: true,
        message: "请选择男或女",
        trigger: ["blur", "change"]
      },
      "birth": {
        type: "number",
        required: true,
        message: "请选择出生日期",
        trigger: ["blur", "change"]
      },
      "password": {
        type: "string",
        required: true,
        message: "请填写密码",
        trigger: ["blur", "change"]
      },
      "rePassword": [
        { type: "string", required: true, message: "请再次输入密码", trigger: "blur" },
        { validator: (rule, value, callback) => {
          if (value !== formModel.value.password) {
            callback(new Error("两次输入的密码不一致"));
          } else {
            callback();
          }
        }, trigger: "blur" }
      ],
      "email": {
        type: "email",
        required: true,
        message: "请输入正确的邮箱地址",
        trigger: ["blur", "change"]
      },
      "code": {
        type: "string",
        required: true,
        message: "请输入验证码",
        trigger: ["blur", "change"]
      }
    });
    const actions = common_vendor.ref([
      { name: "男", value: "男" },
      { name: "女", value: "女" }
    ]);
    const tips = common_vendor.ref("获取验证码");
    const sendCode = common_vendor.ref(false);
    const showSexSelect = () => {
      common_vendor.index.hideKeyboard();
      Select.value.open();
    };
    const sexSelect = (action) => {
      formModel.value.gender = action.value;
      form.value.validateField("gender");
    };
    const showDatetimePicker = () => {
      common_vendor.index.hideKeyboard();
      datetimePicker.value.open();
    };
    const timestampToYMD = (timestamp) => {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    const confirmDateTime = (e) => {
      formModel.value.birth = e.value;
      form.value.validateField("birth");
    };
    const getCode = () => {
      sendCode.value = true, code.value.start();
      common_vendor.index.request({
        url: "http://www.farm.com/email_send",
        method: "POST",
        data: {
          email: formModel.value.email
        },
        success: ({ data }) => {
          if (data.code == 200) {
            toast.value.show({
              message: data.message,
              type: "success",
              duration: "1000"
            });
          } else {
            toast.value.show({
              message: data.message,
              type: "error",
              duration: "1000"
            });
          }
        },
        fail: (res) => {
          toast.value.show({
            message: "请求发送失败",
            type: "error",
            duration: "1000"
          });
        },
        complete: () => {
        }
      });
    };
    const codeChange = (text) => {
      tips.value = text;
    };
    const codeEnd = () => {
      sendCode.value = false;
    };
    const submit = () => {
      if (readStatus.value.length == 0) {
        toast.value.show({
          message: "请阅读相关协议",
          type: "error",
          duration: "1000"
        });
        return;
      }
      form.value.validate().then((res) => {
        toast.value.show({
          message: "已提交",
          type: "primary ",
          duration: "1000"
        });
        common_vendor.index.request({
          url: "http://www.farm.com/register",
          method: "POST",
          data: {
            form: formModel.value
          },
          success: ({ data }) => {
            if (data.code == 200) {
              toast.value.show({
                message: data.message,
                type: "success",
                duration: "1000"
              });
            } else {
              toast.value.show({
                message: data.message,
                type: "error",
                duration: "1000"
              });
            }
          }
        });
      }).catch((errors) => {
        toast.value.show({
          message: "校验错误",
          type: "error",
          duration: "1000"
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
        e: common_vendor.o(($event) => formModel.value.name = $event),
        f: common_vendor.p({
          border: "none",
          placeholder: "请输入用户名",
          modelValue: formModel.value.name
        }),
        g: common_vendor.p({
          label: "用户名",
          prop: "name",
          borderBottom: true
        }),
        h: common_vendor.o(($event) => formModel.value.gender = $event),
        i: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          placeholder: "请选择性别",
          border: "none",
          modelValue: formModel.value.gender
        }),
        j: common_vendor.p({
          name: "arrow-right"
        }),
        k: common_vendor.o(showSexSelect),
        l: common_vendor.p({
          label: "性别",
          prop: "gender",
          borderBottom: true
        }),
        m: common_vendor.p({
          value: timestampToYMD(formModel.value.birth),
          disabled: true,
          disabledColor: "#ffffff",
          placeholder: "请选择日期",
          border: "none"
        }),
        n: common_vendor.p({
          name: "arrow-right"
        }),
        o: common_vendor.o(showDatetimePicker),
        p: common_vendor.p({
          label: "出生日期",
          prop: "birth",
          borderBottom: true
        }),
        q: common_vendor.o(($event) => formModel.value.password = $event),
        r: common_vendor.p({
          type: "password",
          border: "none",
          placeholder: "请输入密码",
          modelValue: formModel.value.password
        }),
        s: common_vendor.p({
          label: "密码",
          prop: "password",
          borderBottom: true
        }),
        t: common_vendor.o(($event) => formModel.value.rePassword = $event),
        v: common_vendor.p({
          type: "password",
          border: "none",
          placeholder: "请再次确认密码",
          modelValue: formModel.value.rePassword
        }),
        w: common_vendor.p({
          label: "确认密码",
          prop: "rePassword",
          borderBottom: true
        }),
        x: common_vendor.o(($event) => formModel.value.email = $event),
        y: common_vendor.p({
          border: "none",
          placeholder: "请输入邮箱",
          modelValue: formModel.value.email
        }),
        z: common_vendor.p({
          label: "邮箱",
          prop: "email",
          borderBottom: true
        }),
        A: common_vendor.o(($event) => formModel.value.code = $event),
        B: common_vendor.p({
          placeholder: "请输入验证码",
          border: "none",
          modelValue: formModel.value.code
        }),
        C: common_vendor.sr(code, "fd534bf9-17,fd534bf9-15", {
          "k": "code"
        }),
        D: common_vendor.o(codeChange),
        E: common_vendor.o(codeEnd),
        F: common_vendor.p({
          seconds: "10"
        }),
        G: common_vendor.t(tips.value),
        H: common_vendor.o(getCode),
        I: common_vendor.p({
          size: "mini",
          type: "success",
          disabled: sendCode.value
        }),
        J: common_vendor.p({
          label: "验证码",
          prop: "code",
          borderBottom: true
        }),
        K: common_vendor.p({
          name: 1,
          label: "我已阅读相关协议",
          labelColor: "grey"
        }),
        L: common_vendor.o(($event) => readStatus.value = $event),
        M: common_vendor.p({
          shape: "circle",
          size: "30rpx",
          labelSize: "26rpx",
          iconSize: "20rpx",
          modelValue: readStatus.value
        }),
        N: common_vendor.o(submit),
        O: common_vendor.p({
          type: "primary",
          text: "注册",
          customStyle: "margin-top: 10px"
        }),
        P: common_vendor.sr(form, "fd534bf9-0", {
          "k": "form"
        }),
        Q: common_vendor.p({
          labelPosition: "left",
          model: formModel.value,
          rules: rules.value,
          labelWidth: "140rpx"
        }),
        R: common_vendor.sr(Select, "fd534bf9-22", {
          "k": "Select"
        }),
        S: common_vendor.o(sexSelect),
        T: common_vendor.p({
          actions: actions.value,
          title: "请选择性别"
        }),
        U: common_vendor.sr(datetimePicker, "fd534bf9-23", {
          "k": "datetimePicker"
        }),
        V: common_vendor.o(confirmDateTime),
        W: common_vendor.o(($event) => currentDate.value = $event),
        X: common_vendor.p({
          mode: "date",
          modelValue: currentDate.value
        }),
        Y: common_vendor.sr(toast, "fd534bf9-24", {
          "k": "toast"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fd534bf9"]]);
wx.createPage(MiniProgramPage);
