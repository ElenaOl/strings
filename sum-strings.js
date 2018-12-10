function twoStringsSum(str1, str2){
  var moveTens = 0;
  var result = [];
  result.length = Math.max(str1.length,str2.length)+1;
  var resLen = result.length -1;
  var i=str1.length-1;
  var j=str2.length-1;
  while (i>=0 && j>=0){
    var num1 = fromStrToNum (str1[i]);
    var num2 = fromStrToNum (str2[j]);
    
    var res = num1+num2+moveTens;
    
    moveTens = 0;
    if(res >= 10){
      moveTens = 1;
      res = res%10;
    }
    
    result[resLen-1] = res.toString();
    i--;
    j--;
    resLen--;
  }
  
  if(i>=0){
    while(i>=0){
      if(moveTens === 0){
        result[resLen-1] = str1[i];
      }else{
        res = fromStrToNum (str1[i]);
        res = res+1;
        result[resLen-1] = res.toString();
      }  
      i--;
      resLen--;
      
    }
  }else if(j>=0){
    while(j>=0){
      if(moveTens === 0){
        result[resLen-1] = str2[j];
      }else{
        res = fromStrToNum (str2[j]);
        res = res+1;
        result[resLen-1] = res.toString();
      }  
      j--;
      resLen--;
    }
  }
  return result.join('')
}
