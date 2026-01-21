/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null) return head;

    let removePt = getLength(head) - n;

    if(removePt == 0) return head.next;

    let node = head;

    while(node!=null){
        if(removePt == 1){
            node.next = node.next.next;
            return head;
        }
        removePt--;
        node = node.next;
    }

    return head;

};


function getLength(head){
    let length = 0;
    let node = head;
    while(node!=null){
        length++;
        node = node.next;
    }
    return length;
}