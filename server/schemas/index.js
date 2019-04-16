import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'dev';

const { mysql } = config[env];
const db = {};

// Connect to SQL
const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: mysql.dialect,
  pool: { ...mysql.pool },
  operatorsAliases: mysql.operatorsAliases, // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// associations
fs.readdirSync(`${__dirname}/associations`)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(async file => {
    /* eslint-disable global-require */
    const re = require(`./associations/${file}`); // eslint-disable-line import/no-dynamic-require
    /* eslint-enable global-require */
    if (re && re.default) {
      re.default(db);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
