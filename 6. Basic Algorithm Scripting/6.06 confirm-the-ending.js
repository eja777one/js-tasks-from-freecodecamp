function confirmEnding(str, target) {
  if (target.length == 1) {
    return str[str.length - 1] === target;
  } else if (str.indexOf(' ') == -1) {
    return str.slice(str.length - target.length) == target;
  } else {
    const words = str.split(' ');
    const word = words[words.length - 1];
    if (target.length > word.lentgh) return false;
    return word.slice(word.length - target.length) == target;
  }

}

confirmEnding("Bastian", "n");