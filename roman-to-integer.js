var romanToInt = function(s) {
    var result = 0;
  if(s.length === 0){
    return result;
  }
  var i = 0;
  while(i<s.length){
    if(s[i] === 'I' && s[i+1] === 'V'){
      result = result + 4;
      if(s.length>i+2){
        result = result *10;
      }
      i+=2;
    }else if(s[i] === 'I' && s[i+1] === 'X'){
      result = result + 9;
      if(s.length>i+2){
        result = result *10;
      }
      i+=2;
    }else if(s[i] === 'X' && s[i+1] === 'L'){
      result = result + 40;
      i+=2;
    }else if(s[i] === 'X' && s[i+1] === 'C'){
      result = result + 90;
      i+=2;
    }else if(s[i] === 'C' && s[i+1] === 'D'){
      result = result + 400;
      i+=2;
    }else if(s[i] === 'C' && s[i+1] === 'M'){
      result = result + 900;
      i+=2;
    }else if(s[i] === 'I'){
      result = result + 1;
      i++;
    }else if(s[i] === 'V'){
      result = result + 5;
      i++;
    }else if(s[i] === 'X'){
      result = result + 10;
      i++;
    }else if(s[i] === 'L'){
      result = result + 50;
      i++;
    }else if(s[i] === 'C'){
      result = result + 100;
      i++;
    }else if(s[i] === 'D'){
      result = result + 500;
      i++;
    }else if(s[i] === 'M'){
      result = result + 1000;
      i++;
    }
  }  
  return result;
};
romanToInt('XXVI')
