<template>
  <div class="page-container">
    <mu-container class="body-head">
      <mu-row gutter>
        <mu-col class="center" span="12" sm="12" md="8" lg="8" xl="8">
          <div class="grid-cell">
            <div class="index-logo">
              <img src="../../static/images/logo.png">
            </div>
          </div>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col class="center" span="12" sm="12" md="8" lg="8" xl="8">
          <div class="grid-cell">
            <mu-paper class="demo-paper index-search-div" :z-depth="1">
              <input
                class="index-search-div-input"
                type="text"
                placeholder="寻你所想..."
                v-model="keywords"
                @keyup.enter="toSearch(keywords)"
              >
              <mu-button
                class="index-search-div-icon"
                icon
                small
                color="grey"
                @click="toSearch(keywords)"
              >
                <mu-icon value="search" size="30" color="grey400"></mu-icon>
              </mu-button>
            </mu-paper>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
    <mu-container class="body-main"></mu-container>
    <mu-container class="body-foot">
      <mu-row gutter class="beian">
        <mu-col class="center" span="12" sm="12" md="12" lg="12" xl="12">
          <div class="grid-cell">苏ICP备15006533号-4</div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      keywords: ""
    };
  },
  mounted() {
    this.WXshare(location.href, "刘俊洋的知识库");
  },
  methods: {
    toSearch(keywords) {
      this.$router.push({ name: "Search", query: { keywords: keywords } });
    }
  },
  watch: {
    keywords: function(value, oldValue) {
      this.keywords = value;
      console.log(this.keywords);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
  padding: 30px 30px;
  margin-top: 20px;
}
.body-head {
}
.body-main {
  margin: 50px auto 0 auto;
  padding: 24px 24px;
}
.body-foot {
  margin: 50px auto 0 auto;
}
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
.index-logo {
  display: flex;
  align-items: center;
}
.index-logo > img {
  margin: auto auto;
  width: 200px;
}
.index-bottom-nav {
  background-color: #fafafa;
}
.beian {
  position: absolute;
  width: 90%;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  bottom: 20px;
  left: 5%;
}
.center {
  margin: auto auto;
  text-align: center;
}
</style>
