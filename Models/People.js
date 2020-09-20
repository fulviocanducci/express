const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class People extends Model {}
People.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'people', freezeTableName: true, timestamps: false }
);

module.exports = People;
