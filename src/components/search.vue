<template>
  <div class="page-container">
    <mu-container class="body-head">
      <mu-row gutter>
        <mu-col class="center" span="10" sm="12" md="8" lg="8" xl="8">
          <div class="grid-cell">
            <mu-paper class="demo-paper index-search-div" :z-depth="1">
              <input
                class="index-search-div-input"
                type="text"
                placeholder="寻你所想..."
                v-model="keywords"
                @keyup.enter="search(keywords)"
              >
              <mu-button
                class="index-search-div-icon"
                icon
                small
                color="grey"
                @click="search(keywords)"
              >
                <mu-icon value="search" size="30" color="grey400"></mu-icon>
              </mu-button>
            </mu-paper>
          </div>
        </mu-col>
      </mu-row>
      <div class="captain m-t-5 m-b-2">搜索结果</div>
      <mu-divider></mu-divider>
    </mu-container>
    <mu-container class="body-main">
      <mu-list
        textline="two-line"
        v-for="article in result.data"
        :key="article.id"
        @click="toArticle(article.id)"
      >
        <mu-list-item avatar :ripple="false" button>
          <mu-list-item-content>
            <mu-list-item-title>{{article.title}}</mu-list-item-title>
            <mu-list-item-sub-title>{{article.content.replace(/<[^>]*>/g,'').slice(0,50)+'...'}}</mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-container>
    <mu-container class="body-foot"></mu-container>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keywords: this.$route.query.keywords,
      result: []
    };
  },
  mounted() {
    console.log(this.$route);
    this.search(this.keywords);
    this.WXshare(location.href, "搜索 - " + this.keywords);
  },
  methods: {
    search(keywords) {
      let that = this;
      let loading = this.$loading();
      let post = { keywords: keywords };
      this.$axios
        .post("https://core.liujunyang.com/blog/articles/search", post)
        .then(function(res) {
          that.result = res.data;
          console.log(that.result);
          loading.close();
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    toArticle(id) {
      this.$router.push({ name: "Article", query: { id: id } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-search-div {
  display: flex;
  background: white;
  border: 1px solid #dfe1e5;
  height: 44px;
  border-radius: 24px;
  margin: 50px auto 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 20px;
}
.index-search-div-input {
  border: none;
  outline: none;
  height: 34px;
  width: 92%;
}
.index-search-div-icon {
  border-radius: 50%;
}
.index-search-div-icon > mu-icon {
  margin: auto auto;
}
.m-t-5 {
  margin-top: 50px;
}
.m-b-2 {
  margin-bottom: 20px;
}
.item-body {
  color: rgba(0, 0, 0, 0.5);
}
.item-footer {
  font-size: 12px;
  margin-top: 10px;
}
.search-card {
  margin-top: 10px;
  cursor: default;
}
.search-card:hover {
  background-color: rgba(0, 0, 0, 0.01);
}
.center {
  margin: auto auto;
}
</style>
