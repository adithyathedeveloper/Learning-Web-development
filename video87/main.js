const fs = require('fs');
console.log(fs)

console.log("Starting")
// fs.writeFileSync('output.txt', 'Hello World!')
fs.writeFile("output.txt", "Hello World!", () => {
    console.log("done writing successfully")
    fs.readFile("output.txt", "utf-8", (err, data) => {console.log(err, data)})
    fs.readFile("output.txt", (err, data) => {console.log(err, data.toString())})
});

fs.appendFile("output.txt", "  This world is fucked up, big time", (e,d) => {
    console.log(d)
})
console.log("File written successfully")
