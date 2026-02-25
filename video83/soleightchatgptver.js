function asyncMap(arr) {
    return arr.map(num => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    });
}

let array = [1, 2, 3, 4, 5];
let result = asyncMap(array);
console.log(result);

async function run() {
    let values = await Promise.all(result);
    console.log(values);
}

run();
