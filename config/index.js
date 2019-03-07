module.exports = {
  dev: {
    mysql: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'pg_monetize_local',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      operatorsAliases: false
    }
  },
  prod: {
    mysql: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'pg_monetize_local',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      operatorsAliases: false
    }
  }
}