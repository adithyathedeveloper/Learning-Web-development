let arr=[1,2,3,4,5,6,3,2,9,8];
let newarr=[];
console.log(arr);
for (let index = 0; index < arr.length; index++) {
    if(!newarr.includes(arr[index])){
        newarr.push(arr[index]);
    }
}
console.log(newarr);
for (let index = 0; index < newarr.length; index++) {
    newarr[index]=newarr[index]*2;
}
console.log(newarr);