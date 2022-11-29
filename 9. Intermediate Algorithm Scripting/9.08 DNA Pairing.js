function pairElement(str) {
    let DNA = [];
    for (let char of str) {
        if (char === 'G') DNA.push([char, 'C']);
        else if (char === 'C') DNA.push([char, 'G']);
        else if (char === 'A') DNA.push([char, 'T']);
        else if (char === 'T') DNA.push([char, 'A']);
    }
    return DNA;
}

console.log(pairElement('GCG'))