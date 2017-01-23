var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Express", variable: "the var", variable2: (8 * 2)});
});

module.exports = router;
