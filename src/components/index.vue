<template>
  <div class="page-container">
    <mu-container class="body-head">
      <div class="index-logo">
        <img src="../../static/images/logo.png">
      </div>
      <mu-paper class="demo-paper index-search-div" :z-depth="1">
        <input class="index-search-div-input" type="text" placeholder="寻你所想...">
        <mu-button class="index-search-div-icon" icon small color="grey">
          <mu-icon value="search" size="30" color="grey400"></mu-icon>
        </mu-button>
      </mu-paper>
    </mu-container>
    <mu-container class="body-main">
      <!-- <mu-row gutter class="index-grid">
        <mu-col span="4">
          <div class="grid-cell">123</div>
        </mu-col>
        <mu-col span="4">
          <div class="grid-cell">456</div>
        </mu-col>
        <mu-col span="4">
          <div class="grid-cell">789</div>
        </mu-col>
      </mu-row>-->
      <!-- <div class="demo-step-container">
        <mu-stepper :activeStep="0" :linear="false">
          <mu-step>
            <mu-step-label>输入您的关键字</mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>挑选符合的结果</mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>照着做</mu-step-label>
          </mu-step>
        </mu-stepper>
      </div>-->
    </mu-container>
    <mu-container class="body-foot">
      <mu-bottom-nav class="index-bottom-nav">
        <mu-bottom-nav-item title="备案" icon="website" :ripple="false"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite" :ripple="false"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="关于" icon="info" :ripple="false"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
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
  /* border: 1px solid red; */
}
.body-main {
  margin: 50px auto 0 auto;
  padding: 24px 24px;
  /* border: 1px solid black; */
}
.body-foot {
  margin: 50px auto 0 auto;
  /* border: 1px solid blue; */
}
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
</style>
