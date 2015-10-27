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
  	activeNav: 'blogs',
    blogs: [{
      title: '购买须知',
      createdAt: '2015-08-04'
    }, {
      title: '金鱼',
      createdAt: '2015-08-04'
    },{
      title: '草金鱼',
      createdAt: '2015-08-04'
    },{
      title: '观赏鱼小知识',
      createdAt: '2015-08-04'
    },{
      title: '水产良种场简介',
      createdAt: '2015-08-04'
    },]
  });
});

router.get('/blog/:id', function(req, res, next){
  res.render('blog', {
    activeNav: 'blogs',
    blog: {
      title: '文章标题',
      content: 'content',
      createdAt: '2015-10-09 14:20'
    }
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
