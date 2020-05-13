const ormconfig = {
  "name": "default",
  "type": "postgres",
  "host": "127.0.0.1",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "database_test",
  "entityPrefix": "proj_",
  "synchronize": true,
  "logging": false,
  "entities": ["**/*.entity.js"],
  "migrations": ["dist/database/migrations/*.js,dist/database/seeders/*.js"],
  "migrationsTableName": "database_migrations",
  "subscribers": [
    "dist/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "dist/**/entities",
    "migrationsDir": "dist/database/migrations",
    "subscribersDir": "dist/database/subscribers"
  }
}

module.exports = ormconfig;
