<template>
  <div class="page-container">
    <mu-container class="body-head">
      <mu-row gutter>
        <mu-col class="center" span="10" sm="12" md="8" lg="8" xl="8">
          <div class="grid-cell">
            <mu-paper class="demo-paper index-search-div" :z-depth="4">
              <input
                class="index-search-div-input"
                type="text"
                placeholder="寻你所想..."
                v-model="keywords"
                @keyup.enter="search(keywords)"
              />
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
      <div class="captain m-t-5 m-b-2" style="color:white">搜索结果</div>
      <mu-divider></mu-divider>
    </mu-container>
    <mu-container class="body-main">
      <div v-if="show_empty_notice == 1" style="color:white;margin-top:20px;">Sorry...Nothing...</div>
      <mu-list
        textline="two-line"
        v-for="(article,index) in result.data"
        :key="article.id"
        @click="toArticle(article.id)"
      >
        <mu-list-item avatar :ripple="false" button>
          <mu-list-item-content>
            <mu-list-item-title style="color:white">
              {{article.title}}
              <span v-if="index == 0">
                <mu-badge content="推荐" color="primary"></mu-badge>
              </span>
            </mu-list-item-title>
            <mu-list-item-sub-title
              style="color:white"
            >{{article.content.replace(/<[^>]*>/g,'').slice(0,50)+'...'}}</mu-list-item-sub-title>
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
      result: [],
      index: 0,
      show_empty_notice: 0
    };
  },
  mounted() {
    this.search(this.keywords);
    this.WXshare(
      location.href,
      "刘俊洋的知识库",
      "搜索结果：" + this.keywords,
      "https://unicore-1251406171.cos.ap-shanghai.myqcloud.com/blog/logo-boy.png"
    );
  },
  methods: {
    search(keywords) {
      if (this.keywords == "") {
        this.$toast.message("搜索内容不能为空");
      } else {
        let that = this;
        let loading = this.$loading();
        let post = { keywords: keywords };
        this.$axios
          .post("https://core.liujunyang.com/blog/articles/search", post)
          .then(function(res) {
            that.result = res.data;
            if (that.result.data.length <= 0) {
              that.show_empty_notice = 1;
            } else {
              that.show_empty_notice = 0;
            }
            loading.close();
          })
          .catch(function() {});
      }
    },
    toArticle(id) {
      let route = this.$router.resolve({
        name: "Article",
        query: { id: id },
        replace: true
      });
      window.open(route.href, "_blank");
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
