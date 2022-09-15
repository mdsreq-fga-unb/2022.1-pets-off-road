/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.raw(`
        CREATE TABLE user_project (
            cpf_user    BIGINT NOT NULL,
            id_project  INT NOT NULL,
            CONSTRAINT USER_PROJECT_UNIQUE_PK PRIMARY KEY (cpf_user, id_project),
            CONSTRAINT USER_PROJECT_UNIQUE_FK FOREIGN KEY (cpf_user) REFERENCES user (cpf),
            CONSTRAINT PROJECT_USER_UNIQUE_FK FOREIGN KEY (id_project) REFERENCES project (id) ON DELETE CASCADE)
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
