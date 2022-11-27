function mutation(arr) {
  let word1 = arr[0].toLowerCase().split('').sort();
  word1 = [...new Set(word1)].join('');
  console.log(word1);
  let word2 = arr[1].toLowerCase().split('').sort();
  word2 = [...new Set(word2)].join('');
  console.log(word2);

  if (word2.length > word1.length) return false;
  if (word2.length == word1.length) return word2 == word1;

  // let flag = true;

  for (let char of word2) {
    if (word1.indexOf(char) < 0) return false
  }
 
  return true;
}

mutation(["hello", "hey"]);