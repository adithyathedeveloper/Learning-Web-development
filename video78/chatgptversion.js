function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blinkDots(selector, duration) {
    const el = document.querySelector(selector);
    const endTime = Date.now() + duration;

    while (Date.now() < endTime) {
        el.innerText = ".";
        await sleep(300);
        el.innerText = "..";
        await sleep(300);
        el.innerText = "...";
        await sleep(300);
        el.innerText = "";
        await sleep(300);
    }

    el.innerText = "";
}
async function showLine(textSelector, dotSelector, text, textDelay, totalDuration) {

    // start dots (do NOT await yet)
    const dotsPromise = blinkDots(dotSelector, totalDuration);

    // wait before showing text
    await sleep(textDelay);
    document.querySelector(textSelector).innerText = text;

    // wait until dots finish
    await dotsPromise;
}
async function start() {
    await showLine(".firstline",  ".spanone",  "Initializing Hacking", 1000, 2000);
    await showLine(".secondline", ".spantwo",  "Reading your Files",    2000, 3000);
    await showLine(".thirdline",  ".spanthree","Password Files Detected",3000, 2500);
    await showLine(".fourthline", ".spanfour", "Sending to server",   4000, 4000);
    await showLine(".fifthline",  ".spanfive", "Cleaning Up",      5000, 2000);
}

start();
