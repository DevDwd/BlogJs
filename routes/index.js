var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET message  page. */
router.get('/msg', function(req, res, next) {
  res.render('index', { title: 'Message' });
});


/* Post message  page. */
router.post('/msg', function(req, res, next) {

  res.render('index', { title: 'Message' });
});

module.exports = router;
