import Sequelize from 'sequelize';

const Streams = sequelize =>
  sequelize.define(
    'Streams',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      daiUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
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
        }
      },
      floorPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      domain: {
        type: Sequelize.STRING
      },
      csai: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      stitch: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      format: {
        type: Sequelize.ENUM,
        values: ['HLS', 'DASH']
      },
      type: {
        type: Sequelize.ENUM,
        values: ['VOD', 'LIVE', 'EVENT']
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      updateBy: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    },
    {
      freezeTableName: true,
      tableName: 'streams'
    }
  );

export default Streams;
