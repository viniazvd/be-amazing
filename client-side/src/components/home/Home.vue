<template>
	<div>
		<p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
		<input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Digite um usuário">
		{{ filtro }}
		<ul>
			<li v-for="user of filterUser">

				<table-standard :titulo="user.name">
					{{ user.email }} - {{ user.age }}

					<router-link :to="{ name: 'alterar', params: { id: user.id } }">
						<button-alterar tipo="button" value="Alterar" />
					</router-link>
					
					<button-delete tipo="button" value="Deletar" @eventoDisparado="remove( user )" /> 

				</table-standard> 

			</li>
		</ul>
	</div>
</template>

<script>
	import Standard from '../shared/data-tables/Standard.vue';
	import Delete from '../shared/buttons/Delete.vue';
	import Alterar from '../shared/buttons/Alterar.vue';
	import UserService from '../../services/UserService'

  export default {

		components: {
			'table-standard': Standard,
			'button-delete': Delete,
			'button-alterar': Alterar
		},

    data () {
      return {
				users: [],
				filtro: '',
				mensagem: ''
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

		methods: {
			remove( user ) {
				this.service.deletar( user.id )
						.then( () => {
							const indice = this.users.indexOf( user )
							this.users.splice( indice, 1 )
							this.mensagem = 'Usuário removido com sucesso'
						}, err => this.mensagem = err.message )
			}
		},

		created() {
			this.service = new UserService( this.$resource )

			this.service
					.listar()
					.then( user => this.users = user, err => this.mensagem = err.message )
		} 
  }
</script>

<style scoped>
	.filtro {
		display: block;
		width: 100%;
	}
	.centralizado {
		text-align: center;
	}
</style>
