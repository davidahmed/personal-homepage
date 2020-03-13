<template>
  <div id="app" class="columns">
    <div class="column is-4">
      <Navigation/>
    </div>

    <div class="column is-8">
      <Library name="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import Library from './components/Library.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Library,
    Navigation
  }
}
</script>

<style>

</style>
