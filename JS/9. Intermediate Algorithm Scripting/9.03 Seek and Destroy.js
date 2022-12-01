function destroyer(arr) {
    let argsArray = [];
    for (let i = 1; i < arguments.length; i++) {
        argsArray.push(arguments[i])
    }
    
    for (let el of argsArray) {
        while (arr.indexOf(el) != -1) {
            arr.splice(arr.indexOf(el), 1);
        }
    }
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))