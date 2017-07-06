<template>
  <div id="app">
    <img src="/static/Logo.png"></img>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5;
  font-size: 50px;
  margin-top: 60px;
}
img {
  width: 35%;
  margin-top: -16vh;
}
body {
  background: #424242;
}
h2 {
  margin-top: -6vh;
}
</style>
