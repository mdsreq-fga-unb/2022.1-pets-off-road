/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.raw(`
        CREATE TABLE vaccine (
            cod_vacina      INT             NOT NULL  auto_increment,
            nome_vacina     VARCHAR(100)    NOT NULL,
            CONSTRAINT VACCINE_PK PRIMARY KEY (cod_vacina),
            CONSTRAINT VACCINE_IK UNIQUE KEY (nome_vacina))
            ENGINE InnoDB;
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.raw(`DROP TABLE vaccine`)
};
