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

function isSubsequence (str1, str2, count){
  if(count > str1.length || count > str2.length){
    return '';
  }
  var res = isSubsequence(str1, str2, count+1);
  if(res !== ''){
    return res;
  }

  for(var i= 0; i<count; i++){
    if(str1[str1.length-count+i] !== str2[i]){
      return '';
    }
  }
  res = str1.slice(0, -count) + str2;
  return res;
   
}
var str1 = 'geek';
var str2 = 'eke';
isSubsequence (str1, str2, 1);

function isPrefix (str1, str2, count){
  if(count >= str1.length){
    return '';
  }

  if (str1.length - count > str2.length){
    return isPrefix(str1, str2, count+1);
  }

  for(var i=count; i<str1.length; i++){
    if(str1[i] !== str2[i - count]){
      return isPrefix(str1, str2, count+1);
    }
  }

  console.log(count);
  res = str1.slice(0 , count - str1.length) + str2;
  return res;
}
var str1 = 'dabab';
var str2 = 'ababv';
isPrefix (str1, str2, 0);