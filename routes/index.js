var express = require('express');
var router = express.Router();
var auth   = require('../modules/auth.js');

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

router.get('/login', function(req, res, next){
    res.render('login');
});

router.post('/login', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;

    res.redirect('/admin');
});


//, auth.requiredAuthentication
router.get('/admin', function(req, res, next){
    res.render('admin');
});

module.exports = router;
