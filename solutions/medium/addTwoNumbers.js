const addTwoNumbers = (l1, l2) => {
    if(l1 === [0] && l2 === [0]) return [0];

    const str1 = l1.reverse().join('');
    const str2 = l2.reverse().join('');
    const total = parseInt(str1) + parseInt(str2);

    return total.split('').reverse();
}

module.exports = { addTwoNumbers };
