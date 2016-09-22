"use strict"

class Item {
  static create(db, obj, callback) {
    db.run("INSERT INTO items (category, brand, name, price) VALUES ($category, $brand, $name, $price)", {
      $category: obj.category,
      $brand: obj.brand,
      $name: obj.name,
      $price: obj.price
    }, function(err, data) {
      console.log("New Item Added")
      callback()
    })
  }

  static read(db, callback) {
    db.all("SELECT * FROM items", function(err, data) {
      callback(data)
    })
  }

  // static updateById(db, obj) {
  //   db.run("UPDATE students SET firstname = $firstname, lastname = $lastname, cohort_id = $cohort_id WHERE student_id = $student_id;", {
  //     $firstname: obj.firstname,
  //     $lastname: obj.lastname,
  //     $cohort_id: obj.cohort_id,
  //     $student_id: obj.student_id
  //   }, function(err, data) {
  //     console.log("Success update student entry.")
  //   })
  // }
  //
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
