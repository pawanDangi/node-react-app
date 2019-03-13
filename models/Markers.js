import Sequelize from 'sequelize';

const Markers = sequelize =>
  sequelize.define(
    'Markers',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['frequencyBased', 'slotBased', 'preRollBased'],
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      underscored: false,
      freezeTableName: true,
      tableName: 'markers',
      paranoid: true,
    }
  );

export default Markers;
