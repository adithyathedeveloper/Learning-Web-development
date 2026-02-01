async function firstline() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 1000);

})
}

async function secondline() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        }, 2000);

})
}

async function thirdline() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(300);
        }, 3000);
})
}

async function fourthline() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(400);
        }, 4000);

})
}

async function fifthline() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500);
        }, 5000);

})
}

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// async function blinkDots(selector, duration = 2000) {
//     const span = document.querySelector(selector);
//     const endTime = Date.now() + duration;

//     while (Date.now() < endTime) {
//         span.innerText = ".";
//         await sleep(300);
//         span.innerText = "..";
//         await sleep(300);
//         span.innerText = "...";
//         await sleep(300);
//         span.innerText = "";
//         await sleep(300);
//     }
// }


async function main(){
    console.log("Hacking started");
    let data = await firstline();
    document.querySelector(".firstline").innerText = "Initializing Hacking";
    let data2 = await secondline();
    document.querySelector(".secondline").innerText = "Reading your Files";
    let data3 = await thirdline();
    document.querySelector(".thirdline").innerText = "Password files Detected";
    let data4 = await fourthline();
    document.querySelector(".fourthline").innerText = "Sending all passwords and personal files to server";
    let data5 = await fifthline();
    document.querySelector(".fifthline").innerText = "Cleaning up";

}

main();



