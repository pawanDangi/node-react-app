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
      },
      type: {
        type: Sequelize.ENUM,
        values: ['frequency', 'slot', 'preRoll'],
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          console.log(this.getDataValue('value'), 'hello');
          return (
            this.getDataValue('value') && JSON.parse(this.getDataValue('value'))
          );
        },
        set(val) {
          this.setDataValue('value', JSON.stringify(val));
        },
      },
    },
    {
      underscored: false,
      freezeTableName: true,
      tableName: 'markups',
      paranoid: true,
    }
  );

export default Markups;
