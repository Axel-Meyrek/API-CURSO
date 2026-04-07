const express = require('express');
const createController = require('../controllers/genericController');

const resources = ['artists', 'albums', 'songs', 'playlists', 'genres'];
const router = express.Router();

resources.forEach(resource => {
  const controller = createController(resource);
  
  router.get(`/${resource}`, controller.getAll);
  router.get(`/${resource}/:id`, controller.getById);
  router.post(`/${resource}`, controller.create);
  router.put(`/${resource}/:id`, controller.update);
  router.patch(`/${resource}/:id`, controller.patch);
  router.delete(`/${resource}/:id`, controller.delete);
});

module.exports = router;
