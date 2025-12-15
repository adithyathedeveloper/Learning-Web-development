let a= Number(prompt("Enter the number for which you need factorial!"))
let b=[];
for (let index = a; index >= 1; index=index-1) {
    // const element = b[index];
    b.push(index)
}
console.log(b)

const reducer=(a,b)=>{
    return a*b;
};
console.log(b.reduce(reducer));