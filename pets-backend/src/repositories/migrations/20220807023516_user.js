/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('USUARIO', table => {
        table.integer('cpf').primary();
        table.string('nome', 255).notNullable();
        table.string('email', 100).notNullable();
        table.enum('uf', ['AP', 'AC', 'AM', 'RO', 'RR', 'PA','TO', 'MA', 'PE', 'AL', 'SE', 'PI', 'CE', 'BA', 'RN', 'PB', 'GO', 'MT', 'MS', 'DF', 'SP', 'RJ', 'ES', 'MG', 'PR', 'SC', 'RS']).notNullable();
        table.string('endereco', 255).notNullable();
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
