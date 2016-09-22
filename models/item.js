"use strict"

class Item {
  static create(db, obj) {
    db.run("INSERT INTO items (category, brand, name, price) VALUES ($category, $brand, $name, $price)", {
      $firstname: obj.category,
      $lastname: obj.brand,
      $cohort_id: obj.name,
      $price: obj.price
    }, function(err, data) {
      console.log("New Item Added")
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
  // static deleteById(db, student_id) {
  //   db.run("DELETE FROM students WHERE student_id = $student_id;", {
  //     $student_id: student_id
  //   }, function(err, data) {
  //     console.log("Success delete student entry.")
  //   })
  // }
}

// export default Item

module.exports = Item
