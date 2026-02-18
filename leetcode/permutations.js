var permute = function(nums) {
    let ans = [];
    let used = [];
    let curr = [];

    if(nums.legth == 1) return [nums[0]];

    getPermutations(nums,used,curr,ans);

    return ans;

};

function getPermutations(nums,used,curr,ans){
    if(curr.length == nums.length){
        ans.push([...curr]);
        return;
    }

    for(let i = 0; i<nums.length;i++){
        if(!used[i]){
            used[i] = true;
            curr.push(nums[i]);
            getPermutations(nums,used,curr,ans);
            curr.pop();
            used[i] = false;
        }
    }
}

console.log(permute([1,2,3]));