import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Library from './components/Library.vue'
import Home from './components/Home.vue'
import Essays from './components/Essays.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

require("./assets/bulma.css")


const routes = [
	{ 
		path: '/', 
		component: Home
	},
	{
		path: '/bookshelf',
		component: Library,
	},
	{
		path: '/essays',
		component: Essays
	},
	{
		path: '/projects',
		component: Projects
	},
	{
		path: '/skills',
		component: Skills
	}

];

const router = new VueRouter({
	routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
