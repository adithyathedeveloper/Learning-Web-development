const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const files =fs.readdirSync("./Files");

files.forEach(file => {
    const extension = path.extname(file).slice(1);

    if(!fs.existsSync(`./Files/${extension}`)){
        fs.mkdirSync(`./Files/${extension}`);
    }

    fs.renameSync(
`./Files/${file}`,
`./Files/${extension}/${file}`
    )

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
});