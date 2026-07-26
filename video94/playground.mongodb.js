/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
  {
    "name": "Java",
    "price": "20000",
    "instructor": "Harry"
  },
  {
    "name": "Python",
    "price": "18000",
    "instructor": "Angela"
  },
  {
    "name": "JavaScript",
    "price": "15000",
    "instructor": "John"
  },
  {
    "name": "C++",
    "price": "22000",
    "instructor": "Bjarne"
  },
  {
    "name": "React",
    "price": "17000",
    "instructor": "Max"
  },
  {
    "name": "Node.js",
    "price": "19000",
    "instructor": "Andrew"
  },
  {
    "name": "MongoDB",
    "price": "16000",
    "instructor": "Mosh"
  },
  {
    "name": "Data Structures",
    "price": "25000",
    "instructor": "Abdul"
  },
  {
    "name": "Machine Learning",
    "price": "35000",
    "instructor": "Sebastian"
  },
  {
    "name": "Cloud Computing",
    "price": "30000",
    "instructor": "Neha"
  }
]);


console.log(`Done inserting documents into the Courses collection.`);

