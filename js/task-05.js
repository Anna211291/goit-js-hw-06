const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
   
function inputName(event) {
     if (event.currentTarget.value.trim() === "") {
        output.textContent = "Anonymous";
    }
    else {output.textContent = event.currentTarget.value.trim();
   }
};
textInput.addEventListener("input", inputName);

