const elements = {
    fontSizeControl: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
}
function hendlerClick(evt) {
    elements.text.style.fontSize = `${evt.currentTarget.value}px`;
}
elements.fontSizeControl.addEventListener("input", hendlerClick);