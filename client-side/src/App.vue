<template>
  <div>

		{{ titulo }}

		<ul>
			<li v-for="user of users">
				{{ user.name }} {{ user.email }}
			</li>
		</ul>

  </div>
</template>

<script>
export default {

  data () {
    return {
			titulo: 'opa',
			users: []
    }
  }, 
	created() {

		this.$http.get('http://localhost:3000/users/') 
			.then( res => res.json())
			.then( users => this.users = users ) 
	}
}
</script>

<style>

</style>
