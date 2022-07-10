const chai = require("chai");
const expect = chai.expect;
const { palindromeNumber } = require("../solutions/easy/palindromeNumber");

describe("palindromeNumber(x)", () => {
  it("should return true if x is a palindrome integer.", () => {
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
