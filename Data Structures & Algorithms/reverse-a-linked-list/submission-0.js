/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 
   [0, 1, 2, 3]
           d n next

 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) { 
        let prev = null
        let curr = head 

        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        return prev
    }
}
