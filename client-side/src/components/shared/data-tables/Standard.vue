<template>
  <div class="standad">
		<h4>{{ titulo }}</h4>
		<slot class="conteudo"></slot>
	</div>
</template>

<script>
  export default {
		props: [ 'titulo' ]
	}
</script>

<style>

</style>
