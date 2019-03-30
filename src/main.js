// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import MuseUI from "muse-ui";
import axios from "axios";
import Loading from "muse-ui-loading";
import VueWechatTitle from "vue-wechat-title";
import wx from "weixin-js-sdk";
import "muse-ui-loading/dist/muse-ui-loading.css";
import "./font/font.css";
import "muse-ui/dist/muse-ui.css";
import "typeface-roboto";

Vue.use(MuseUI);
Vue.use(Loading);
Vue.use(VueWechatTitle);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.prototype.WXshare = function(url, title) {
  let oriUrl = location.href.split("#")[0].toLowerCase();
  let Base64 = require("js-base64").Base64;
  let site = Base64.encode(oriUrl);
  this.$axios
    .get("https://core.liujunyang.com/api/weixin/share/" + site)
    .then(function(res) {
      wx.config({
        debug: false, // 开启调试模式,
        appId: res.data.appid, // 必填，企业号的唯一标识，此处填写企业号corpid
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.noncestr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名，见附录1
        jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    })
    .catch(function(res) {
      console.log(res);
    });

  wx.ready(function() {
    //需在用户可能点击分享按钮前就先调用
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: "刘俊洋的知识库：分享一切尽可能让你看得懂的东西。", // 分享描述
      link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "https://www.liujunyang.com/static/images/wx_logo.png", // 分享图标
      success: function() {}
    });

    wx.onMenuShareTimeline({
      title: title, // 分享标题
      desc: "刘俊洋的知识库：分享一切尽可能让你看得懂的东西。", // 分享描述
      link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "https://www.liujunyang.com/static/images/wx_logo.png", // 分享图标
      success: function() {}
    });
  });
};

import router from "./router";

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
