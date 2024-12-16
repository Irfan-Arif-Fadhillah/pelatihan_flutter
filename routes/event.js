var express = require('express');
var router = express.Router();
var controller = require('../src/controllers/event.controllers')
/* GET home page. */
router.get('/', controller.show);
router.post('/', controller.insert)
router.patch('/:id', controller.update)


module.exports = router;
