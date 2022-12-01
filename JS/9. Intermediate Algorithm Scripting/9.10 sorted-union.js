function uniteUnique(arr) {
  let innArr = [];
  for (let el of arguments) {
    innArr.push(...el);
  }
  //   console.log(innArr)

  let answer = Array.from(new Set(innArr));

  return answer
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);