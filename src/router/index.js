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
      component: Index
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/article",
      name: "Article",
      component: Article
    }
  ]
});
