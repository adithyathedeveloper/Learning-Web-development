let boxes = document.getElementsByClassName("box")

for (let i = 0; i < boxes.length; i++) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    boxes[i].style.color = `rgb(${r}, ${g}, ${b})`
}
for (let i = 0; i < boxes.length; i++) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    boxes[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
