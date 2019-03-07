const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Streams = sequelize.define('Streams', {
    stream_id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    stream_url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    domain_bundle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    stream_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    stream_format: {
      type: Sequelize.STRING,
      allowNull: false
    },
    floor_price: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    stream_type: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'stream_registration'
  })
  return Streams;
}