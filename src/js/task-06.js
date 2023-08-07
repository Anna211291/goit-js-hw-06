const input = document.querySelector("#validation-input");

function handleClick(evt) {
    if (evt.currentTarget.value.trim().length === Number(input.dataset.length)) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
    else {
        input.classList.remove("valid")
        input.classList.add("invalid")
    }
}
input.addEventListener("blur", handleClick);
