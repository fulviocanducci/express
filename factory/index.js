const indexUse = require('../uses/indexUse');
const peopleUse = require('../uses/peopleUse');
module.exports = (server) => {
  indexUse(server);
  peopleUse(server);
};
