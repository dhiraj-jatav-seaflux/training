/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let ans = [];

    for(let i = 0; i<words.length;i++){
        if(firstCheck(words[i].toLowerCase())){
            ans.push(words[i]);
            continue;
        }

        if(secondCheck(words[i].toLowerCase())){
            ans.push(words[i]);
            continue;
        }

        if(thirdCheck(words[i].toLowerCase())){
            ans.push(words[i]);
            continue;
        }
    }

    function firstCheck(str){
        let firstRow = "qwertyuiop"
        for(let i = 0; i<str.length;i++){
            if(!firstRow.includes(str.charAt(i))) return false;
        }

        return true;
    }

    function secondCheck(str){
        let firstRow = "asdfghjkl"
        for(let i = 0; i<str.length;i++){
            if(!firstRow.includes(str.charAt(i))) return false;
        }

        return true;
    }

    function thirdCheck(str){
        let firstRow = "zxcvbnm"
        for(let i = 0; i<str.length;i++){
            if(!firstRow.includes(str.charAt(i))) return false;
        }

        return true;
    }

    return ans;
    
};

let words = ["Hello","Alaska","Dad","Peace"];
findWords(words);