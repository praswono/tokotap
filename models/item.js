"use strict"

class Item {
  static create(db, obj, callback) {
    db.run("INSERT INTO items (category, brand, name, price, stock, image_url) VALUES ($category, $brand, $name, $price, $stock, $image_url)", {
      $category: obj.category,
      $brand: obj.brand,
      $name: obj.name,
      $price: obj.price,
      $stock: obj.stock,
      $image_url: "adidas-superstar.jpg"
    }, function(err, data) {
      callback()
    })
  }

  static read(db, callback) {
    db.all("SELECT * FROM items", function(err, data) {
      callback(data)
    })
  }

  static readById(db, id, callback) {
    db.all("SELECT * FROM items WHERE id=" + id, function(err, data) {
      callback(data)
    })
  }

  static updateById(db, obj, callback) {
    db.run("UPDATE items SET category = $category, brand = $brand, name = $name, price = $price, stock = $stock WHERE id = $id;", {
      $id: obj.id,
      $category: obj.category,
      $brand: obj.brand,
      $name: obj.name,
      $price: obj.price,
      $stock: obj.stock
    }, function(err, data) {
      callback()
    })
  }

  static deleteById(db, id, callback) {
    db.run("DELETE FROM items WHERE id = $id;", {
      $id: id
    }, function(err, data) {
      console.log("Success delete student entry.")
      callback(data)
    })
  }
}

// export default Item

module.exports = Item
