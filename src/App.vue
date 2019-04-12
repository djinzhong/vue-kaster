<template>
  <div id="app">
    <dj-nav class="nav" />
    <router-view class="home" />
  </div>
</template>
<script>
import DjNav from 'views/nav/Nav.vue'
export default {
  components: {
    DjNav
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
  display: flex;
}
.nav {
  width: 230px;
  height: 100%;
  flex-shrink: 0;
}
.home {
  height: 100%;
  width: calc(100% - 250px);
  margin: 0 auto;
  flex-shrink: 1;
  padding: 20px 10px;
  overflow: auto;
}
</style>
