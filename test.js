// 1
const openButton = document.querySelector('[data-action="open-modal"]')
console.log(openButton)
const closeButton = document.querySelector('[data-action="close-modal"]')
const backdrop = document.querySelector(".js-backdrop")
openButton.addEventListener("click", () =>{
    backdrop.style.opacity = "1";
    backdrop.style.visibility = "visible";
    backdrop.style.pointerEvents = "initial"
})

closeButton.addEventListener("click", () =>{
    backdrop.style.opacity = "0";
    backdrop.style.visibility = "hidden";
    backdrop.style.pointerEvents = "none"
})

//2

backdrop.addEventListener("click", () =>{
    backdrop.style.opacity = "0";
    backdrop.style.visibility = "hidden";
    backdrop.style.pointerEvents = "none"
})

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