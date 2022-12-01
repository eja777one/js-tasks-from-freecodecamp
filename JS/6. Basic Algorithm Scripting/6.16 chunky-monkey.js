function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let tempArr = [];
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (flag < size) {
      tempArr.push(arr[i]);
      flag++;
    } else {
      newArr.push(tempArr);
      flag = 1;
      tempArr = [];
      tempArr.push(arr[i])
    }
  }
  if (tempArr.length != 0) newArr.push(tempArr);
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);