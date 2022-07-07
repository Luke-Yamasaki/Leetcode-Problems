const palindromeNumber = (x) => {
    return x.toString() === x.toString().split("").reverse().join("")  
}

module.exports = { palindromeNumber };
