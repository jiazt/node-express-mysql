var express = require('express');
var router = express.Router();

var userDao = require('../dao/manageDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('updateManage');
});


// 增加用户
//TODO 同时支持get,post

router.get('/queryAll', function(req, res, next) {
    console.log('查询所有marrage');
    userDao.queryAll(req, res, next);
});



module.exports = router;

