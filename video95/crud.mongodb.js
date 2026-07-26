use("CrudDB")
db.createCollection("students")

// db.students.insertOne({
//     name: "John Doe",
//     age: 20,
//     grade: "A"
// })
// db.students.insertMany([
//     { name: "Jane Smith", age: 22, grade: "B" },
//     { name: "Mike Johnson", age: 19, grade: "C" },
//     { name: "Emily Davis", age: 21, grade: "A" },
//     { name: "Sarah Wilson", age: 20, grade: "B" },
//     { name: "David Brown", age: 23, grade: "C" },
//     { name: "Laura Miller", age: 22, grade: "A" },
//     { name: "James Anderson", age: 21, grade: "B" },
//     { name: "Olivia Thomas", age: 20, grade: "C" },
//     { name: "William Jackson", age: 19, grade: "A" },
//     { name: "Sophia White", age: 22, grade: "B" }
// ])

let a = db.students.find({age:20})
// console.log(a.count())
let b = db.students.findOne({age:20})
// console.log(b)

// db.students.updateOne({ grade: "C" }, { $set: { grade: "B" } })
// db.students.updateMany({ grade: "C" }, { $set: { grade: "B" } })
// db.students.updateMany({ grade: "B" }, { $set: { grade: "A" } })
// db.students.updateMany({ grade: "A" }, { $set: { grade: "O" } })


db.students.deleteOne({ grade: "O" })
db.students.deleteMany({ age: 20 }) 