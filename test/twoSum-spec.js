const chai = require("chai");
const expect = chai.expect;
const { twoSum } = require("../solutions/easy/twoSum");

describe("twoSum(nums, target)", () => {
  it("should return indices of the two numbers in an array such that they add up to target. You can return the indecies in any order.", () => {
    const nums1 = [2, 7, 11, 15];
    const nums2 = [3, 2, 4];
    const nums3 = [3, 3];
    const nums4 = [3, 2, 3];
    const target1 = 9;
    const target2 = 6;
    const target3 = 6;
    const target4 = 6;

    const actual1 = twoSum(nums1, target1);
    const actual2 = twoSum(nums2, target2);
    const actual3 = twoSum(nums3, target3);
    const actual4 = twoSum(nums4, target4);

    expect(actual1).to.have.deep.members([0, 1]);
    expect(actual2).to.have.deep.members([1, 2]);
    expect(actual3).to.have.deep.members([0, 1]);
    expect(actual4).to.have.deep.members([0, 2]);
  });

  it("should not use the same element twice.", () => {
    const nums5 = [3, 3, 4, 21];
    const target5 = 6;

    const actual4 = twoSum(nums5, target5);

    expect(actual4).to.not.have.members([0, 0]);
    expect(actual4).to.not.have.members([1, 1]);
  })
});
