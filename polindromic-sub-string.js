// 9. Find all distinct palindromic sub-strings of a given string
function isPolindrome(str){
  for(var i=0; i<str.length/2; i++){
    if(str[i] !== str[str.length-(i+1)]){
      return false;
    }
  }
  return true;
}

// O(n^3)
function palSubStr (str){
  var h = {};
  
  for(let i=0; i<str.length; i++){
    for(let j=i+1; j<=str.length; j++){
      var subStr = str.substring(i,j);
      if(isPolindrome(subStr) === true){
         h[subStr] =1;
      }
    } 
  }  
  var k = Object.keys(h); 
  return k;
}
palSubStr ("abcba");
