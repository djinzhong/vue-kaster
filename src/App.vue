<template>
  <div id="app">
    <Nav class="na"></Nav>
    <router-view class="home" />
  </div>
</template>
<script>
import Nav from 'views/Nav.vue'
export default {
  components: {
    Nav: Nav
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
  display: flex;
}
.nav {
  height: 100%;
}
.home {
  flex: auto 1 1;
}
</style>
