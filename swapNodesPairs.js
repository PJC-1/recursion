// Given a linked list, swap every two adjacent nodes and return its head.
//
// You may not modify the values in the list's nodes, only nodes itself may be changed.
//
//
//
// Example:
//
// Given 1->2->3->4, you should return the list as 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
var swapPairs = function(head) {
  let a = head;
  const dummy = new ListNode(0);
  let temp = dummy;
  while (a !== null && a.next !== null) {
      const next = a.next.next;
      const b = a.next;
      b.next = a;
      temp.next = b;
      temp = a;
      a = next;
  }
   if (a) {
      temp.next = a;
      a.next = null;
  } else {
      temp.next = null;
  }

  return dummy.next;
};
