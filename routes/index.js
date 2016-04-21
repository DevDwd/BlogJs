var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET message  page. */
router.get('/msg', function(req, res, next) {
  res.render('message', { title: 'Message' });
});


/* Post message  page. */
router.post('/msg', function(req, res, next) {
	 console.log(req.body.title);
    console.log(req.body.description);
  res.render('message', { title: 'Message' });
});

module.exports = router;
