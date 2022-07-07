const palindromeNumber = (x) => {
    if(x < 0) return false;
    const str = x.toString();
    const arr1 = [];
    const arr2 = [];
    let i = 0;
    let j = str.length - 1;
    while(i < Math.floor(str.length/2)) {
        arr1.push(str[i]);
        arr2.push(str[j]);
        i++;
        j--;
    }
    return arr1.toString() === arr2.toString();
}

module.exports = { palindromeNumber };
