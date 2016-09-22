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

module.exports = router;
