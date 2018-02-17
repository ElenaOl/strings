// 7. Given two string str1 and str2, find the shortest string that has both str1 and str2 as subsequences.
// Examples:
// Input: str1 = “geek”, str2=”eke”
// Output: “geeke”
//O(n^2)
function subsequences(str1, str2){
  for(var i=0; i<str1.length; i++){
    for(var j=0; j<str2.length; j++){
      if(str1[i+j] !== str2[j]){
        break;
      }
      if(i+j === str1.length-1){
        return str1.substring(0, i)+str2;
      }
      
    }
  }
  return undefined;
}
subsequences('abc', 'eke');