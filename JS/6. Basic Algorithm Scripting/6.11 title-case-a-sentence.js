function titleCase(str) {
  let words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    let wordArr = words[i].split('');

    wordArr[0] = wordArr[0].toUpperCase();

    words[i] = wordArr.join('')
  }

  console.log(words.join(' '))
  return words.join(' ');
}

titleCase("I'm a little tea pot");