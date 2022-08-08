import knex from "knex";
export default knex({
    client: 'mysql2',
    connection: {
      host: 'db',
      port: 3306,
      database: 'PETS-OF-ROAD-DB',
      user: 'root',
      password: 'senhaprovisoria'
    }
});