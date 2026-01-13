console.log("Woah wow, that's nice");
alert("It doesn't matter, just be grinding!!");
console.log("Yes, keep grinding!");

let prom1= new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("You are stuck here now because of this number" + a);
    }
    else{
    setTimeout(() => {
        console.log("Time is up dude!");
        resolve("Yes, It's resolved now, one");
    }, 3000);
}
});
let prom2= new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("You are stuck here second time now because of this number" + a);
    }
    else{
    setTimeout(() => {
        console.log("Time is up dude!");
        resolve("Yes, It's resolved now, two");
    }, 1000);
}
});
let prom3= new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("You are stuck here third time now because of this number" + a);
    }
    else{
    setTimeout(() => {
        console.log("Time is up dude!");
        resolve("Yes, It's resolved now, three");
    }, 1000);
}
});
let prom4= new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("You are stuck here fourth time now because of this number" + a);
    }
    else{
    setTimeout(() => {
        console.log("Time is up dude!");
        resolve("Yes, It's resolved now, four");
    }, 1000);
}
});

prom1.then((message) => {
    console.log("Message from promise 1: " + message);
}).catch((err)=> {
    console.log(err);
});


let p3 = Promise.all([prom1, prom2]);
p3.then((message) => {
    console.log(message);
}).catch((err)=> {
    console.log(err);
});
let p4 = Promise.allSettled([prom3, prom4]);
p4.then((message) => {
    console.log(message);
}).catch((err)=> {
    console.log(err);
});
let p5 = Promise.race([prom3, prom4]);
p5.then((message) => {
    console.log(message);
}).catch((err)=> {
    console.log(err);
});
