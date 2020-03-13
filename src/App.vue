<template>
  <div id="app" class="columns">
    <div class="column is-10 is-offset-1">
      <Library name="Welcome to Your Vue.js App"/>
    </div>
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

</style>
