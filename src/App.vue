<template>
  <div id="app" class="columns">
    <div class="column is-3">
      <Navigation/>
    </div>
    <div class="column is-8">
    <router-view/>
    </div>
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
