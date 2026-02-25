let tpcofee = prompt("Enter the type of Coffee:")
const processing = document.getElementById("processing")
const processed = document.getElementById("processed")


function brewCoffee(x) {
    return new Promise((resolve) => {
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;

    setTimeout(() => {
            resolve("Coffee " + x + "  under processing");
        }, randomDelay);
    });
}
async function theop(y) {
    const content= await brewCoffee(y);

    processing.textContent = content;
    processed.textContent ="Your coffee  " + tpcofee + "  is ready"
}
theop(tpcofee)