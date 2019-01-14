//Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
  var letterAndPlaceInString = {};
  var i = 0;
  var start = 0;
  var res = [];
  while(i<s.length){
    if(letterAndPlaceInString[s[i]] === undefined){
      letterAndPlaceInString[s[i]] = i;
      if(i === s.length-1){
        res.push(i-start+1);
      }
      i++;
    }else{
      res.push(i-start);
      start = letterAndPlaceInString[s[i]] + 1;
      for(var key in letterAndPlaceInString){
        if(letterAndPlaceInString[key] < letterAndPlaceInString[s[i]]){
          letterAndPlaceInString[key] = undefined;
        }
      }
      
      letterAndPlaceInString[s[i]] = i;
      i++; 
    }
  }
  
  if(res.length === 0){
    return s.length;
  }
  console.log(letterAndPlaceInString)
  console.log(res)
  return Math.max(...res);
}
