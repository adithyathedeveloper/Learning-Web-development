let adj1="Crazy"
let adj2="Amazing";
let adj3="Fire"

let shna1="Engine"
let shna2="Foods"
let shna3="Garments"

let anwo1="Bros"
let anwo2="Limited"
let anwo3="Hub"

let thisis= Math.random();
console.log(thisis)

if (thisis < 0.8){
    console.log(adj1 + " " + shna1 + " " + anwo1)
}
else if (thisis < 0.6){
    console.log(adj2 + " " + shna2 + " " + anwo2)
}
else if (thisis < 0.4){
    console.log(adj3 + " " + shna3 + " " + anwo3)
}
else if (thisis < 0.2){
    console.log(adj1 + " " + shna1 + " " + anwo2)
}
else if (thisis < 0.1){
    console.log(adj1 + " " + shna1 + " " + anwo3)
}
else if (thisis > 0.8){
    console.log(adj1 + " " + shna3 + " " + anwo1)
}
else if (thisis > 0.6){
    console.log(adj2 + " " + shna1 + " " + anwo1)
}
else if (thisis > 0.4){
    console.log(adj2 + " " + shna1 + " " + anwo2)
}
else if (thisis > 0.2){
    console.log(adj2 + " " + shna1 + " " + anwo3)
}
else if (thisis > 0.1){
    console.log(adj2 + " " + shna2 + " " + anwo1)
}
else if (thisis > 0.9){
    console.log(adj1 + " " + shna2 + " " + anwo1)
}




