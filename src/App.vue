<template>
  <div>
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css"
      >
      <mu-appbar style="width: 100%;" color="#fafafa" z-depth="0" textColor="black">
        <mu-button icon slot="left" @click="open = !open">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <span>Famio's Library</span>
      </mu-appbar>
    </div>
    <div>
      <router-view/>
    </div>
    <div>
      <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item @click="open = false" button>
            <mu-list-item-title>Close</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
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

<style>
</style>
