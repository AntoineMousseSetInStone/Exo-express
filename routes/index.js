var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*router.get('/hello', function(req, res, next) {
  var courseTest = (req.query.course);
  let courseTitle = 'TEST - ' + courseTest;
  res.render('index', { title: 'Helloooo' });
});*/

module.exports = router;
