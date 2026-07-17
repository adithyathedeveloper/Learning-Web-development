import fs from 'fs/promises';

let a = await fs.readFile("output.txt", "utf-8")

let b = await fs.writeFile("output.txt","But this is still beatiful")
let c = await fs.appendFile("output.txt", "\n Oh shit, Hello world got removed")
console.log(a)
