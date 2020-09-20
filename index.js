const express = require('express');
const server = express();
const sql = require('mssql');

const people = require('./Models/People');

server.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

server.get('/save', async (req, res) => {
  await sql.connect('mssql://sa:123456@localhost/Sources');

  // const ps = new sql.PreparedStatement();
  // ps.input('name', sql.VarChar);
  // ps.prepare('INSERT INTO People(Name) VALUES (@name)', (err) => {
  //   ps.execute({ name: 'Hugo Leonardo Canducci Dias' }, (err, result) => {
  //     console.log(result);
  //   });
  // });

  const result = await sql.query`select * from People`;
  res.json(result.recordset);
});

server.listen(8989, () => {
  console.log('Server Up');
});
