// 2. Given two strings, write a method to decide if one is a permutation of the other?

//changed so it will have only one hash 
// O(2n) solution

function permutation(str1, str2){
  var h1 = {};
  if(str1.length !== str2.length){
    return "not a permutation";
  }
  for(let i=0; i<str1.length; i++){
      if(h1[str1[i]] !== undefined ){
        h1[str1[i]] +=1;
      }else{
        h1[str1[i]] = 1;  
      }
  }
  
  for(let j=0; j<str2.length; j++){
      if(h1[str2[j]] !== undefined){
       h1[str2[j]] -=1;
      }else if (h1[str2[j]] === undefined){
        return "not a permutation";
      }else if(h1[str2[j]].value === 0) {
        return "not a permutation";
      }else{
        return "not a permutation";
      }
  }
  console.log(h1);
  for (var k in h1){
    if (h1[k] !== 0) {
      return "not a permutation";
    }
  } 
  // console.log(h1)
  
  return "permutation";
}
permutation('abcd', 'dcba');












