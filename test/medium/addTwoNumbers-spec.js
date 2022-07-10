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
      constructor(head = null) {
        this.head = null
      }
    }

    // Test1
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

    // Test2
    const node7 = new ListNode(0);
    const node8 = new ListNode(0);
    const linkedList3 = new LinkedList(node7);
    const linkedList4 = new LinkedList(node8);

    // Test3
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

    expect(actual1).to.equal(true);
    expect(actual2).to.equal(false);
    expect(actual3).to.equal(false);
  });
});
