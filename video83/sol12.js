const button = document.getElementById("detailsButton")
const tokcontent = document.getElementById("tokenContent")

function setAuthToken(token) {
    localStorage.setItem("token", token);
}

let token = localStorage.getItem("token");
if (token) {
    tokcontent.textContent = token;  
}

document.querySelector("button").addEventListener("click", () => {
    let token = prompt("Enter your token:");

    if (token) {   // prevents null or empty values
        setAuthToken(token);
        tokcontent.textContent = token;
    }
});