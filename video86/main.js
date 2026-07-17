// const { createServer } = require('node:http');
// const fs = require("fs")
// import http from "http";


// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// import {a,b,c,d,e} from "./mymodule.js";
// import {b} from "./mymodule.js";
// import {c} from "./mymodule.js";
// import {d} from "./mymodule.js";
// import {e} from "./mymodule.js";

//  console.log(`here is the imported value of a: ${a}`);
//  console.log(`here is the imported value of b: ${b}`);
//  console.log(`here is the imported value of c: ${c}`);
//  console.log(`here is the imported value of d: ${d}`);
//  console.log(`here is the imported value of e: ${e}`);

// import obj from "./mymodule.js";
// console.log(`here is the imported value of obj: ${obj.x}, ${obj.y}`);
// console.log(obj)

// import iii from "./mymodule.js";
// console.log(`here is the imported value of iii: ${iii.x}, ${iii.y}`);
// console.log(iii)

const a = require("./mymodule2.js");
// console.log(`here is the imported value of a: ${a.name}, ${a.age}, ${a.address}`);
console.log(a, __dirname, __filename)