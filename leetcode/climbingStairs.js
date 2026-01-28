var climbStairs = function(n) {

    let map = new Map();
    
    function getSteps(n){

        if(n == 0){
            return 1;
        }

        if(n<0){
            return 0;
        }

        if(map.has(n)){
            return map.get(n);
        }

        let result = getSteps(n-1) + getSteps(n-2);
        map.set(n,result);

        return result;

    }

    return getSteps(n);
};

console.log(climbStairs(2));