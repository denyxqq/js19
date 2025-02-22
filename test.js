// #1-2
const modalOpen = document.querySelector('[data-action="open-modal"]');
const modalClose = document.querySelector('[data-action="close-modal"]');
const modalBackdrop = document.querySelector('[data-action="modal"]');

modalOpen.addEventListener("click", (event) => {
  modalBackdrop.style.display = "block";
});

modalClose.addEventListener("click", (event) => {
  modalBackdrop.style.display = "none";
});

window.addEventListener("click", (event) => {
    if(event.target === modalBackdrop){
        modalBackdrop.style.display = "none"
    }
})

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


// #4
const nameImput = document.getElementById("name-input")
const nameOutPut = document.getElementById("name-output")

nameImput.addEventListener("input", (event) =>{
if(nameImput.value){
    nameOutPut.textContent = nameImput.value
}else{
    nameOutPut.textContent = "Незнайомець"
}
})


// -------------------------
const validText = document.getElementById("validation-input");
validText.addEventListener("input", () => {
    if(validText.value.length >= 6){
        validText.style.borderColor = "green"
        }else{
        validText.style.borderColor = "red"
        } 
})

// #5

const bigTextElement = document.querySelector(".big-text");
const spanTextElemrnt = document.querySelector(".text");

bigTextElement.addEventListener("input", () => {
    spanTextElemrnt.style.fontSize = `${bigTextElement.value}px`
})