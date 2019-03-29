<template>
  <div class="page-container">
    <mu-container class="body-head">
      <mu-paper class="demo-paper index-search-div" :z-depth="1">
        <input
          class="index-search-div-input"
          type="text"
          :placeholder="keywords"
          v-model="keywords"
        >
        <mu-button class="index-search-div-icon" icon small color="grey" @click="search(keywords)">
          <mu-icon value="search" size="30" color="grey400"></mu-icon>
        </mu-button>
      </mu-paper>
      <div class="captain m-t-5 m-b-2">搜索结果</div>
      <mu-divider></mu-divider>
    </mu-container>
    <mu-container class="body-main">
      <!-- <div class="search-result-item" v-for="article in result.data" :key="article.id">
        <h3 class="title" @click="toArticle(article.id)">{{article.title}}</h3>
        <div class="item-body" v-html="article.content.slice(0,150)+'...'"></div>
        <div class="item-footer">{{article.created_at}}</div>
      </div>-->
      <!-- <mu-container>
        <mu-card
          class="search-card"
          v-for="article in result.data"
          :key="article.id"
          @click="toArticle(article.id)"
        >
          <mu-card-title :title="article.title" :sub-title="article.created_at"></mu-card-title>
          <mu-card-text v-html="article.content.slice(0,150)+'...'"></mu-card-text>
        </mu-card>
      </mu-container>-->
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
  width: 60%;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 20px;
}
.index-search-div-input {
  border: none;
  outline: none;
  height: 34px;
  width: 92%;
  /* margin: auto auto; */
}
.index-search-div-icon {
  /* margin: auto auto; */
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
</style>
