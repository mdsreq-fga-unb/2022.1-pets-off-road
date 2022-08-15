/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.raw(`
        CREATE TABLE project (
            id               INT                    NOT NULL    AUTO_INCREMENT,
            cpf              BIGINT                 NOT NULL,
            nome             VARCHAR(100)           NOT NULL,
            email            VARCHAR(50)            NOT NULL,
            telefone         BIGINT                 NOT NULL,
            uf               ENUM('MG', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO')      NOT NULL,
            cidade           VARCHAR(50)            NOT NULL,
            senha            VARCHAR(250)           NOT NULL,
            criado_em        DATETIME               NOT NULL    DEFAULT   CURRENT_TIMESTAMP,
            modificado_em    DATETIME               NOT NULL    DEFAULT   CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            CONSTRAINT PROJECT_PK PRIMARY KEY (id),
            CONSTRAINT USER_PROJECT_FK FOREIGN KEY(cpf) REFERENCES user(cpf))
            ENGINE InnoDB;
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.raw(`DROP TABLE project`)
};
