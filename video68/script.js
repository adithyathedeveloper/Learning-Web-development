console.log("Rachael")

let boxes= document.getElementsByClassName("box")

console.log(boxes)

boxes[2].style.backgroundColor ="skyblue"

let boxos= document.getElementById("thisisid")
console.log(boxos)
boxos.style.backgroundColor= "gold"

document.getElementById("thisisalsoid").style.backgroundColor = "silver"

console.log(document.getElementById("thisisalsoid"))

document.querySelector(".box").style.backgroundColor ="forestgreen"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "gold"
})

console.log(document.getElementsByTagName("div")) 

let e = document.getElementsByTagName("div")
console.log(e[4].matches("#thisisid"))
console.log(e[3].matches("#thisisid"))
console.log(e[3].closest(".container"))

console.log(document.querySelector(".box").contains(e[0]))
console.log(document.querySelector(".container").contains(e[2]))