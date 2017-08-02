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
		if( user.id ) {
			return this._resource.update( { id: user.id }, user )
		} else {
			return this._resource.save( user )
		}
		
	}

	deletar( id ) {
		return this._resource.delete( { id } )
	}

	buscarPorId( id ) {
		return this._resource.get( { id } )
			.then( res => res.json() )
	}
}