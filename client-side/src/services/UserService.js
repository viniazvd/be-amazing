export default class UserService {
	
	constructor( resource ) {
		this._resource = resource( 'users{/id}' )
	}

	listar() {
		return this._resource
				.query()
				.then( res => res.json(), 
							 err => {
								 console.log( err ) 
								 throw new Error( 'Não foi possível carregar os usuários.' )
							 }
 						 )
	}

	cadastrar( user ) {
		if( user.id ) {
			return this._resource.update( { id: user.id }, user )
		} else {
			return this._resource.save( user )
		}
		
	}

	deletar( id ) {
		return this._resource
			.delete( { id } )
			.then( null, 
						 err => {
							 console.log( err )
							 throw new Error( 'Não foi possível remover o usuário.' )
						 } )
	}

	buscarPorId( id ) {
		return this._resource.get( { id } )
			.then( res => res.json() )
	}
}