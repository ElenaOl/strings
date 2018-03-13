// 5. Write an algorithm such that if an element in an MxN matrix is 0, 
// its entire row and column are set to 0.

var matrix = [[0,1],[2,3]];
var arrRow = [];
var arrCol = [];
function setToZero (matrix){
  for(var i=0; i<matrix.length; i++){
    for(var j=0; j<matrix[i].length; j++){
      // console.log(matrix[i][j]);
      if(matrix[i][j] === 0){
        arrRow.push(i);
        arrCol.push(j);
      }
    }
  }
  
  for(var k=0; k<arrRow.length; k++){
    var rowNum = arrRow[k];
    for (var m=0; m<matrix[rowNum].length; m++){
      matrix[rowNum][m] = 0;
    }
  }
  for(var l=0; l<arrCol.length; l++){
    var colNum = arrCol[l];
    for (var p=0; p<matrix.length; p++){
      matrix[p][colNum] = 0;
    }
  }

return matrix;
}
setToZero(matrix);





