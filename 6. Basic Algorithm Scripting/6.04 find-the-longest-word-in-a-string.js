function findLongestWordLength(str) {
  let maxChar = 0;
  const words = str.split(' ');
  for (let word of words) {
    if (word.length > maxChar) maxChar = word.length
  }
  return maxChar;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");