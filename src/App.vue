<template>
  <div id="app">
    <Library name="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Library from './components/Library.vue'

export default {
  name: 'App',
  components: {
    Library
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
