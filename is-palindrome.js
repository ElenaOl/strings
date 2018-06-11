function isAlphaNumeric (char){
  if(char >= 'a' && char <= 'z'){
    return true;
  }
  if(char >= 'A' && char <= 'Z'){
    return true;
  }
  if(char >= '0' && char <= '9'){
    return true;
  }
  return false;
}
var isPalindrome = function(s) {
  var i = 0;
  var j = s.length-1;
  while(i<=j){
    console.log(i, j, s[i], s[j]);
    var isLetter = isAlphaNumeric(s[i]);
    if(!isLetter){
      i++;
      continue;
    }
    var isLetter2 = isAlphaNumeric(s[j]);
    if(!isLetter2){
      j--;
      continue;
    }
    if(s[i].toLowerCase() !== s[j].toLowerCase()){
      return false;
    }
    i++;
    j--;
  }
  return true;
};