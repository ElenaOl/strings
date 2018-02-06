// 6. Given two sequences, print longest common subsequence
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3. 
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

function common(str1, str2){
  var arrOfsubsequence = [];
  var h1 = {};
  var h2 = {};
  
   for(let i=0; i<str1.length; i++){
      if(h1[str1[i]] !== undefined ){
        h1[str1[i]] = 1;
      }else{
        h1[str1[i]] = 1;  
      }
  }
  for(let j=0; j<str2.length; j++){
      if(h2[str2[j]] !== undefined ){
        h2[str2[j]] = 1;
      }else{
        h2[str2[j]] = 1;  
      }
  }
  // for (var k in h1){
  //   if (h1.hasOwnProperty(k)) {
  //     if()
  //   }
  // } 
  // for (var m in h2){
  //   if (h2.hasOwnProperty(m)) {
  //     keys2.push(m);
  //   }
  // }
  var key1 = Object.keys(h1);
  key1 = key1.sort();
  var key2 = Object.keys(h2);
  key2 = key2.sort();
  console.log(key1, key2);
  for(var k=key1.length-1; k>=0; k--){
    for(var m=key2.length-1; m>=0; m--){
      if(key1[k] === key2[m]){
        arrOfsubsequence.push(key1[k]);
      }
    }
  }
  return arrOfsubsequence.length;
}
common('AGGTABC', 'GXTCXAYB');



