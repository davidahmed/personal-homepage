import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Library from './components/Library.vue'
import Home from './components/Home.vue'

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
	}
];

const router = new VueRouter({
	routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
