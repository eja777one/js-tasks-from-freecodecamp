let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
let add = {
  bananas : 13,
  grapes : 35,
  strawberries : 27
}
foods = { ...foods, ...add}
// Only change code above this line

console.log(foods);