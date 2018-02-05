/////////////////////NOT FINAL SOLUTION!!!!!!! --- NEED IMPROVEMENTS//////////////////////////////////
// 2. Given two strings, write a method to decide if one is a permutation of the other?
function permutation(str1, str2){
    var h1 = {};
    var h2 = {};
    for(let i=0; i<str1.length; i++){
        if(h1[str1[i]] !== undefined ){
          h1[str1[i]] +=1;
        }else{
          h1[str1[i]] = 1;  
        }
    }
    for(let j=0; j<str2.length; j++){
        if(h2[str2[j]] !== undefined ){
          h2[str2[j]] +=1;
        }else{
          h2[str2[j]] = 1;  
        }
    }
    var keys1 = [];
    var keys2 = [];
    for (var k in h1){
      if (h1.hasOwnProperty(k)) {
        keys1.push(k);
      }
    } 
    for (var m in h2){
      if (h2.hasOwnProperty(m)) {
        keys2.push(m);
      }
    } 
    keys1 = keys1.sort();
    keys2 = keys2.sort();
    if(keys1.length === keys2.length){
      for(var i=0; i<keys1.length; i++){
        if(keys1[i] !== keys2[i]){
          return "not a permutation";
        }else{
          if(h2[keys1[i]] === h1[keys1[i]]){
            return "permutation";
          }
        }
      }
    }else{
      return "not a permutation"
    }  
    // console.log(h1[keys2[0]]);
    // console.log(h2[keys1[0]]);
    // console.log(keys1);
    // console.log(keys2);
  }
  permutation('abcdcdef', 'hgabcdcd');
  
  
  
  
  
  
  
  
  
  
  
  
  