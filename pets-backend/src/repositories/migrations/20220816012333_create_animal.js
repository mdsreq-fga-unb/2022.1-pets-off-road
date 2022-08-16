/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.raw(`
        CREATE TABLE animal (
            matricula        INT                                        NOT NULL    AUTO_INCREMENT,
            cpf_dono         BIGINT,
            project_id       INT                                        NOT NULL,
            nome             VARCHAR(100)                               NOT NULL,
            especie          VARCHAR(50)                                NOT NULL,
            raca             VARCHAR(50),
            idade            ENUM('FILHOTE','JOVEM','ADULTO','IDOSO')   NOT NULL,
            condicao_saude   BOOLEAN                                    NOT NULL,
            castrado         BOOLEAN                                    NOT NULL,
            cirurgias        TEXT,
            criado_em        DATETIME                                   NOT NULL    DEFAULT   CURRENT_TIMESTAMP,
            modificado_em    DATETIME                                   NOT NULL    DEFAULT   CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            CONSTRAINT ANIMAL_PK PRIMARY KEY (matricula),
            CONSTRAINT PROJECT_ANIMAL_FK FOREIGN KEY(project_id) REFERENCES project(id),
            CONSTRAINT USER_ANIMAL_FK FOREIGN KEY(cpf_dono) REFERENCES user(cpf))
            ENGINE InnoDB;
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.raw(`DROP TABLE animal`)
};
