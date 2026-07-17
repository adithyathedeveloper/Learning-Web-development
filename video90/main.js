const express = require('express');
const app = express();
const port = 3000;
const blog = require('./routes/blog');
const fs=require("fs")


// app.use(express.static('public'));


// ...

app.use('/blog', blog);

app.use((req, res, next) => {
  console.log(req.headers);
  req.middlewares = "We are in middleware";
  fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  // res.send("Hacked by middleware starting with m1");
  next();
});
app.use((req, res, next) => {
  console.log('m2');
  req.middlewares += " We are in middleware 2";
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('About section.  '+ req.middlewares);
});
app.get('/contact', (req, res) => {
  res.send('Contact Section');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});