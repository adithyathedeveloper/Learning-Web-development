let arr = [1, 2, 3, 4, "justfornamesake"];
        //    0  1  2  3  4  index 
let brr = ["o","m","g"];
let crr = ["Endammana","Jimmiki","kamal","endappan","katundupoye","endappana","brandy","kufi","endamma","kudichikitte"];
let thisbe =arr.concat(brr,crr);
console.log(thisbe);
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
arr[2] = 10;
console.log(arr);
let namo="John";
console.log(namo);
namo[0]="D"; // strings are immutable
console.log(namo);
console.log(arr.toString())
console.log(arr.join(" oh this is an and "))
console.log(arr.pop());
console.log(arr);
arr.push("justfornamesake enters again");
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("shift pop ka bhai aur unshift push ka bhai");
console.log(arr);
delete arr[3];
console.log(arr);
console.log(brr.sort());
crr.splice(0,5,"bhai","kuch","bhi","dal","detta","hun");
console.log(crr);
drr=crr.slice(0,5);
console.log(drr);
console.log(crr);

