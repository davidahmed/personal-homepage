<template>
  <div id="app" class="columns">
    <div class="column is-3 is-3-widescreen navbar">
      <Navigation/>
    </div>
    <div class="column is-8 is-6-widescreen is-5-fullhd">
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
  },
  mounted(){
    let gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-163385520-1')
    document.head.appendChild(gaScript)
  }
}

window.dataLayer = window.dataLayer || [];
window.gtag = function (){window.dataLayer.push(arguments);}
window.gtag('js', new Date());
window.gtag('config', 'UA-163385520-1');

</script>
