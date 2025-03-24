"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/robot/robot.js";
  "./pages/scale/scale.js";
  "./pages/user/user.js";
  "./pages/scale/question.js";
  "./pages/scale/result.js";
  "./pages/user/login.js";
  "./pages/user/history.js";
  "./pages/robot/question.js";
  "./pages/robot/chat.js";
  "./pages/user/register.js";
  "./pages/scale/sas_scale.js";
  "./pages/scale/sds_scale.js";
  "./pages/scale/sds_result.js";
  "./pages/scale/sas_result.js";
  "./pages/scale/mdq_scale.js";
  "./pages/scale/mdq_result.js";
  "./pages/scale/pq16_scale.js";
  "./pages/scale/pq16_result.js";
  "./pages/scale/ocir_scale.js";
  "./pages/scale/ocir_result.js";
  "./pages/robot/recommend_scale.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
