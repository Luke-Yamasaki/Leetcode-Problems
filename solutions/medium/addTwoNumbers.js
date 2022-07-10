const addTwoNumbers = (l1, l2) => {
    let resultArray;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                resultArray = [i, j];
            }
        }
    }
    return resultArray;
}

module.exports = { addTwoNumbers };
