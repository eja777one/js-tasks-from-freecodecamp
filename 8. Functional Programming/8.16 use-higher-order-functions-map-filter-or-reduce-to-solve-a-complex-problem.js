const squareList = arr => {
  // Only change code below this line
  let filteredArr = arr.filter(num => num == num.toFixed(0));
  filteredArr = filteredArr.filter(num => num == Math.abs(num));
  return filteredArr.map(num => num * num);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);