var removeStars = function(s) {
    let str = "";

    for(let i = 0; i<s.length;i++){
        if(s.charAt(i) == '*'){
            str = str.slice(0,-1);
        }else{
            str = str + s.charAt(i);
        }
    }


    return str;
};

console.log(removeStars("leet**cod*e"));