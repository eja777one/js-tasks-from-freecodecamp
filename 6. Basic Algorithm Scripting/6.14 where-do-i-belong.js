function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  if (arr.length == 0 || arr[0] == num) return 0;
  if (Math.max(...arr) < num) return arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) return i;
    if (num > arr[i] && num <= arr[i + 1]) return i + 1
  }

}

getIndexToIns([40, 60], 50);