var express = require('express');
var router = express.Router();
var auth   = require('../modules/auth.js');

var blogs = [{
      id: 1,
      title: '购买须知',
      createdAt: '2015-08-04'
    }, {
      id: 2,
      title: '金鱼',
      createdAt: '2015-08-04'
    },{
      id: 3,
      title: '草金鱼',
      createdAt: '2015-08-04'
    },{
      id: 4,
      title: '观赏鱼小知识',
      createdAt: '2015-08-04'
    },{
      id: 5,
      title: '水产良种场简介',
      createdAt: '2015-08-04'
    }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: '沂水县水产良种场观赏鱼养殖基地',
  	activeNav: 'index'
   });
});

router.get('/blogs', function(req, res, next) {
  res.render('blogs', {
  	activeNav: 'blogs',
    blogs: blogs
  });
});

router.get('/blogs/:id', function(req, res, next){
  var id = req.params.id;

  res.render('blog', {
    blog: blogs[id-1]
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
