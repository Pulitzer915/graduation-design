"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_qiun_data_charts2 + _easycom_uv_picker2 + _easycom_uv_button2)();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
const _easycom_uv_picker = () => "../../uni_modules/uv-picker/components/uv-picker/uv-picker.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_qiun_data_charts + _easycom_uv_picker + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "history",
  setup(__props) {
    common_vendor.onLoad((e) => {
      console.log(e.user_id);
    });
    const chartData = common_vendor.ref({});
    const opts = common_vendor.ref({
      timing: "easeOut",
      duration: 1e3,
      rotate: false,
      rotateLock: false,
      color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
      padding: [15, 10, 0, 0],
      fontSize: 13,
      fontColor: "#666666",
      dataLabel: true,
      dataPointShape: true,
      dataPointShapeType: "solid",
      touchMoveLimit: 60,
      enableScroll: false,
      enableMarkLine: false,
      legend: {
        show: false,
        position: "bottom",
        float: "center",
        padding: 5,
        margin: 5,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        fontSize: 13,
        fontColor: "#666666",
        lineHeight: 11,
        hiddenColor: "#CECECE",
        itemGap: 10
      },
      xAxis: {
        disableGrid: true,
        disabled: false,
        axisLine: true,
        axisLineColor: "#CCCCCC",
        calibration: false,
        fontColor: "#666666",
        fontSize: 10,
        lineHeight: 20,
        marginTop: 10,
        rotateLabel: true,
        rotateAngle: 45,
        itemCount: 5,
        boundaryGap: "center",
        splitNumber: 5,
        gridColor: "#CCCCCC",
        gridType: "solid",
        dashLength: 4,
        gridEval: 1,
        scrollShow: false,
        scrollAlign: "left",
        scrollColor: "#A6A6A6",
        scrollBackgroundColor: "#EFEBEF",
        title: "",
        titleFontSize: 10,
        titleOffsetY: 0,
        titleOffsetX: -10,
        titleFontColor: "#666666",
        format: ""
      },
      yAxis: {
        gridType: "dash",
        dashLength: 2,
        disabled: false,
        disableGrid: false,
        splitNumber: 5,
        gridColor: "#CCCCCC",
        padding: 10,
        showTitle: true,
        data: [
          {
            type: "value",
            position: "left",
            disabled: false,
            axisLine: true,
            axisLineColor: "#CCCCCC",
            calibration: false,
            fontColor: "#666666",
            fontSize: 12,
            textAlign: "right",
            title: "",
            titleFontSize: 10,
            titleOffsetY: -5,
            titleOffsetX: 0,
            titleFontColor: "#666666",
            min: 0,
            max: null,
            tofix: null,
            unit: "",
            format: ""
          }
        ]
      },
      extra: {
        line: {
          type: "curve",
          width: 2,
          activeType: "hollow",
          linearType: "none",
          onShadow: false,
          animation: "vertical"
        },
        tooltip: {
          showBox: true,
          showArrow: false,
          showCategory: false,
          borderWidth: 0,
          borderRadius: 5,
          borderColor: "#000000",
          borderOpacity: 0.7,
          bgColor: "#000000",
          bgOpacity: 0.7,
          gridType: "solid",
          dashLength: 4,
          gridColor: "#CCCCCC",
          boxPadding: 3,
          fontSize: 13,
          lineHeight: 20,
          fontColor: "#FFFFFF",
          legendShow: true,
          legendShape: "auto",
          splitLine: true,
          horizentalLine: false,
          xAxisLabel: false,
          yAxisLabel: false,
          labelBgColor: "#FFFFFF",
          labelBgOpacity: 0.7,
          labelFontColor: "#666666"
        },
        markLine: {
          type: "solid",
          dashLength: 4,
          data: []
        }
      }
    });
    const scoreList = common_vendor.ref([
      {
        "score": 20,
        "datetime": 1688596451
      },
      {
        "score": 46,
        "datetime": 1688682304
      },
      {
        "score": 18,
        "datetime": 1688724224
      },
      {
        "score": 53,
        "datetime": 1689442092
      },
      {
        "score": 20,
        "datetime": 1689781309
      },
      {
        "score": 44,
        "datetime": 1689781309
      },
      {
        "score": 60,
        "datetime": 1689781309
      }
    ]);
    const picker = common_vendor.ref(null);
    const selectColumns = [["近7次得分", "近一个月得分"]];
    const selectIndex = common_vendor.ref(0);
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
    const convertTimestampToDateString = (timestamp) => {
      const date = new Date(timestamp * 1e3);
      return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    };
    const convertTimestampToChineseDateString = (timestamp) => {
      const date = new Date(timestamp * 1e3);
      return date.getFullYear() + "年" + ("0" + (date.getMonth() + 1)).slice(-2) + "月" + ("0" + date.getDate()).slice(-2) + "日";
    };
    chartData.value = {
      categories: scoreList.value.map((item) => convertTimestampToDateString(item.datetime)),
      series: [{
        name: "",
        data: scoreList.value.map((item) => item.score)
      }]
    };
    const openPicker = () => {
      picker.value.open();
    };
    const pickConfirm = (e) => {
      selectIndex.value = e.indexs[0];
    };
    const findIndexByScore = (score) => {
      for (let i = 0; i < resultList.length; i++) {
        const range = resultList[i].content;
        if (range.includes("以上")) {
          const minScore = parseInt(range.split("分以上")[0]);
          if (score >= minScore)
            return i;
        } else {
          const [minScore, maxScore] = range.split("~").map((s) => parseInt(s));
          if (score >= minScore && score <= maxScore)
            return i;
        }
      }
      return -1;
    };
    const goback = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_assets._imports_0$1,
        c: common_vendor.o(goback),
        d: common_assets._imports_1,
        e: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        f: common_vendor.p({
          type: "line",
          chartData: chartData.value,
          opts: opts.value,
          canvas2d: true
        }),
        g: common_vendor.sr(picker, "baf676d4-1", {
          "k": "picker"
        }),
        h: common_vendor.o(pickConfirm),
        i: common_vendor.p({
          columns: selectColumns
        }),
        j: common_vendor.t(selectColumns[0][selectIndex.value]),
        k: common_vendor.o(openPicker),
        l: common_vendor.p({
          type: "primary"
        }),
        m: common_vendor.f(scoreList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.score),
            b: colorList[findIndexByScore(item.score)],
            c: common_vendor.t(resultList[findIndexByScore(item.score)].title),
            d: common_vendor.t(convertTimestampToChineseDateString(item.datetime))
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-baf676d4"]]);
wx.createPage(MiniProgramPage);
