<template>
  <div id="app" class="columns">
    <div class="column is-3 is-2-widescreen is-paddingless is-marginless navbar">
      <Navigation/>
    </div>
    <div class="column is-8 is-6-widescreen is-4-fullhd">
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
