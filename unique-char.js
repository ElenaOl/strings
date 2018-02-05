// 1. Implement an algorithm to determine if a string has all unique characters. 
// solution with O(n)
function isUnique (str){
    var h = {};
    
    for(let i=0; i<str.length; i++){
      if(h[str[i]] !== undefined ){
        h[str[i]] +=1;
        return "not unique"
      }else{
        h[str[i]] = 1;  
      }
    }
    return "unique";
  }
  isUnique('abcd')
  
  // What if you cannot use additional data structures?
  // solution with O(n^2)
  function isUnique (str){
    
    for(var i=0; i<str.length; i++){
      for(var j=i+1; j<str.length; j++){
        if(str[i] === str[j]){
          return "not unique"
        }
      }
    }
    return "unique";  
  }
  isUnique('abcdefjs');