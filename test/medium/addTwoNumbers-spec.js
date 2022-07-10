const chai = require("chai");
const expect = chai.expect;
const { addTwoNumbers } = require("../../solutions/medium/addTwoNumbers");

describe("addTwoNumbers(x)", () => {
  it("should return true if x is a palindrome integer.", () => {
    const x = 121;
    const y = -121;
    const z = 10;

    const actual1 = addTwoNumbers(x);
    const actual2 = addTwoNumbers(y);
    const actual3 = addTwoNumbers(z);

    expect(actual1).to.equal(true);
    expect(actual2).to.equal(false);
    expect(actual3).to.equal(false);
  });
});
