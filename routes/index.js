var express = require('express');
var router = express.Router();
let DBModel = require("../models/db_model.js")
let Item = require("../models/item.js")
const sqlite = require('sqlite3').verbose();
let db = DBModel.connect(sqlite, "db/tokotap.db")

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('index', {
      title: 'Tokotap',
      data: data
    })
  })
})


router.post('/', function(req, res, next) {
  Item.create(db, {
    category: req.body.category,
    brand: req.body.brand,
    name: req.body.name,
    price: req.body.price
  }, function(){
    res.redirect('/')
  })
})

router.get('/details', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('details', {
      title: `${data[i].name} Details`,
      data: data
    })
  })
})

router.get('/purchase', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('purchase', {
      title: `You are goint to purchase ${data[i].name}`,
      data: data
    })
  })
})

router.get('/confirm', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('confirm', {
      title: `Please confirm your payments`,
      data: data
    })
  })
})

router.get('/thanks', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('thanks', {
      title: `Thank you for your purchase`,
      data: data
    })
  })
})

module.exports = router;
