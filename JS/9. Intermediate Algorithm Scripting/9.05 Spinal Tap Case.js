function spinalCase(str) {
    const template = /\s|,|_|-/
    const preStr = str.split(template).join('-');
    console.log(preStr);
    let answer = [];
    for (let i = 0; i < preStr.length; i++) {
        if (preStr[i] !== preStr[i].toLowerCase()) {
            if(preStr[i-1] !== '-') answer.push('-');
            answer.push(preStr[i].toLowerCase());
        } else answer.push(preStr[i]);
    }
    if (answer[0] === '-') answer = answer.slice(1);
    // console.log(answer.join(''));
    return answer.join('');
}

console.log(spinalCase('AllThe-smallThings'))