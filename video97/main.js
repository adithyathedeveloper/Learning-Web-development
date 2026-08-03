import express from 'express';
import mongoose from 'mongoose';
import {company} from './models/company.js';
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
mongoose.connect('mongodb://127.0.0.1:27017/company');

// mongoose.connect('mongodb://127.0.0.1:27017/');


const app = express();
const port = 3000;
app.get('/', (req, res) => {
  // const company = new company({
  //   // name: "John Doe",
  //   // salary: 50000,
  //   // language: "JavaScript",
  //   // city: "New York",
  //   // isManager: false
  // });
  // company.save();
  res.sendFile(__dirname + '/index.html');
});

app.get('/generate', async (req, res) => {
    await company.deleteMany({})
    for (let i = 0; i < 10; i++) {
    let employee = generateRandomEmployee();
    console.log(employee);
    const emp = new company(employee);
await emp.save();
}
res.send('10 random employees generated and saved to the database.');

    // res.json({ title: company.name, salary: company.salary, language: company.language, city: company.city, isManager: company.isManager });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
function generateRandomEmployee() {
let name1="Ramesh"
let name2="Rajesh";
let name3="Rakesh"

let salary1=45000000
let salary2=50000000
let salary3=55000000

let language1="python"
let language2="javascript"
let language3="java"

let city1="Mumbai"
let city2="New York"
let city3="Los Angeles"

// Random number 1–4
function rand4() {
    return Math.floor(Math.random() * 4) + 1;
}

// Pick adjective
let a = rand4();
let adj;
if (a === 1) adj = name1;
else if (a === 2) adj = name2;
else adj = name3;

// Pick shop name
let b = rand4();
let shna;
if (b === 1) shna = salary1;
else if (b === 2) shna = salary2;
else shna = salary3;

// Pick ending
let c = rand4();
let anwo;
if (c === 1) anwo = language1;
else if (c === 2) anwo = language2;
else anwo = language3;

let d = rand4();
let city;
if (d === 1) city = city1;
else if (d === 2) city = city2;
else city = city3;

console.log(adj + " " + shna + " " + anwo + " " + city);

return {
        name: adj,
        salary: shna,
        language: anwo,
        city: city,
        isManager: Math.random() < 0.5
    };
}
// console.log(generateRandomEmployee());
// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 