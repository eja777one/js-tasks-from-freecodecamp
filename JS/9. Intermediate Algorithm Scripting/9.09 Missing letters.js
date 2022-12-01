function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const start = alphabet.indexOf(str[0]);
    // console.log(start);
    // const end = alphabet.indexOf(str[str.length - 1]);
    // console.log(end);
    const alSlice = alphabet.slice(start);
    
    for (let i = 0; i < str.length; i++) {
        if (alSlice[i] !== str[i]) return alSlice[i]
    }
    
    return undefined;
}

console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'))