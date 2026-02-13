var setZeroes = function(matrix) {
    let mat = [];

    for (let i = 0; i < matrix.length; i++) {
        mat[i] = [];
    }

    for(let i = 0; i<matrix.length;i++){
            for(let j = 0; j<matrix[0].length;j++){
                if(matrix[i][j] == 0){
                    mat[i][j] = true;
                }else{
                    mat[i][j] = false;
                }
            }
        }

        for(let i  = 0; i<mat.length;i++){
            for(let j = 0; j<mat[0].length;j++){
                if(mat[i][j] == true){
                    converToZeros(i,j,matrix);
                }
            }
        }
};

function converToZeros(i,j,matrix){
    for(let left = j; left>=0;left--){
            matrix[i][left] = 0;
        }

        // Do right
        for(let right = j; right<matrix[0].length;right++){
            matrix[i][right] = 0;
        }

        // Do top
        for(let top = i; top>=0;top--){
            matrix[top][j] = 0;
        }

        // Do bottom 
        for(let bottom = i; bottom<matrix.length;bottom++){
            matrix[bottom][j] = 0;
        }
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]];

setZeroes(matrix);

console.log(matrix);