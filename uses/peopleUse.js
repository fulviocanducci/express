const peopleController = require('../controllers/peopleController');
module.exports = (server) => {
  server.get('/people', peopleController.get);
  server.get('/people/:id', peopleController.getKey);
  server.post('/people', peopleController.post);
  server.put('/people/:id', peopleController.put);
  server.delete('/people/:id', peopleController.delete);
};
