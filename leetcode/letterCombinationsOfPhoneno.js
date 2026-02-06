var letterCombinations = function(digits) {
    if(digits.length == 0) return [];

    let map = new Map();

    let ans = [];

    map.set('2',"abc");
    map.set('3',"def");
    map.set('4',"ghi");
    map.set('5',"jkl");
    map.set('6',"mno");
    map.set('7',"pqrs");
    map.set('8',"tuv");
    map.set('9',"wxyz");

    function helper(str, digits,i){
        if(str.length == digits.length){
            ans.push(str);
            return;
        }

        let letters = map.get(digits.charAt(i));

        for(let j = 0; j<letters.length;j++){
            str = str + letters.charAt(j);

            helper(str,digits,i+1);

            str = str.slice(0,-1);
        }
    }

    helper("",digits,0);

    return ans;

};

console.log(letterCombinations("23"));