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

// Streams to Markups relationship
db.Streams.hasOne(db.Markups, { as: 'markups', foreignKey: 'streamId' });
db.Markups.belongsTo(db.Streams, { foreignKey: 'streamId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
