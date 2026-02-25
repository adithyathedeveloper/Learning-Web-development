const button = document.getElementById("scrollBtn")

function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
document.querySelector("button").addEventListener("click", () => {
    smoothScrollToTop();
});