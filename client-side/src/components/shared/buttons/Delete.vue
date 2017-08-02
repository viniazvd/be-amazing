<template>
	<button @click="disparaEvento()" class="botao botao-perigo" :type="tipo">{{ value }}</button>
</template>

<script>
export default { 
	props: [ 'tipo', 'value' ],

	methods: {
		disparaEvento() {
			if ( confirm( 'Tem certeza que deseja deletar esse usuário?' )  ) {
				this.$emit('eventoDisparado')
			}
		}
	}
}
</script>

<style>
	.botao{
		display: inline-block;
		padding: 10px;
		border-radius: 3px;
		margin: 10px;
		font-size: 1.2em;
	}

	.botao-perigo{
		background: firebrick;
		color: white;
	}
</style>
