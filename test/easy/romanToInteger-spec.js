const chai = require("chai");
const expect = chai.expect;
const { romanToInteger } = require("../../solutions/easy/romanToInteger");

describe("romanToInteger(s)", () => {
  it("should convert the Roman numeral to an integer and return the number.", () => {
    const str1 = "III";
    const str2 = "LVIII";
    const str3 = "MCMXCIV";

    const actual1 = romanToInteger(str1);
    const actual2 = romanToInteger(str2);
    const actual3 = romanToInteger(str3);

    expect(actual1).to.equal(3);
    expect(actual2).to.equal(58);
    expect(actual3).to.equal(1994);
  });
});
