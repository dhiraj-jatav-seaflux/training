var rotateRight = function(head, k) {
    if(head == null) return head;

    let length = getLength(head)

    if(length === 1) return head;

    let rotations = k % length;

    if(rotations === 0) return head;

    while(rotations>0){
        let temp = head;
        let tempVal1 = temp.val;
        let tempVal2;

        while(temp!=null){
            tempVal2 = temp.next.val;
            temp.next.val = tempVal1;
            tempVal1 = tempVal2;
            temp = temp.next;
            if(temp.next == null){
                head.val = tempVal1;
                break;
            }
        }
        rotations--;
    }
    return head;
};

function getLength(head){
    let len = 1;

    let temp = head;

    while(temp.next!=null){
        temp = temp.next;
        len++;
    }
    return len;
}