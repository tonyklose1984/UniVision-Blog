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
    // this.WXshare(location.href, this.result.title);
  },
  methods: {
    loadArticle(id) {
      let that = this;
      let loading = this.$loading();
      this.$axios
        .get("https://core.liujunyang.com/blog/articles/" + id)
        .then(function(res) {
          that.WXshare(location.href, res.data.data.title);
          that.result = res.data.data;
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
.doc-body {
  line-height: 30px;
  font-family: "Roboto";
}
/* 文档样式 */
p {
  margin: 10px 0;
}
pre {
  font-family: "Roboto";
  background-color: rgba(102, 185, 240, 0.15);
  color: black;
  border-left: 6px solid rgba(102, 185, 240, 0.4);
  padding: 5px 5px 5px 10px;
  font-size: 12px;
  margin: 20px 0;
}
code {
  font-family: "Roboto";
  background-color: rgba(68, 151, 64, 0.8);
  color: rgba(255, 255, 255, 1);
  margin: 0 5px;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 300;
}
img {
  border-radius: 8px;
}
</style>
