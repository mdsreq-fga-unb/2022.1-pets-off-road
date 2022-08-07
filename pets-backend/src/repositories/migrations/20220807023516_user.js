/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('USUARIO', table => {
        table.integer('cpf').primary();
        table.string('nome', 255).notNullable();
        table.string('email', 100).notNullable();
        table.string('uf', 2).notNullable();
        table.string('endereco', 255);
        table.integer('telefone').notNullable();
        table.string('senha').notNullable();
        table.boolean('nivel-acesso').defaultTo(false);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('USUARIO');
};
