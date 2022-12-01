function repeatStringNumTimes(str, num) {
  if (num > 0) {
    let answer = [];
    for (let i = 0; i < num; i++) {
      answer.push(str);
    }
    return answer.join('');
  } else return '';

}

repeatStringNumTimes("abc", 3);