<template>
  <div>
    <div>
      <mu-appbar
        style="width: 100%; text-align:center;"
        color="#fafafa"
        z-depth="0"
        textColor="black"
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
  text-shadow: 5px 1px 10px rgba(0, 0, 0, 0.2);
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
.color {
  background-image: url("assets/logo-color.png");
  background-repeat: no-repeat;
  background-size: auto 120%;
  background-position: right;
}
</style>
