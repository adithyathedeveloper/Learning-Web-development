
const button = document.getElementById("orderbutton");
const statusText = document.getElementById("status");

// Asynchronous function
function placeOrder() {
    return new Promise((resolve) => {
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;
        // 1–4 seconds

        setTimeout(() => {
            resolve("✅ Order Confirmed!");
        }, randomDelay);
    });
}

// Event listener
button.addEventListener("click", async () => {
    statusText.textContent = "⏳ Placing your order...";

    const message = await placeOrder();

    button.textContent = message;
    statusText.textContent = "Success! Your order has been placed.";
});

console.log("Shop is ready. Click the button to place your order.");