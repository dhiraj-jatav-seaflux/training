var lengthOfLongestSubstring = function(s) {
    let r = 0;
    let l = 0;
    const map = new Map();
    let maxLen = 0;

    while(r<s.length){
        if(map.has(s.charAt(r))){
            if(map.get(s.charAt(r))>=l){
                l = map.get(s.charAt(r)) + 1;
            }
        }
        let len = r-l + 1;
        maxLen = Math.max(len,maxLen);
        map.set(s.charAt(r),r);
        r++;
    }


    return maxLen;
};

lengthOfLongestSubstring("abcabcbb");