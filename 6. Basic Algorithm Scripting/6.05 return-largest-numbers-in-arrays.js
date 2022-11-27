function largestOfFour(arr) {
  const maxArray = [];
  for (let numbers of arr) {
    let max = numbers[0];
    for (let number of numbers) {
      if (number > max) max = number;
    }
    maxArray.push(max)
  }
  return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);