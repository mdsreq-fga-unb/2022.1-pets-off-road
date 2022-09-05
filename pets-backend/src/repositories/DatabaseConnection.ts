import knex from 'knex';
export default knex({
  client: 'mysql2',
  connection: {
    host: 'db',
    port: 3306,
    database: 'PETS_OF_ROAD_DB',
    user: 'root',
    password: '123456789',
  },
});
