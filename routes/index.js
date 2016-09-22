"use strict"

var express = require('express');
var router = express.Router();
let DBModel = require("../models/db_model.js")
let Item = require("../models/item.js")
const sqlite = require('sqlite3').verbose();
let db = DBModel.connect(sqlite, "db/tokotap.db")

/* ==========================================================================
Homepage
========================================================================== */

router.get('/', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('home/home', {
      data: data
    })
  })
})

/* ==========================================================================
Manage Products Page
========================================================================== */

router.get('/manage', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('manage/manage', {
      data: data
    })
  })
})

router.get('/manage/:id', function(req, res, next) {
  Item.readById(db, req.params.id, function(data) {
    res.render('manage/update', {
      data: data
    })
  })
})

router.post('/update', function(req, res, next) {
  let obj = {
    id: req.body.id,
    category: req.body.category,
    brand: req.body.brand,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock
  }

  Item.updateById(db, obj, function(data) {
    res.redirect('/manage')
  })
})

router.post('/delete/:id', function(req, res, next) {
  Item.deleteById(db, req.params.id, function(data) {
    Item.read(db, function(data) {
      res.redirect('/manage')
    })
  })
})

/* ==========================================================================
Upload Products Page
========================================================================== */

router.get('/upload', function(req, res, next) {
  Item.read(db, function(data) {
    res.render('manage/upload', {
      data: data
    })
  })
})

router.post('/upload', function(req, res, next) {
  let obj = {
    category: req.body.category,
    brand: req.body.brand,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock
  }

  Item.create(db, obj, function(data) {
    res.redirect('/manage')
  })
})

/* ==========================================================================
On Hold
========================================================================== */

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
