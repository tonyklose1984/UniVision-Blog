<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-menu :default-active="activeIndex" mode="horizontal" router @select="handleSelect">
              <el-menu-item
                v-for="(item,i) in navList"
                :key="i"
                :index="item.name"
              >{{ item.navItem}}</el-menu-item>
            </el-menu>
            <!-- <div class="line"></div> -->
          </div>
        </el-col>
      </el-row>
      <el-row class="m-t-2">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
      navList: [
        { name: "/", navItem: "首页" },
        { name: "/articles", navItem: "全部文章" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>

<style scoped>
.m-t-2 {
  margin-top: 20px;
}
.el-main {
  margin-top: 40px;
}
</style>
