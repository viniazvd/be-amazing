<template>
	<div>
		
		<my-menu :routes="routes"/>

		<router-view></router-view> 
	</div>
</template>

<script>
	import { routes } from './routes'
	import Menu from './components/shared/menu/Menu.vue'

  export default {

		components: {
			'my-menu': Menu
		},

		data() {
			return {
				routes: routes
			}
		}
	}
</script>

<style>
	
</style>
