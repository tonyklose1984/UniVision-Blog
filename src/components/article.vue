<template>
  <div class="page-container" v-wechat-title="result.title+' - 刘俊洋的知识库'">
    <mu-container class="body-head"></mu-container>
    <mu-container class="body-main">
      <div class="doc-head">
        <h2>{{result.title}}</h2>
        <h5>{{result.created_at}}</h5>
      </div>
      <div class="doc-body" v-html="result.content"></div>
      <div class="doc-foot"></div>
    </mu-container>
    <mu-container class="body-foot"></mu-container>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      result: []
    };
  },
  mounted() {
    this.loadArticle(this.$route.query.id);
    this.WXshare(location.href);
  },
  methods: {
    loadArticle(id) {
      let that = this;
      let loading = this.$loading();
      this.$axios
        .get("https://core.liujunyang.com/blog/articles/" + id)
        .then(function(res) {
          that.result = res.data.data;
          console.log(that.result);
          loading.close();
        })
        .catch(function(res) {
          console.log(res);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.doc-head {
  text-align: center;
}
/* 文档样式 */
pre {
  background-color: #f1f1f1;
  color: black;
  border-left: 6px solid lightgrey;
  padding: 5px 5px 5px 10px;
  font-size: 12px;
}
code {
  background-color: rgb(250, 219, 223);
  color: rgb(245, 94, 115);
  margin: 0 5px;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 600;
}
img {
  border-radius: 8px;
}
</style>
