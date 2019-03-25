import Sequelize from 'sequelize';

const Streams = (sequelize, DataTypes) =>
  sequelize.define(
    'Streams',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      partner: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      daiUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tags: {
        type: Sequelize.STRING,
        get() {
          return (
            this.getDataValue('tags') && this.getDataValue('tags').split(';|;')
          );
        },
        set(val) {
          this.setDataValue('tags', val.join(';|;'));
        },
      },
      floorPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      domain: {
        type: Sequelize.STRING,
      },
      stitch: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      format: {
        type: Sequelize.ENUM,
        values: ['HLS', 'DASH'],
      },
      type: {
        type: Sequelize.ENUM,
        values: ['VOD', 'LIVE', 'EVENT'],
      },
      createdBy: {
        type: Sequelize.INTEGER,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      underscored: false,
      freezeTableName: true,
      tableName: 'streams',
      paranoid: true,
    }
  );

export default Streams;
