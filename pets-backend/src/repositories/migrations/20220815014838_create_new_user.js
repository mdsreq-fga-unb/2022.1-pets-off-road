/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.raw(`
    CREATE TABLE usuario (
        cpf              BIGINT       NOT NULL,
        nome             VARCHAR(100) NOT NULL,
        email            VARCHAR(50)  NOT NULL,
        telefone         BIGINT       NOT NULL,
        senha            TEXT         NOT NULL,
        nivel_acesso     BOOLEAN      NOT NULL  DEFAULT   FALSE,
        criado_em        DATETIME     NOT NULL  DEFAULT   CURRENT_TIMESTAMP,
        modificado_em    DATETIME     NOT NULL  DEFAULT   CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT USUARIO_PK PRIMARY KEY (cpf))
        ENGINE InnoDB;
  `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.raw(`DROP TABLE usuario`)
};
