//1
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
const body = document.querySelector("body")
const colorRed = document.querySelector('[value="red"]')
const colorWhite = document.querySelector('[value="white"]')
const colorGreen = document.querySelector('[value="green"]')
console.log(colorRed)
colorRed.addEventListener("change", (event) =>{
    const statusCheck = event.target.checked;
    if (statusCheck === true) {
        body.style.backgroundColor = "red"
      } 
})
colorWhite.addEventListener("change", (event) =>{
    const statusCheck = event.target.checked;
    if (statusCheck === true) {
        body.style.backgroundColor = "white"
      } 
})
colorGreen.addEventListener("change", (event) =>{
    const statusCheck = event.target.checked;
    if (statusCheck === true) {
        body.style.backgroundColor = "green"
      } 
})