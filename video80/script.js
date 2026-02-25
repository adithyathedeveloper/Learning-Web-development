let obj = {
    name: "John",
    age: 30
}

console.log( obj );

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
};

rabbit.__proto__ = animal;

class Homosapien {
    constructor(sex){
        this.gender = sex;
        console.log("Homosapien created");
    }
    eats(){
        console.log("Homosapien eats");
    }
    jumps(){
        console.log("Homosapien jumps");
    }
}
class Mikasa extends Homosapien {
    constructor(her){
        super(her)
        console.log("Mikasa created");
    }
    jumps(){
        super.jumps();
        console.log("Mikasa jumps using gravitational maneuvering equipment");
    }
}

let human = new Homosapien("male");
console.log(human);

let aotcharacter = new Mikasa("female");
console.log(aotcharacter);


