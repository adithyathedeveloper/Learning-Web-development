let s=[1,32, 23,2,3,5];

for (let index = 0; index < s.length; index++) {
    const element = s[index];
    console.log(element);
}
        //   (value, index, array)
s.forEach((element, ind, arr) => {
    console.log(element, ind, arr);
});

let subject={
    name:"John",
    subject1:"Maths",
    subject2:"Science",
    subject3:"Social Studies",
    subject4:"Languages"
}
for (const key in subject) {
    if (!Object.hasOwn(subject, key)) continue;
    
    const element = subject[key];
    console.log(key, element);
    
    
}
for (const iterator of s) {
    console.log(iterator );
}
