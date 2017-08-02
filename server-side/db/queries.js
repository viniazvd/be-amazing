const db = require('./db') // connection

module.exports = {
  getAll() {
    return db( 'users' )
  },

  getById( id ) {
    return db( 'users' ).where( 'id', id ).first()
  },

  create( user ) {
    return db( 'users' ).insert( user, '*' )
  },

  update( id, user ) {
    return db( 'users' ).where( 'id', id ).update( user )
  },

  delete( id ) {
    return db( 'users' ).where( 'id', id ).del()
  }
}