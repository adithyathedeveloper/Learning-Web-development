let arr = [1, 2, 3, 4, -5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        break;
    }
    else {
        sum += arr[i];
    }
}
console.log(sum);