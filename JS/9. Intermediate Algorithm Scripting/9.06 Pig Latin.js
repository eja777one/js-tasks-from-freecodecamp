function translatePigLatin(str) {
    const vowel = /a|e|i|o|u/;
    const answer = [];
    const endWord = [];
    let endFlag = vowel.test(str[0]);
    let startFlag = false;
    
    for (let i = 0; i < str.length; i++){
        
        if (!startFlag && vowel.test(str[i])) {
            answer.push(str[i]);
            startFlag = true;
        } else if(!startFlag && !vowel.test(str[i])) {
            endWord.push(str[i]);
        } else if (startFlag) answer.push(str[i]);
    }
    
    if (!endFlag) {
        answer.push(...endWord);
        answer.push('ay');
    } else answer.push ('way');
    
    return answer.join('');
}

console.log(translatePigLatin('rhythm'))