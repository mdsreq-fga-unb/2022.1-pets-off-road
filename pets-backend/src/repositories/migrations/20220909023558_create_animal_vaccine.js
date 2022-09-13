/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.raw(`
        CREATE TABLE animal_vaccine (
            cod_vacina          INT NOT NULL,
            matricula_animal    INT NOT NULL,
            CONSTRAINT VACCINE_ANIMAL_PK PRIMARY KEY (cod_vacina, matricula_animal),
            CONSTRAINT VACCINE_ANIMAL_FK FOREIGN KEY (cod_vacina) REFERENCES vaccine (cod_vacina),
            CONSTRAINT ANIMAL_VACCINE_FK FOREIGN KEY (matricula_animal) REFERENCES animal (matricula) ON DELETE CASCADE)
            ENGINE InnoDB;
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.raw(`DROP TABLE animal_vaccine`)
};
