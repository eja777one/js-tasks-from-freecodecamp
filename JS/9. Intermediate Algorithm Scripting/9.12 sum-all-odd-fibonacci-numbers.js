function sumFibs(num) {
  const newArr = [];
  for (let i = 0; i < num; i++) {
    if (i == 0 || i == 1) newArr.push(1);
    if (i > 1) newArr.push(newArr[i - 2] + newArr[i - 1]);
  }

  let total = 0;

  for (let el of newArr) {
    if (el % 2 != 0 && el <= num) total += el
  }

  return total;
}

sumFibs(4);