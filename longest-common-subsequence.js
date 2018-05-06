// 6. Given two sequences, print longest common subsequence
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3. 
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

// O(2n)


function common(str1, str2){
  var arrOfsubsequence = [];
  var h1 = {};
  
   for(let i=0; i<str1.length; i++){
      if(h1[str1[i]] !== undefined ){
        h1[str1[i]] += 1;
      }else{
        h1[str1[i]] = 1;  
      }
  }
  for(let j=0; j<str2.length; j++){
      if(h1[str2[j]] !== undefined && h1[str2[j]] > 0){
        arrOfsubsequence.push(str2[j]);
        h1[str2[j]] -=1;
      } 
  }
  // console.log(arrOfsubsequence)
  var subsequence = arrOfsubsequence.join('');
  return subsequence;
}
common('AGGTAB', 'GGGXTXAYB');

function findCommon (str1, str2, i, j){
  if(str1.length === i || str2.length === j){
    return "";
  }
  if(str1[i] === str2[j]){
    return str1[i] + findCommon (str1, str2, i+1, j+1);
  }else{
    var res1 = findCommon (str1, str2, i+1, j);
    var res2 = findCommon (str1, str2, i, j+1);
    if(res1.length > res2.length){
      return res1;
    }else{
      return res2;
    }
  }
}
findCommon ("AGGTAB", "GXTXAYB", 0, 0);