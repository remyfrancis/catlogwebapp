var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/summary', function(req, res, next) {
  res.render('views/template/ngCart/cart', { title: 'Express' });
});

module.exports = router;
