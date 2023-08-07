const elements = {
    counter: document.querySelector("#counter"),
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    countValue: document.querySelector("#value"),
}

let counterValue = 0;

function handleClickDecrement() {
    counterValue -= 1;
    elements.countValue.textContent = counterValue;
}
function handleClickIncrement() {
    counterValue += 1;
    elements.countValue.textContent = counterValue;
}

elements.btnDecrement.addEventListener("click", handleClickDecrement);
elements.btnIncrement.addEventListener("click", handleClickIncrement);


// function handleClick() {

//     if (elements.btnIncrement) { counterValue += 1; }
//     else if (elements.btnDecrement) { counterValue -= 1; }
    
//     elements.countValue.textContent = counterValue;
// }

// elements.btnDecrement.addEventListener("click", handleClick);
// elements.btnIncrement.addEventListener("click", handleClick);