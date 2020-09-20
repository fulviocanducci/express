const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Sources', 'sa', '123456', {
  dialect: 'mssql',
  host: 'localhost',
  port: '1433',
  dialectOptions: {
    dialectOptions: {
      options: {
        useUTC: false,
        dateFirst: 1,
        validateBulkLoadParameters: false,
        encrypt: false,
      },
    },
  },
});
module.exports = sequelize;
