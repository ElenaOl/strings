// 4. Implement a method to perform a basic string compression using the counts of 
// repeated characters. For example, the string aabccccaaa would become a2b1c4a3. 
// If the compressed string would not become smaller than the original string, your method 
// should return the original string.

function compression(str){
    
    var resultStr = "";
    var count = 1;
    var current = str[0];
    for (var i=1; i<=str.length; i++){
      if(current === str[i]){
        count += 1;
      }else{
        resultStr += (current + count);
        current = str[i];
        count = 1;
      }
    }
    
    return resultStr;
    
  }
  
  compression('aabccccaaa'); //a2b1c4a3
  