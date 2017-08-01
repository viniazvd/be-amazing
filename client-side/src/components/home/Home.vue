<template>
	<div>
		<input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Digite um usuário">
		{{ filtro }}
		<ul>
			<li v-for="user of filterUser">

				<table-standard :titulo="user.name">
					{{ user.email }} - {{ user.age }}

					<button-delete tipo="button" rotulo="Deletar" /> 

				</table-standard>

			</li>
		</ul>
	</div>
</template>

<script>
	import Standard from '../shared/data-tables/Standard.vue';
	import Delete from '../shared/buttons/Delete.vue';

  export default {

		components: {
			'table-standard': Standard,
			'button-delete': Delete
		},

    data () {
      return {
				titulo: 'be-amazing',
				users: [],
				filtro: ''
			}
    },

		computed: {
			filterUser() {
				if( this.filtro ) {
					let exp = new RegExp( this.filtro.trim(), 'i')
					return this.users.filter( user => exp.test( user.name ) )
				} else {
					return this.users
				}
			}
		},

		created() {
			this.$http.get( 'http://localhost:3000/users/' )
				 	.then( res => res.json() )
					.then( user => this.users = user )
		} 
  }
</script>

<style scoped>
	.filtro {
		display: block;
		width: 100%;
	}
</style>
