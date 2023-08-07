function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  bodyColor: document.querySelector(".widget"),
  colorName: document.querySelector(".color"),
  colorBtn: document.querySelector(".change-color")
}

elements.colorBtn.addEventListener("click", hendlerClick);

function hendlerClick() {
  const selectedColor = getRandomHexColor();
 
    elements.bodyColor.style.backgroundColor = selectedColor;
  
  elements.colorName.textContent = `${selectedColor}`;
}