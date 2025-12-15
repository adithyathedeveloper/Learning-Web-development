let arr=[16,17,18,19,20];
let anarr=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    anarr.push(element**2);
}
console.log(anarr);

let anarr2=arr.map((element)=>{
    return element**2;
});
console.log(anarr2);

const iseven=(element)=>{
    if (element%2===0){
        return true;
    }
    return false;
}
console.log(arr.filter(iseven));

let arrr=[1,2,3,4,5,6];

const reducer=(a,b)=>{
    return a+b;
};
console.log(arrr.reduce(reducer));
cr=Array.from("Myname")
console.log(cr);