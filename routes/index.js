var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: '沂水县水产良种场观赏鱼养殖基地',
  	activeNav: 'index'
   });
});

router.get('/blogs', function(req, res, next) {
  res.render('blogs', {
  	activeNav: 'blogs'
  });
});

module.exports = router;
