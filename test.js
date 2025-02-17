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

//4
const text = document.querySelector("input#name-input");
const textCont = document.querySelector("span#name-output")
text.addEventListener("input",  (event) => {
    textCont.textContent = text.value.trim();
   if(text.value.trim() === ""){
   textCont.textContent = "незнайомець";
}
});
const invalid = document.querySelector("input#validation-input");
invalid.addEventListener("input", (event) => {
    if(invalid.value.length >= 6){
        invalid.classList.add("valid");
        invalid.classList.remove("invalid");
     }else{
        invalid.classList.remove("valid");
        invalid.classList.add("invalid");
     }
});