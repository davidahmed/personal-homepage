import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Library from './components/Library.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'

import Essays from './components/Essays.vue'
import EssaysList from './components/EssaysList.vue'
import Essay from './components/utilities/Essay.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

require("./assets/main.scss")


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
		component: Essays,
		props: true, 
		children : [{
			path: ':slug',
			name: 'essays.detail',
			props: true,
			component: Essay
		},
		{
			path: '',
			name: 'essays.list',
			component: EssaysList
		}]

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
