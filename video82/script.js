async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45);
        }, 3000);
    });
}

function sum(a,b,c){    
    return a+b+c;
}

(async function main(){
let a = await sleep(); 
console.log(a);
let b = await sleep();
console.log(b);
})();
 
(async function notmain(){
let [x,y,...rest] = [1,5,7,8,9,0]
console.log(x,y,rest);
})();

(async function anothernotmain(){
    console.log(a1)
    let obj = {
        name: "John",
        age: 30,
        city: "New York"
    };

    let{name,age}= obj;
    console.log(name,age);

    let arr = [10,20,30];
console.log(arr[0]+ arr[1]+ arr[2]);
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))
var a1=6
})() 


