export default class UserService {
	
	constructor( resource ) {
		this._resource = resource( 'users{/id}' )
	}

	listar() {
		return this._resource
				.query()
				.then( res => res.json() )
	}

	cadastrar( user ) {
		return this._resource
				.save( user )
	}

	alterar() {

	}

	deletar( id ) {
		return this._resource.delete( { id } )
	}
}