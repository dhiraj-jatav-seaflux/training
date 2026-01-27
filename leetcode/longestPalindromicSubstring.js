var longestPalindrome = function(s) {
    let str = "";

    for(let i = 0; i<s.length;i++){
        let l = i;
        let r = i;

        while(l>=0 && r<s.length && s.charAt(l) == s.charAt(r)){
            if(r-l+1>str.length){
                str = s.substring(l,r+1);
            }
            l--;
            r++;
        }
        l = i;
        r = i+1;

        while(l>=0 && r<s.length && s.charAt(l) == s.charAt(r)){
            if(r-l+1>str.length){
                str = s.substring(l,r+1);
            }
            l--;
            r++;
        }
            
    }

    return str;
};

console.log(longestPalindrome("babad"));