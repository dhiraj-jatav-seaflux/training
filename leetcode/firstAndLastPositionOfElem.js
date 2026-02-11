
var searchRange = function(nums, target) {
    let s = 0;
    let e = nums.length-1;
    let ans = [-1,-1];

    while(s<=e){
        let mid = Math.floor(s + (e - s) / 2);

        if(nums[mid] == target){
            ans[0] = findLeft(s,mid-1,target,nums,mid);
            ans[1] = findRight(mid,e,target,nums,mid);
            return ans;
        }
        if(nums[mid]>target){
            e = mid-1;
        }else{
            s = mid+1;
        }
    }

    return ans;
};

function findLeft(s,e,target,nums,current){
    let ans = current;

    while(s<=e){
        let mid = Math.floor(s + (e - s) / 2);

        if(nums[mid] == target){
            ans = mid;
        }

        if(nums[mid]>=target){
            e = mid - 1;
        }else{
            s = mid+1;
        }
    }

    return ans;
}

function findRight(s,e,target,nums,current){
    let ans = current;

    while(s<=e){
        let mid = Math.floor(s + (e - s) / 2);

        if(nums[mid] == target){
            ans = mid;
        }

        if(nums[mid]>target){
            e = mid - 1;
        }else{
            s = mid+1;
        }
    }

    return ans;
}

console.log(searchRange([5,7,7,8,8,10],8))