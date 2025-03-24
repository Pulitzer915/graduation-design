"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const utils_score = require("../../utils/score.js");
if (!Array) {
  const _easycom_uv_collapse_item2 = common_vendor.resolveComponent("uv-collapse-item");
  const _easycom_uv_collapse2 = common_vendor.resolveComponent("uv-collapse");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_collapse_item2 + _easycom_uv_collapse2 + _easycom_uv_button2)();
}
const _easycom_uv_collapse_item = () => "../../uni_modules/uv-collapse/components/uv-collapse-item/uv-collapse-item.js";
const _easycom_uv_collapse = () => "../../uni_modules/uv-collapse/components/uv-collapse/uv-collapse.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_collapse_item + _easycom_uv_collapse + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "result",
  setup(__props) {
    common_vendor.onLoad((e) => {
      score.value = e.score;
      console.log(utils_score.getSdsResult(score.value));
    });
    const score = common_vendor.ref(0);
    const colorList = ["#6CC615", "#4E9DFF", "#F3AD36", "#EB6C6B"];
    const resultList = common_vendor.reactive([
      {
        "title": "无抑郁",
        "content": "0~39分"
      },
      {
        "title": "轻度",
        "content": "40~47分"
      },
      {
        "title": "中度",
        "content": "48~55分"
      },
      {
        "title": "重度",
        "content": "56分以上"
      }
    ]);
    const adviceList = common_vendor.reactive([
      {
        "title": "坚持锻炼",
        "content": "轻度抑郁症的患者可以选择跑步、跳绳、打球、游泳、瑜伽等运动，在运动的过程中可以释放不良情绪，同时还能够增强身体体质，患者长期坚持锻炼，可以帮助改善轻度抑郁症的症状。"
      },
      {
        "title": "多与他人沟通",
        "content": "轻度抑郁症患者可能会出现情绪低落、兴趣减退、焦虑、思维迟缓等症状，出现这些症状时患者可以多与他人沟通，在与他人沟通的过程中能够帮助改善情绪低落、焦虑等不良症状。"
      },
      {
        "title": "培养新的兴趣爱好",
        "content": "轻度抑郁症患者应尝试培养新的兴趣爱好，如画画、旅游等，可以分散自身的注意力，在新的兴趣爱好里面还可以使心情愉悦，有利于缓解轻度抑郁症的状态。"
      },
      {
        "title": "药物治疗",
        "content": "如果通过以上方法改善轻度抑郁症的效果不理想，患者就需要遵医嘱服用相关药物，常见的药物包括盐酸舍曲林片、盐酸文拉法辛片等，可以在一定程度上改善无法自我缓解的轻度抑郁症症状。"
      },
      {
        "title": "心理治疗",
        "content": "主要是患者与心理医生进行谈话、交流，心理医生会针对患者的具体情况进行针对性治疗，如支持性心理治疗、认知行为治疗、精神动力学治疗、婚姻家庭治疗等，帮助患者正视抑郁发作带来的不良影响，防止疾病复发。"
      }
    ]);
    const findScoreSegment = (score2, resultList2) => {
      for (const result of resultList2) {
        const rangeMatch = result.content.match(/(\d+)~(\d+)/);
        if (rangeMatch) {
          const lowerBound = parseInt(rangeMatch[1], 10);
          const upperBound = parseInt(rangeMatch[2], 10);
          if (score2 >= lowerBound && score2 <= upperBound) {
            return result;
          }
        }
        const aboveMatch = result.content.match(/(\d+)分以上/);
        if (aboveMatch) {
          const lowerBound = parseInt(aboveMatch[1], 10);
          if (score2 >= lowerBound) {
            return result;
          }
        }
      }
      return null;
    };
    const status = common_vendor.computed(() => {
      return findScoreSegment(score.value, resultList);
    });
    const backIndex = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        c: common_vendor.t(score.value + "分"),
        d: common_vendor.t(status.value.title),
        e: common_vendor.f(resultList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: colorList[index],
            c: common_vendor.t(item.content),
            d: index
          };
        }),
        f: common_vendor.f(adviceList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: "a6ac18a8-1-" + i0 + ",a6ac18a8-0",
            c: common_vendor.p({
              name: index,
              title: item.title
            })
          };
        }),
        g: common_vendor.p({
          value: [0]
        }),
        h: common_vendor.o(backIndex),
        i: common_vendor.p({
          text: "回到首页",
          type: "primary"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a6ac18a8"]]);
wx.createPage(MiniProgramPage);
