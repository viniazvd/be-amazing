<template>
  <div>
		<h2 v-if="user.id" class="centralizado">Alterar</h2>
		<h2 v-else class="centralizado">Cadastrar</h2>

		<form @submit.prevent="gravar()">

			<div class="controle">
				<label for="nome">Nome</label>
				<input name="name" id="name" autocomplete="off" v-model.lazy="user.name" v-validate data-vv-rules="required">
				<span v-show="errors.has( 'name' )" class="erro">Campo Nome obrigatório</span>
			</div>

			<div class="controle">
				<label for="email">E-mail</label>
				<input name="email" id="email" autocomplete="off" v-model="user.email"  v-validate="{ rules: { regex: /\S+@\S+\.\S+/ } }">
				<span v-show="errors.has( 'email' )" class="erro">Campo e-mail obrigatório</span>
			</div>

			<div class="controle">
				<label for="age">Age</label>
				<input name="age" id="age" autocomplete="off" v-model="user.age" v-validate data-vv-rules="required">
				<span v-show="errors.has( 'age' )" class="erro">Campo idade obrigatório</span>
			</div>

			<div class="controle">
				<label for="phone">Phone</label>
				<input name="phone" id="phone" autocomplete="off" v-model="user.phone" v-validate data-vv-rules="required">
				<span v-show="errors.has( 'phone' )" class="erro">Campo telefone obrigatório</span>
			</div>

			<div class="controle">
				<label for="qp">Q.P</label>
				<textarea name="qp" id="qp" autocomplete="off" v-model="user.qp" v-validate data-vv-rules="required"></textarea>
				<span v-show="errors.has( 'qp' )" class="erro">Campo queixa primária obrigatório</span>
			</div>

			<div class="controle">
				<button-salvar tipo="submit" value="Salvar" /> 
				<router-link to="/"><button-voltar tipo="submit" value="Voltar" /> </router-link>
			</div>

		</form>
  </div>
</template>

<script>
import User from '../../domain/User'
import UserService from '../../services/UserService'
import Salvar from '../shared/buttons/Salvar.vue';
import Voltar from '../shared/buttons/Voltar.vue';

export default {

	components: {
		'button-salvar': Salvar,
		'button-voltar': Voltar
	},

  data() {
		return {
			user: new User(),
			id: this.$route.params.id
		}
	},

	methods: {
		gravar() {

			this.$validator
					.validateAll()
					.then( sucess => {
						
						if( sucess ) {
							this.service
									.cadastrar( this.user )
						 			.then( () => {
										if( this.id ) this.$router.push( { name: 'home' } )
										this.user = new User()
									})
						}

					} )

			
		}
	},

	created() {
		this.service = new UserService( this.$resource )

		if( this.id ) {
			this.service
				.buscarPorId( this.id )
				.then( user => this.user = user, err => console.log( err ) )
		}
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
	.erro {
		color: red;
	}
</style>
