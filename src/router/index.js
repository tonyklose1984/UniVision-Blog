import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index";
import articles from "@/components/articles";
import admin from "@/components/admin";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/articles",
      name: "articles",
      component: articles
    },
    {
      path: "/admin",
      name: "admin",
      component: admin
    }
  ]
});
