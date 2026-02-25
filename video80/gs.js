class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }   
}
let person = new User("John");
console.log(person.name); 

person.name= "Ada"
console.log(person); 