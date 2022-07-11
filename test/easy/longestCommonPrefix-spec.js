const chai = require("chai");
const expect = chai.expect;
const { longestCommonPrefix } = require("../../solutions/easy/longestCommonPrefix");

describe("longestCommonPrefix(strs)", () => {
  it("should return the longest common prefix string amongst an array of strings.", () => {
    const strs1 = ["flower","flow","flight"];

    const actual1 = longestCommonPrefix(strs1);

    expect(actual1).to.equal("fl");
  });

  it("should retin an empty string if there is no common prefix.", () => {
    const strs2 = ["dog","racecar","car"]

    const actual2 = longestCommonPrefix(strs2);

    expect(actual2).to.equal("");
  })
});
