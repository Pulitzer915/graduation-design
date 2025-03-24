"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uvUiTools_libs_mixin_mpMixin = require("../../../uv-ui-tools/libs/mixin/mpMixin.js");
const uni_modules_uvUiTools_libs_mixin_mixin = require("../../../uv-ui-tools/libs/mixin/mixin.js");
const uni_modules_uvCollapse_components_uvCollapseItem_props = require("./props.js");
const _sfc_main = {
  name: "uv-collapse-item",
  mixins: [uni_modules_uvUiTools_libs_mixin_mpMixin.mpMixin, uni_modules_uvUiTools_libs_mixin_mixin.mixin, uni_modules_uvCollapse_components_uvCollapseItem_props.props],
  data() {
    return {
      elId: "",
      // uni.createAnimation的导出数据
      animationData: {},
      // 是否展开状态
      expanded: false,
      // 根据expanded确定是否显示border，为了控制展开时，cell的下划线更好的显示效果，进行一定时间的延时
      showBorder: false,
      // 是否动画中，如果是则不允许继续触发点击
      animating: false,
      // 父组件uv-collapse的参数
      parentData: {
        accordion: false,
        border: false
      }
    };
  },
  watch: {
    expanded(n) {
      clearTimeout(this.timer);
      this.timer = null;
      this.timer = setTimeout(() => {
        this.showBorder = n;
      }, n ? 10 : 290);
    }
  },
  created() {
    this.elId = this.$uv.guid();
  },
  mounted() {
    this.init();
  },
  methods: {
    // 异步获取内容，或者动态修改了内容时，需要重新初始化
    init() {
      this.updateParentData();
      if (!this.parent) {
        return this.$uv.error("uv-collapse-item必须要搭配uv-collapse组件使用");
      }
      const {
        value,
        accordion,
        children = []
      } = this.parent;
      if (accordion) {
        if (this.$uv.test.array(value)) {
          return this.$uv.error("手风琴模式下，uv-collapse组件的value参数不能为数组");
        }
        this.expanded = this.name == value;
      } else {
        if (!this.$uv.test.array(value) && value !== null) {
          return this.$uv.error("非手风琴模式下，uv-collapse组件的value参数必须为数组");
        }
        this.expanded = (value || []).some((item) => item == this.name);
      }
      this.$nextTick(function() {
        this.setContentAnimate();
      });
    },
    updateParentData() {
      this.getParentData("uv-collapse");
    },
    async setContentAnimate() {
      const rect = await this.queryRect();
      const height = this.expanded ? rect.height : 0;
      this.animating = true;
      const animation = common_vendor.index.createAnimation({
        timingFunction: "ease-in-out"
      });
      animation.height(height).step({
        duration: this.duration
      }).step();
      this.animationData = animation.export();
      this.$uv.sleep(this.duration).then(() => {
        this.animating = false;
      });
    },
    // 点击collapsehead头部
    clickHandler() {
      if (this.disabled && this.animating)
        return;
      this.parent && this.parent.onChange(this);
    },
    // 查询内容高度
    queryRect() {
      return new Promise((resolve) => {
        this.$uvGetRect(`#${this.elId}`).then((size) => {
          resolve(size);
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_cell2 = common_vendor.resolveComponent("uv-cell");
  const _easycom_uv_line2 = common_vendor.resolveComponent("uv-line");
  (_easycom_uv_cell2 + _easycom_uv_line2)();
}
const _easycom_uv_cell = () => "../../../uv-cell/components/uv-cell/uv-cell.js";
const _easycom_uv_line = () => "../../../uv-line/components/uv-line/uv-line.js";
if (!Math) {
  (_easycom_uv_cell + _easycom_uv_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.clickHandler),
    b: common_vendor.p({
      title: _ctx.title,
      value: _ctx.value,
      label: _ctx.label,
      icon: _ctx.icon,
      isLink: _ctx.isLink,
      clickable: _ctx.clickable,
      border: $data.parentData.border && $data.showBorder,
      arrowDirection: $data.expanded ? "up" : "down",
      disabled: _ctx.disabled
    }),
    c: $data.elId,
    d: $data.elId,
    e: $data.animationData,
    f: $data.parentData.border
  }, $data.parentData.border ? {} : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-754e0f33"]]);
wx.createComponent(Component);
