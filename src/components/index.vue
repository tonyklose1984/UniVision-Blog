<template>
  <div class="page-container">
    <mu-container class="body-head">
      <mu-row gutter>
        <mu-col class="center" span="12" sm="12" md="8" lg="8" xl="8">
          <div class="grid-cell">
            <div class="index-logo"></div>
          </div>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col class="center" span="12" sm="12" md="8" lg="8" xl="8">
          <div class="grid-cell">
            <mu-paper class="demo-paper index-search-div" :z-depth="4">
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
    <mu-container class="body-foot"></mu-container>
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
}
.page-container {
  padding: 30px 30px;
  margin-top: 30px;
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
  height: 300px;
  background-image: url("../assets/index-logo.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
}
.index-bottom-nav {
  background-color: #fafafa;
}
.center {
  margin: auto auto;
}
</style>
