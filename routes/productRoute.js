var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController');

/* GET home page. */
// router.get('/', ProductController.list);
router.get('/', ProductController.list);


module.exports = router;