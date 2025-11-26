let adj1="Crazy"
let adj2="Amazing";
let adj3="Fire"

let shna1="Engine"
let shna2="Foods"
let shna3="Garments"

let anwo1="Bros"
let anwo2="Limited"
let anwo3="Hub"

// Random number 1–3
function rand3() {
    return Math.floor(Math.random() * 3) + 1;
}

// Pick adjective
let a = rand3();
let adj;
if (a === 1) adj = adj1;
else if (a === 2) adj = adj2;
else adj = adj3;

// Pick shop name
let b = rand3();
let shna;
if (b === 1) shna = shna1;
else if (b === 2) shna = shna2;
else shna = shna3;

// Pick ending
let c = rand3();
let anwo;
if (c === 1) anwo = anwo1;
else if (c === 2) anwo = anwo2;
else anwo = anwo3;

console.log(adj + " " + shna + " " + anwo);
