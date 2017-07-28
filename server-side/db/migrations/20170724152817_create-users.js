exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments()
    table.text('name')
    table.text('email')
    table.integer('age')
    table.integer('phone')
    table.text('qp')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
