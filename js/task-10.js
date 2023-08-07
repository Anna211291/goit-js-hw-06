function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  divElement: document.querySelector("#boxes")
}

elements.createBtn.addEventListener("click", createBoxes);
elements.destroyBtn.addEventListener("click", destroyBoxes);


let step = 0;
function createBoxes() {

  const box = document.createElement("div")
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = "30px"
  box.style.hight = "30px"
  elements.divElement.append(box);

    step += 10;
    elements.divElement.style.width = `${step}px`;
    elements.divElement.style.hight = `${step}px`;
console.log(box);
}

function destroyBoxes() {
  elements.divElement.remove();
}