const path = require('path');

const migrationFolder = __dirname + '/src/repositories/migrations';

const dbSettings = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: '3306',
    database: 'PETS_OF_ROAD_DB',
    user: 'root',
    password: '123456789'
  },
  migrations: {
    directory: migrationFolder
  },
  seeds: {
    directory: path.join(migrationFolder, 'seeds')
  },
  debug: false
};

module.exports = {
  development: {...dbSettings},
  staging: {...dbSettings},
  production: {...dbSettings},
  test: {...dbSettings, client: 'mysql2', connection: ':memory:'}
};
