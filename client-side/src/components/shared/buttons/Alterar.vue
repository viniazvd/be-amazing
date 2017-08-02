<template>
	<button class="botao botao-alterar" :type="tipo">{{ value }}</button>
</template>

<script>
export default { 
	props: [ 'tipo', 'value' ]
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

	.botao-alterar{
		background: green;
		color: white;
	}
</style>
