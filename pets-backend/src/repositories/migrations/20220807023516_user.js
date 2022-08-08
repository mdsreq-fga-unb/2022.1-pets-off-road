/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('USUARIO', table => {
        table.integer('cpf').primary();
        table.string('nome', 100).notNullable();
        table.string('email', 100);
        table.integer('telefone').notNullable();
        table.string('senha', 20).notNullable();
        table.boolean('nivelAcesso').defaultTo(false);
        table.string('criadoEm', 30).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('USUARIO');
};
