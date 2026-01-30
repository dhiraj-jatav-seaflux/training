var rotate = function(matrix) {
        let t = 0;
        let b = matrix.length-1;
        let l = 0;
        let r = matrix[0].length-1;

        while(t<b && l<r){
            for(let i = 0; i<r-l;i++){
                let temp = matrix[t][l+i];
                matrix[t][l+i] = matrix[b-i][l];
                matrix[b-i][l] = matrix[b][r-i];
                matrix[b][r-i] = matrix[t+i][r];
                matrix[t+i][r] = temp;
            }
            t++;
            b--;
            l++;
            r--;
        }
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));