const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class People extends Model {}
People.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'People', freezeTableName: true }
);

module.exports = People;
