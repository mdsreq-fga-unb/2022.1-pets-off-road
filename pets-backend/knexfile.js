const path = require('path');

const migrationFolder = __dirname + '/src/repositories/migrations';

const dbSettings = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: '3306',
    database: 'PETS-OF-ROAD-DB',
    user: 'root',
    password: 'senhaprovisoria'
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
