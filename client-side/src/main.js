import Vue from 'vue'
import App from './App.vue'

// import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

// Vue.use( Vuetify )

Vue.use( VueResource )
Vue.http.options.root = 'http://localhost:3000'

Vue.use( VueRouter )

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
	router, 
  render: h => h(App)
})
