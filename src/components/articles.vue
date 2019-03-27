<template>
  <el-table :data="info" style="width: 100%">
    <el-table-column prop="created_at" width="180"></el-table-column>
    <el-table-column prop="title"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      info: null
    };
  },
  mounted: function() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      let that = this;
      this.$axios
        .get("https://core.liujunyang.com/blog/articles")
        .then(function(res) {
          that.info = res.data.data;
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
</style>
