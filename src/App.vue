<template>
  <div>
    <div>
      <mu-appbar
        style="width: 100%; text-align:center; background: linear-gradient(to right, #3f8aff, #8543ff);"
        color="#fafafa"
        z-depth="4"
        textColor="white"
      >
        <span class="color">
          <a class="site_title" href="/">
            Fami
            <mu-icon
              value="whatshot"
              color="red"
              size="20"
              style="vertical-align: middle; margin:-3px 0 0 -5px;"
            ></mu-icon>'s Repository
          </a>
        </span>
      </mu-appbar>
    </div>
    <div>
      <router-view/>
    </div>
    <div class="beian" @click="openBotttomSheet">
      <div>苏ICP备15006533号-4</div>
      <div>苏公网安备 32058102001468号</div>
    </div>

    <mu-bottom-sheet :open.sync="open" :lock-scroll="true">
      <mu-list @item-click="closeBottomSheet">
        <mu-sub-header>选择一种方式来联系我</mu-sub-header>
        <mu-list-item button href="mailto:famio@qq.com">
          <mu-list-item-action>
            <mu-icon value="email" color="blue"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>E-mail</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button href="tencent://message/?uin=690938288&Site=liujunyang.com&Menu=yes">
          <mu-list-item-action>
            <mu-icon value="chat" color="blue"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>QQ</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  },
  methods: {
    closeBottomSheet() {
      this.open = false;
    },
    openBotttomSheet() {
      this.open = true;
    }
  }
};
</script>

<style scoped>
.site_title {
  color: white;
  text-decoration: none;
  text-shadow: 5px 1px 10px rgba(0, 0, 0, 0.2);
}
.beian {
  display: flex;
  position: fixed;
  cursor: pointer;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  padding: 10px 0;
  left: 0;
  right: 0;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
}
.beian >>> div {
  margin: auto auto;
}
</style>
