import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Library from './components/Library.vue'
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Essays from './components/Essays.vue'
import EssaysList from './components/EssaysList.vue'
import Essay from './components/utilities/Essay.vue'
import Academic from './components/Academic.vue'

import Projects from './components/Projects.vue'
import ProjectsList from './components/ProjectsList.vue'
import Project from './components/utilities/Project.vue'



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
		path: '/academic',
		component: Academic,
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
		component: Projects,
		props: true,
		children: [{
			path: ':slug',
			name: 'projects.detail',
			props: true,
			component: Project
		},
		{
			path: '',
			name: 'projects.list',
			component: ProjectsList
		}]
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
