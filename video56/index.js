console.log("This is a conditional tutorial")

let age = 79;
let grace=2;
age += grace;
console.log(age);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);
console.log(age%grace);

if ((age+grace) < 18 && (age+grace) < 80) {
    console.log("You are legally not allowed to have sex");
}
else if ((age+grace) >= 80){
    console.log("You are too old to have sex");
}

else{
    console.log("You are allowed to have sex legally");
}

a=6
b=8
let c= a>b ?(a-b):(b-a);
console.log(c);