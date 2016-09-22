"use strict"

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
      title: 'Express',
      data: data
    })
  })
})

module.exports = router;
