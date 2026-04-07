const mockData = require('../data/mockData');

const createController = (resourceName) => {
  const data = mockData[resourceName];

  return {
    getAll: (req, res) => {
      let filteredData = [...data];
      const queryParams = Object.keys(req.query);

      if (queryParams.length > 0) {
        filteredData = filteredData.filter(item => {
          return queryParams.every(key => {
            if (item[key] === undefined) return true;
            return String(item[key]).toLowerCase() === String(req.query[key]).toLowerCase();
          });
        });
      }

      res.json(filteredData);
    },

    getById: (req, res) => {
      const id = parseInt(req.params.id);
      const item = data.find(i => i.id === id);
      if (!item) return res.status(404).json({ error: 'Recurso no encontrado' });
      res.json(item);
    },

    create: (req, res) => {
      const newItem = {
        id: data.length > 0 ? Math.max(...data.map(i => i.id)) + 1 : 1,
        ...req.body
      };
      data.push(newItem);
      res.status(201).json(newItem);
    },

    update: (req, res) => {
      const id = parseInt(req.params.id);
      const index = data.findIndex(i => i.id === id);
      if (index === -1) return res.status(404).json({ error: 'Recurso no encontrado' });

      data[index] = { id, ...req.body };
      res.json(data[index]);
    },

    patch: (req, res) => {
      const id = parseInt(req.params.id);
      const index = data.findIndex(i => i.id === id);
      if (index === -1) return res.status(404).json({ error: 'Recurso no encontrado' });

      data[index] = { ...data[index], ...req.body };
      res.json(data[index]);
    },

    delete: (req, res) => {
      const id = parseInt(req.params.id);
      const index = data.findIndex(i => i.id === id);
      if (index === -1) return res.status(404).json({ error: 'Recurso no encontrado' });

      const deletedItem = data.splice(index, 1);
      res.json({ message: 'Recurso eliminado', item: deletedItem[0] });
    }
  };
};

module.exports = createController;
