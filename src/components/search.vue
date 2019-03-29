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
    </mu-container>
    <mu-container class="body-main">
      <div class="search-result-item" v-for="article in result.data" :key="article.id">
        <h4>{{article.title}}</h4>
        <div class="Body1">{{article.content}}</div>
        <div>{{article.created_at}}</div>
      </div>
    </mu-container>
    <mu-container class="body-foot"></mu-container>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      keywords: this.$route.params.keywords,
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
      let post = { keywords: keywords };
      this.$axios
        .post("https://core.liujunyang.com/blog/articles/search", post)
        .then(function(res) {
          that.result = res.data;
          console.log(that.result);
        })
        .catch(function(res) {
          console.log(res);
        });
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
</style>
