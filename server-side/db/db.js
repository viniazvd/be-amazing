// const environment = process.env.NODE_ENV | 'development'
// const config = require('../knexfile')[environment]

// module.exports = require('knex')(config)

// const environment = process.env.NODE_ENV | 'development'
// const config = require('../knexfile')
// const environmentConfig = config[environment]
// const knex = require('knex')

// module.exports = knex(environmentConfig)

var config      = require('../knexfile.js');
var env         = 'development';
var knex        = require('knex')(config[env]);

module.exports = knex;

// knex.migrate.latest([config]);