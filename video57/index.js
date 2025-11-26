console.log("Tutorial on Looping")
let a=1
console.log(a)
console.log(a+1)
console.log(a+2)
console.log(a+3)
console.log(a+4)

for(let i=0; i<100; i++){
    console.log(a+i)
}

let friends = {
    "Mathew Perry": "Chandler Bing",
    "Jennifer Aniston": "Rachel Green",
    "Courteney Cox": "Monica Geller",
    "Lisa Kudrow": "Phoebe Buffay",
    "David Schwimmer": "Ross Geller",
    "Matt LeBlanc": "Joey Tribbiani"
}

for (const key in friends) {
    const element = friends[key];
    console.log("Actor is "+ key + " and character is "+ friends[key])
    console.log(element)
}

let Joey_Tribbiani="Ken Adams"

for (const i of Joey_Tribbiani) {
    console.log(i)
    
}

let j=6
while(j<26
){
    console.log(j)
    j++
}
console.log("Space")

do {
    console.log(j)
    j++;
} while (j<5);
