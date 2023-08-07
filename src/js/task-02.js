const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

ingredients.forEach((ingredientName) => {
 const li = document.createElement("li");
  li.textContent = ingredientName;
  li.classList.add("item");

list.append(li);
});
 
// for (const ingredientName of ingredients) {
//    const li = document.createElement("li");
//   li.textContent = ingredientName;
//   li.classList.add("item");

// list.append(li);
// }
console.log(list);
