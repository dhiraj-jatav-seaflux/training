var findClosestNumber = function(nums) {
    let num = nums[0];
    let dist = nums[0] < 0 ? -nums[0] : nums[0];

    for(let i = 0; i<nums.length;i++){
        if(nums[i] == 0) return 0;

        if(nums[i]<0){
            if(-nums[i]<dist){
                num = nums[i];
                dist = -nums[i];
            }else if(-nums[i] == dist){
                num = Math.max(num, nums[i]);
            }
        }else {
            if(nums[i]<dist || nums[i] == dist){
                num = nums[i];
                dist = nums[i];
            }
        }
    }

    return num;
};

findClosestNumber([-4,-2,1,4,8])