const tokcontent = document.getElementById("tokenContent");

function setAuthToken(token, minutes) {
    const now = new Date();

    const item = {
        value: token,
        expiry: now.getTime() + minutes * 60 * 1000
    };

    localStorage.setItem("token", JSON.stringify(item));
}

function getAuthToken() {
    const itemStr = localStorage.getItem("token");

    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem("token");
        return null;
    }

    return item.value;
}

let token = getAuthToken();

if (token) {
    tokcontent.textContent = token;
}

document.querySelector("button").addEventListener("click", () => {
    let token = prompt("Enter your token:");

    if (token) {
        setAuthToken(token, 1); // expires in 1 minute
        tokcontent.textContent = token;
    }
});