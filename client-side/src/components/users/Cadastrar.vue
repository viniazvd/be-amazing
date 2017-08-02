<template>
  <div>
		<h2 class="centralizado">Cadastrar</h2>

		<form @submit.prevent="gravar()">

			<div class="controle">
				<label for="nome">Nome</label>
				<input id="name" autocomplete="off" v-model="user.name">
			</div>

			<div class="controle">
				<label for="email">E-mail</label>
				<input id="email" autocomplete="off" v-model="user.email">
			</div>

			<div class="controle">
				<label for="age">Age</label>
				<input id="age" autocomplete="off" v-model="user.age">
			</div>

			<div class="controle">
				<label for="phone">Phone</label>
				<input id="phone" autocomplete="off" v-model="user.phone">
			</div>

			<div class="controle">
				<label for="qp">Q.P</label>
				<textarea id="qp" autocomplete="off" v-model="user.qp"></textarea>
			</div>

			<div class="controle">
				<button type="submit">Gravar</button>
				<router-link to="/"><button type="submit">Voltar</button></router-link>
			</div>

		</form>
  </div>
</template>

<script>
import User from '../../domain/User'
import UserService from '../../services/UserService'

export default {
  data() {
		return {
			user: new User()
		}
	},

	methods: {
		gravar() {
			this.service
					.cadastrar( this.user )
					.then( () => this.user = new User() )
		}
	},

	created() {
		this.service = new UserService( this.$resource )
	}
}
</script>

<style scoped>
	.controle {
		font-size: 1.2em;
		margin-bottom: 20px;
	}
	.controle label {
		display: block;
		font-weight: bold;
	}
	.controle label + input, .controle textarea {
		width: 100%;
		font-size: inherit;
		border-radius: 5px;
	}
	.centralizado {
		text-align: center;
	}
</style>
