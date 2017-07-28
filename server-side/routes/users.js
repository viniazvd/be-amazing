const express = require('express')
const router = express.Router()

const queries = require('../db/queries')

// const knex = require('knex')('development')

// router.get('/users', ( req, res ) => {
//   knex.raw( 'select * from users' ).then( user ) => {
//   //knex.select('*').from('users').then( user ) => {
//     res.json( user )
//   }
// }

const isValidId = ( req, res, next ) => {
  if ( !isNaN( req.params.id ) ) return next()
  next( new Error( 'invalid ID' ))
}

function userValid( user ) {
  const hasName = typeof user.name == 'string' && user.name.trim() != ''
  const hasEmail = typeof user.name == 'string' && user.email.trim() != ''
  const hasAge = !isNaN( user.age )
  const hasPhone = !isNaN( user.phone )
  const hasQp = typeof user.qp == 'string' && user.qp.trim() != ''
  return hasName && hasEmail && hasAge && hasPhone && hasQp 
}

router.get('/', ( req, res ) => {
  queries.getAll().then(user => {
    res.json( user );
  })
})

router.get('/:id', isValidId, ( req, res,next ) => {
  queries.getById( req.params.id ).then( user => {
    if( user ) {
      res.json( user )
    } else {
      next( new Error( 'invalid id' ) )
    }
  })
})

router.post('/', ( req, res, next ) => {
  if( userValid( req.body ) ) {
    queries.create( req.body ).then( users => {
      res.json( users[0] )
    })
  } else {
    next( new Error( 'invalid user' ) )
  }
})

router.put('/:id', isValidId, ( req, res, next ) => {
  if( userValid( req.body ) ) {
    queries.update( req.params.id, req.body ).then( users => {
      res.json( users[0] )
    })
  } else {
    next( new Error( 'invalid user' ) )
  }
})

router.delete('/:id', isValidId, ( req, res, next ) => {
  queries.delete( req.params.id ).then( user => {
    if( user ) {
      res.json({
        deleted: true
      })
    } else {
      next( new Error( 'invalid id' ) )
    }
  })
})

module.exports = router;
