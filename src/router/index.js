import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Search from "@/components/search";
import Article from "@/components/article";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
      meta: {
        title: "刘俊洋的知识库"
      }
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
      meta: {
        title: "搜索 - 刘俊洋的知识库"
      }
    },
    {
      path: "/article",
      name: "Article",
      component: Article,
      meta: {
        type: "article"
      }
    }
  ]
});
