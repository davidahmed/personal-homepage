<template>
  <div id="app" class="columns">
    <div class="column is-4">
      <Navigation/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style>

</style>
