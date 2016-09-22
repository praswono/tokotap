"use strict"

class Item {
  // static create(db, obj) {
  //   db.run("INSERT INTO students (firstname, lastname, cohort_id) VALUES ($firstname, $lastname, $cohort_id)", {
  //     $firstname: obj.firstname,
  //     $lastname: obj.lastname,
  //     $cohort_id: obj.cohort_id
  //   }, function(err, data) {
  //     console.log("Success create new student entry.")
  //   })
  // }

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
