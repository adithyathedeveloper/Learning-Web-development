const express = require('express');
const app = express();
const blog = require('./routes/blog');
const shop = require('./routes/shop');
const port = 3000;

// app.use(express.static('public'));


// ...

app.use('/blog', blog);
app.use('/shop', shop);

app.get('/', (req, res) => {
    console.log('GET request received');
  res.send('Hello World!');
});
app.get('/mypage', (req, res) => {
    console.log('GET request received, it is mypage');
  res.sendFile('templates/mypage.html', { root: __dirname });
});
app.get('/api', (req, res) => {
  res.json({a: 1, b: 2, c: 3, d: 4, e: 5, name: ["harry", "sally", "john"]});
});
app.post('/', (req, res) => {
    console.log('POST request received');
  res.send('This is post request');
});
// app.put('/index.html', (req, res) => {
//     console.log('PUT request received');
//   res.send('This is put request');
// });
// app.delete('/index.html', (req, res) => {
//     console.log('DELETE request received');
//   res.send('This is delete request');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  
});