//1
const openButton = document.querySelector('button[data-action="open-modal"]');
const closeButton = document.querySelector('button[data-action="close-modal"]');
openButton.addEventListener("click", (event) => {
document.body.classList.add("show-modal");
});
closeButton.addEventListener("click", (event) => {

});
//2
const backdrop = document.querySelector(".backdrop");
backdrop.addEventListener("click", (event) => {
    document.body.classList.remove("show-modal");
});
//3
const red = document.querySelector("input[value='red']");
const white = document.querySelector("input[value='white']");
const green = document.querySelector("input[value='green']");
red.addEventListener("change", (event) => {
    document.body.style.backgroundColor = "red";
});
white.addEventListener("change", () => {
    document.body.style.backgroundColor = "white";
});
green.addEventListener("change", () => {
    document.body.style.backgroundColor = "green";
});
//4
const text = document.querySelector("input#name-input");
const textCont = document.querySelector("span#name-output")
text.addEventListener("input",  (e) => {
    textCont.textContent = text.value.trim();
   if(text.value.trim() === ""){
   textCont.textContent = "незнайомець";
}
});
const invalid = document.querySelector("input#validation-input");
invalid.addEventListener("input", () => {
    if(invalid.value.length >= 6){
        invalid.classList.add("valid");
        invalid.classList.remove("invalid");
     }else{
        invalid.classList.remove("valid");
        invalid.classList.add("invalid");
     }
});
