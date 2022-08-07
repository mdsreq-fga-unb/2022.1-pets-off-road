import knex from "knex";
export default knex({
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      database: 'PETS-OF-ROAD-DB',
      user: 'root',
      password: 'senhaprovisoria'
    }
});