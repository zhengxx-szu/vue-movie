<template>
  <div class="loading">
    <img src="../assets/images/loading.gif">
    <span>正在载入...</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.loading {
  width: 100%;
  text-align: center;
  img {
    display: block;
    width: 25px;
    height: 25px;
    margin: 10px auto;
  }
  span {
    font-size: 12px;
  }
}
</style>
