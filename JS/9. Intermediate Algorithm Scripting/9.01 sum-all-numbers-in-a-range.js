function sumAll(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let answer = 0;
  for (let i = sortArr[0]; i <= sortArr[1]; i++) {
    answer += i;
  }
  return answer;
}

sumAll([1, 4]);