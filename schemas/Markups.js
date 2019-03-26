import Sequelize from 'sequelize';

const Markups = (sequelize, DataTypes) =>
  sequelize.define(
    'Markups',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        noUpdate: true,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['frequency', 'slot', 'preRoll'],
        defaultValue: 'slot',
      },
      value: {
        type: Sequelize.STRING,
        get() {
          return (
            this.getDataValue('value') && JSON.parse(this.getDataValue('value'))
          );
        },
        set(val) {
          this.setDataValue('value', JSON.stringify(val || ''));
        },
      },
      createdBy: {
        type: Sequelize.INTEGER,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
      },
    },
    {
      underscored: false,
      freezeTableName: true,
      tableName: 'markups',
      paranoid: true,
      version: true,
      sequelize,
    }
  );

export default Markups;
