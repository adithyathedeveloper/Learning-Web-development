console.log("Just checking")

let accessing = document.getElementsByClassName("box")
let stuffs=[]
    for (let index = 0; index < accessing.length; index++) {
        const element = accessing[index];
        stuffs.push(element)
    }
for (let index = 0; index < stuffs.length; index++) {
    const element = stuffs[index];
    let r= Math.floor(Math.random()*256)
    let g= Math.floor(Math.random()*256)
    let b= Math.floor(Math.random()*256)
    element.style.color=`rgb(${r},${g},${b})`}
for (let index = 0; index < stuffs.length; index++) {
    const element = stuffs[index];
    let r= Math.floor(Math.random()*256)
    let g= Math.floor(Math.random()*256)
    let b= Math.floor(Math.random()*256)
    element.style.backgroundColor=`rgb(${r},${g},${b})`}
console.log(stuffs)
// stuffs.style.color ="blue"
