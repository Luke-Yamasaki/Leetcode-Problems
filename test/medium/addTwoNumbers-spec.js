const chai = require("chai");
const expect = chai.expect;
const { addTwoNumbers } = require("../../solutions/medium/addTwoNumbers");

describe("addTwoNumbers(l1, l2)", () => {
  it("should return the sum of the two numbers as a linked list.", () => {

    class ListNode {
      constructor(node) {
        this.node = node
        this.next = null
      }
    }

    class LinkedList {
      constructor() {
        this.head = null
      }
    }

    // Arguments 1
    const node1 = new ListNode(2);
    const node2 = new ListNode(4);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;

    let linkedList1 = new LinkedList(node1)

    const node4 = new ListNode(5);
    const node5 = new ListNode(6);
    const node6 = new ListNode(4);
    node4.next = node5;
    node5.next = node6;

    let linkedList2 = new LinkedList(node4)

    // Arguments 2
    const node7 = new ListNode(0);
    const node8 = new ListNode(0);
    const linkedList3 = new LinkedList(node7);
    const linkedList4 = new LinkedList(node8);

    // Arguments 3
    const node9 = new ListNode(9);
    const node10 = new ListNode(9);
    const node11 = new ListNode(9);
    const node12 = new ListNode(9);
    const node13 = new ListNode(9);
    const node14 = new ListNode(9);
    const node15 = new ListNode(9);
    node9.next = node10;
    node10.next = node11;
    node11.next = node12;
    node12.next = node13;
    node13.next = node14;
    node14.next = node15;

    const linkedList5 = new LinkedList(node9);

    const node16 = new ListNode(9);
    const node17 = new ListNode(9);
    const node18 = new ListNode(9);
    const node19 = new ListNode(9);
    node16.next = node17;
    node17.next = node18;
    node18.next = node19;

    const linkedList6 = new LinkedList(node16);

    const actual1 = addTwoNumbers(linkedList1, linkedList2);
    const actual2 = addTwoNumbers(linkedList3, linkedList4);
    const actual3 = addTwoNumbers(linkedList5, linkedList6);

    // Test 1
    const testNode1 = new ListNode(7);
    const testNode2 = new ListNode(0);
    const testNode3 = new ListNode(8);
    testNode1.next = testNode2;
    testNode2.next = testNode3;
    const testList1 = new LinkedList(testNode1);

    // Test 2
    const testNode4 = new ListNode(0);
    const testList2 = new LinkedList(testNode4);

    // Test 3
    const testNode5 = new ListNode(8);
    const testNode6 = new ListNode(9);
    const testNode7 = new ListNode(9);
    const testNode8 = new ListNode(9);
    const testNode9 = new ListNode(0);
    const testNode10 = new ListNode(0);
    const testNode11 = new ListNode(0);
    const testNode12 = new ListNode(1);
    testNode5.next = testNode6;
    testNode6.next = testNode7;
    testNode7.next = testNode8;
    testNode8.next = testNode9;
    testNode9.next = testNode10;
    testNode10.next = testNode11;
    testNode11.next = testNode12;

    const testList3 = new LinkedList(testNode5);

    // Results
    expect(actual1).to.deep.equal(testList1);
    expect(actual2).to.deep.equal(testList2);
    expect(actual3).to.deep.equal(testList3);
  });
});
