const chai = require("chai");
const expect = chai.expect;
const { palindromeNumber } = require("../solutions/easy/palindromeNumber");

describe("palindromeNumber(x)", () => {
  it("should return indices of the two numbers in an array such that they add up to target. You can return the indecies in any order.", () => {
    const x = 121;
    const y = -121;
    const z = 10;

    const actual1 = palindromeNumber(x);
    const actual2 = palindromeNumber(y);
    const actual3 = palindromeNumber(z);

    expect(actual1).to.equal(true);
    expect(actual2).to.equal(false);
    expect(actual3).to.equal(false);
  });
});
