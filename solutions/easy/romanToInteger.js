const dictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};
///LVIII 58
//MCMXCIV 1994
const romanToInteger = (s) => {
    let currInt = 0;
    let total = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        let curr = dictionary[s[i]];
        if(total === 0) {
            total += curr;
            currInt = curr;
        } else if(curr === currInt) {
            total += curr;
        } else if(curr < currInt) {
            total -= curr;
        } else {
            total += curr;
            currInt = curr;
        }
    }
    return total;
};

module.exports = { romanToInteger };
