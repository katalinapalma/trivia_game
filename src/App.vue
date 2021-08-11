<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: rgb(114,225,209);
    background: radial-gradient(circle, rgba(114,225,209,1) 0%, rgba(207,138,252,1) 100%);
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  
</style>
