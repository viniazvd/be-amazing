import Vue from 'vue'
import App from './App.vue'

// import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

// Vue.use( Vuetify )
Vue.use( VueRouter )
Vue.use( VueResource )

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
	router, 
  render: h => h(App)
})
