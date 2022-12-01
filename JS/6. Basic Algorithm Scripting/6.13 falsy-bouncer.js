function bouncer(arr) {
  const newArr = [];
  for (let el of arr) {
    if (el) newArr.push(el);
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);