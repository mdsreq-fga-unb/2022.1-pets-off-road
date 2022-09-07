/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.raw(`
        CREATE TABLE vaccine (
            id_vacina       INT             NOT NULL,
            nome_vacina     VARCHAR(100)    NOT NULL,
            data_aplicacao  DATE            NOT NULL,
            dose_ml         DECIMAL,
            matricula_animal       INT             NOT NULL,
            CONSTRAINT VACCINE_PK PRIMARY KEY (id_vacina),
            CONSTRAINT VACCINE_ANIMAL_FK FOREIGN KEY(matricula_animal) REFERENCES animal (matricula))
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
