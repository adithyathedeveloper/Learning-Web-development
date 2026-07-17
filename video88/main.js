const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World! This is a simple Express server.');
});
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});
app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});
app.get('/blog', (req, res) => {
  res.send('This is the blog page.');
});
app.get('/blog/intro-to-nodejs', (req, res) => {
  res.send('This is the intro to Node.js blog post.');
});
app.get('/blog/:slug', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { slug } = req.params;
  res.send(`This is the ${slug} blog post.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});