var levelOrder = function(root) {
    if (!root) return [];

    let queue = [];
    let ans = [];
    queue.push(root);

    while(queue.length !== 0){
        let size = queue.length;
        let curr =[];
        for(let i = 0; i<size;i++){
            let currNode = queue.shift();
            curr.push(currNode.val)

            if(currNode.left !== null){
                queue.push(currNode.left)
            }
            if(currNode.right !== null){
                queue.push(currNode.right)
            }
        }
        ans.push(curr);
    }

    return ans;
};