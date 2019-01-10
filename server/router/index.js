const router = require('express').Router();

const { exampleControllers } = require('../example/exampleControllers.js');

router.route('/example')
  .get(exampleControllers.get)
  .post(exampleControllers.post)
  .put(exampleControllers.put)
  .delete(exampleControllers.delete)

module.exports = {
  router
};