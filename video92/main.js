const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = 'My Website';
    let searchText = 'Search Now';
    let arr = [1, 2, 3, 4, 5];
    res.render('index', { name: siteName, text: searchText, arr: arr });
});
app.get('/blog/:slug', (req, res) => {
    let blogtitle = 'One8 why and when?';
    let blogContent = 'It is a brand owned by Virat Kohli';
    res.render('blogpost', { title: blogtitle, content: blogContent });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 