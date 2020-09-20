const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('Sources', 'sa', '123456', {
//   dialect: 'mssql',
//   host: 'localhost',
//   dialectOptions: {
//     dialectOptions: {
//       options: {
//         useUTC: false,
//         dateFirst: 1,
//         validateBulkLoadParameters: true,
//         encrypt: false,
//       },
//     },
//   },
// });

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './base/database.sqlite',
});

module.exports = sequelize;
