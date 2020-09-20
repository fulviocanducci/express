const people = require('../models/People');

module.exports = {
  get: async (req, res) => {
    res.json(await people.findAll());
  },
  getKey: async (req, res) => {
    const id = req.params.id;
    if (id) {
      const pe = await people.findByPk(id);
      if (pe !== null) {
        res.json(pe);
      } else {
        res.status(404).json({ status: 'nofound' });
      }
    } else {
      res.status(404).json({ status: 'nofound' });
    }
  },
  post: async (req, res) => {
    const { name } = req.body;
    if (name.length > 0) {
      const result = await people.create({ name });
      res.status(201).json(result);
    } else {
      res.status(404).json({ status: 'nofound' });
    }
  },
  put: async (req, res) => {
    const { id, name } = req.body;
    if (id != null && name.length > 0) {
      const result = await people.update({ name }, { id: parseInt(id) });
      res.status(200).json(result);
    } else {
      res.status(404).json({ status: 'nofound' });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    if (id != null) {
      const result = await people.destroy({ where: { id: parseInt(id) } });
      res.status(200).json(result == 1 ? { status: 'delete' } : { status: 'nofound' });
    } else {
      res.status(404).json({ status: 'nofound' });
    }
  },
};
