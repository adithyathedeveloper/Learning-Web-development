let somstring = prompt("Enter a string:");
let array = somstring.split("")
let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
let count=0
for (i = 0; i < array.length; i++) {
    if (vowel.includes(array[i])) {
        count++
    }
    else {
        continue
    }
}
console.log(count)