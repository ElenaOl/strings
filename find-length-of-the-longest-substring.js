Given a string, find length of the longest substring with all distinct characters.  
For example, for input "abca", the output is 3 as "abc" is the longest substring with all distinct characters.

function lengthOfDistrinctCharacter (str){
  if(str.length === 0 || str === null){
    return 0;
  }
  var hash = {};
  var res = [];
  for(var i=0; i<str.length; i++){
    if(hash[str[i]] === undefined){
      hash[str[i]] = 1;
    }else{
      res.push(Object.keys(hash).length);
      hash = {};
    }
  }
  return Math.max(...res);
}
lengthOfDistrinctCharacter ("abcdefghb");
