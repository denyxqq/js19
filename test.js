const openButton = document.querySelector('button[data-action="open-modal"]');
const closeButton = document.querySelector('button[data-action="close-modal"]');
openButton.addEventListener("click", () => {
document.body.classList.add("show-modal");
});
closeButton.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
});
//2
const backdrop = document.querySelector(".backdrop");
backdrop.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
});
//3
const red = document.querySelector("input[value='red']");
const white = document.querySelector("input[value='white']");
const green = document.querySelector("input[value='green']");
red.addEventListener("change", () => {
    document.body.style.backgroundColor = "red";
});
white.addEventListener("change", () => {
    document.body.style.backgroundColor = "white";
});
green.addEventListener("change", () => {
    document.body.style.backgroundColor = "green";
});