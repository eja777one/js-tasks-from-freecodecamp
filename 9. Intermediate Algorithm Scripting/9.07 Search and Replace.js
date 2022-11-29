function myReplace (str, before, after) {
    let word = [];
    
    let lowAfter = after.toLowerCase();
    
    if (before[0] === before[0].toUpperCase()) {
        word.push(lowAfter[0].toUpperCase());
        word.push(lowAfter.slice(1));
    } else word.push(lowAfter);
    
    word = word.join('');
    
    let answer = str.split(' ');
    let index = answer.indexOf(before);
    answer[index] = word;
    
    return answer.join(' ');
}

console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));