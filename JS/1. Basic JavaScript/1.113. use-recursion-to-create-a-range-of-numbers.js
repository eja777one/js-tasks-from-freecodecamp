function rangeOfNumbers(startNum, endNum) {
  if (startNum - 1 == endNum) {
    return [];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr
  }
};