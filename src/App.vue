<template>
  <div>
    <div>
      <mu-appbar style="width: 100%;" color="#fafafa" z-depth="0" textColor="black">
        <mu-button icon slot="left" @click="open = !open">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <span>
          <a class="site_title" href="/">Famio's Library</a>
        </span>
      </mu-appbar>
    </div>
    <div>
      <router-view/>
    </div>
    <div class="beian">
      <div>苏ICP备15006533号-4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      docked: false,
      open: false,
      position: "left"
    };
  }
};
</script>

<style scoped>
.site_title {
  color: black;
  text-decoration: none;
}
.beian {
  position: fixed;
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
</style>
