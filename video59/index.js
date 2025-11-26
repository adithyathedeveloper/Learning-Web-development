console.log("welcome to faulty calculator");

function randomnum(params) {
    a=Math.random()
    return a;
}
console.log(randomnum());

console.log("for addition press a, for subtraction press s, for multiplication press m, for division press d, for exponent press e");
let b= prompt("enter your choice");
if (b=='a'){
    let c=Number(prompt("enter first number"));
    let f=Number(prompt("enter second number"));
    if (randomnum()<0.1){
        console.log(c-f);        
}
    else{
        console.log(c+f);
}
}
else if (b=='s'){
    let c=Number(prompt("enter first number"));
    let f=Number(prompt("enter second number"));
    if (randomnum()<0.1){
        console.log(c/f);        
}
    else{
        console.log(c-f);
}
}
else if (b=='m'){
    let c=Number(prompt("enter first number"));
    let f=Number(prompt("enter second number"));
    if (randomnum()<0.1){
        console.log(c+f);        
}
    else{
        console.log(c*f);
}
}
else if (b=='d'){
    let c=Number(prompt("enter first number"));
    let f=Number(prompt("enter second number"));
    if (randomnum()<0.1){
        console.log(c**f);        
}
    else{
        console.log(c/f);
}
}
else if(b=='e'){
    let c=Number(prompt("enter first number"));
    let f=Number(prompt("enter second number"));
    if (randomnum()<0.1){
        console.log(c*f);        
}
else{
    console.log(c**f);
}
}
else{
    console.log("invalid input");
}
