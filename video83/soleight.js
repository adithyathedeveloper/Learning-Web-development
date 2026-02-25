let array=[1,2,3,4,5]
ohname(array)
async function ohname(ar) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < ar.length; i++) {
            ar[i]=2*ar[i];
        }
        setTimeout(() => {
            resolve(ar);
        },500)

})};
console.log(ohname(array))