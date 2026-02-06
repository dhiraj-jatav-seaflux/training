var minSubArrayLen = function(target, nums) {
     let l = 0;
        let r = 0;
        let minLength = Number.MAX_VALUE;
        let currSum = 0;

        while(r<nums.length){
            while(currSum>=target){
                minLength = Math.min(minLength,r-l+1);
                currSum = currSum - nums[l];
                l++;
            }
            currSum = currSum + nums[r];
            r++;
        }

        while(currSum>=target){
            minLength = Math.min(minLength,r-l+1);
            currSum-=nums[l];
            l++;
        }

        if(minLength == Number.MAX_VALUE) return 0;
        return minLength-1;
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]))