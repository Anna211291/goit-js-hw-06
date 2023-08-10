const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

function ingredientsList(arr) {
  const a = arr.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  })
list.append(...a)
}
ingredientsList(ingredients)

// const ingredientsArr = [];

// ingredients.forEach((ingredientName) => {
//  const li = document.createElement("li");
//   li.textContent = ingredientName;
//   li.classList.add("item");
//   ingredientsArr.push(li);
// });
// list.append(...ingredientsArr);
 
// for (const ingredientName of ingredients) {
//    const li = document.createElement("li");
//   li.textContent = ingredientName;
//   li.classList.add("item");

// list.append(li);
// }




console.log(list);
