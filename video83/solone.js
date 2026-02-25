// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Harry", "Hermione", "Ron", "Luna", "Draco Malfoy", "Cedric Diggory", "Albus Dumbledore"];

let houses = []

for (const i of students) {
    if(i.length < 6){
        houses.push(i+" "+"Griffindor")
    }
    else if(i.length < 8){
        houses.push(i+" "+"Hufflepuff")
    }
    else if(i.length < 12){
        houses.push(i+" "+"Ravenclaw")
    }
    else{
        houses.push(i+" "+"Slytherin")
    }
}
console.log(houses);