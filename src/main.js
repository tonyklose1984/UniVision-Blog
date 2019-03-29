// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import MuseUI from "muse-ui";
import axios from "axios";
import Loading from "muse-ui-loading";
import VueWechatTitle from "vue-wechat-title";
import "muse-ui-loading/dist/muse-ui-loading.css";
import "muse-ui/dist/muse-ui.css";

Vue.use(MuseUI);
Vue.use(Loading);
Vue.use(VueWechatTitle);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

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
