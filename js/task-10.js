function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  input: document.querySelector("input"),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector("#boxes")
}

elements.createBtn.addEventListener("click", createBoxes);

let boxSize = 20;
let boxText = 6;

function createBoxes(amount) {
if (elements.input.value >= 1 && elements.input.value <= 100)
  {amount = Number(elements.input.value);}

  const boxesArr = [];
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    boxSize += 10;
    boxText += 2;
  box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.marginTop = "10px";
    box.textContent = `Color: ${getRandomHexColor()}`;
    box.style.fontSize = `${boxText}px`;
    box.style.color = "#000"
    boxesArr.push(box);

     if (boxesArr.includes()) {
      break;
    }
   
  }
 
  elements.boxes.append(...boxesArr);
  
}

elements.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  elements.boxes.innerHTML = "";
  elements.input.value = 0;
  boxSize = 20;
  boxText = 6;
}