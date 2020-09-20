const indexController = require('../controllers/indexController');
module.exports = (server) => {
  server.get('/', indexController.get);
};
