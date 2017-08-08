<template>
  <div id="app">
    <transition name="router_animate" enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <div class="nav_bar">
      <router-link class="nav_item" tag="div" to="/show">
        <i class="iconfont icon-dianyingpiao"></i><span class="item_text">热映</span>
      </router-link>
      <router-link class="nav_item" tag="div" to="/rank">
        <i class="iconfont icon-qushi"></i><span class="item_text">排行</span>
      </router-link>
      <router-link class="nav_item" tag="div" to="/search">
        <i class="iconfont icon-pipeifangshi"></i><span class="item_text">搜索</span>
      </router-link>
      <router-link class="nav_item" tag="div" to="/user">
        <i class="iconfont icon-xinrenzhinan"></i><span class="item_text">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
html, body {
  background: #444;
  color: #999;
}
.nav_bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: #333;
}
.nav_item {
  flex: 1;
  text-align: center;
  height: 50px;
}
.nav_item .iconfont {
  display: block;
  font-size: 20px;
  margin-top: 10px;
}
.nav_item .item_text {
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.router-link-active {
  color: #ffcd32;
}
</style>
