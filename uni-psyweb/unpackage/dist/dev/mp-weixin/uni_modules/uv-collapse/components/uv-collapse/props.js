"use strict";
var _a, _b;
const common_vendor = require("../../../../common/vendor.js");
const props = {
  props: {
    // 当前展开面板的name，非手风琴模式：[<string | number>]，手风琴模式：string | number
    value: {
      type: [String, Number, Array, null],
      default: null
    },
    // 是否手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    // 是否显示外边框
    border: {
      type: Boolean,
      default: true
    },
    ...(_b = (_a = common_vendor.index.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.collapse
  }
};
exports.props = props;
