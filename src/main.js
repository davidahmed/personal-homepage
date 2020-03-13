import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

require("./assets/bulma.css")

const routes = [
	{ 
		path: '/', 
		name: 'home', 
		component: App 
	},
	{ 
		path: '/bookshelf', 
		name: 'bookshelf',
		component: App},
];

const router = new VueRouter({
	routes: routes
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
