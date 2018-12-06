//1.            find maximum consecutive repeating character in string.
// Input : str = "aaaaaabbcbbbbbcbbbb"
// Output :a

function maximumConsecutive (str){
  var h = {};
  var count = 1;
  for(var i=0; i<str.length-1; i++){
    if(str[i] === str[i+1]){
      count++;
    }else if(str[i] !== str[i+1] && h[str[i]] === undefined){
      h[str[i]] = count;
      count = 1;
    }else if(str[i] !== str[i+1] && count > h[str[i]]){
      h[str[i]] = count;
      count = 1;
    }
  }
  for(var k in h){
    Math.max(h[k]);
    return k;
  }
  


}
maximumConsecutive ("aaaaaabbcbbbbbcbbbb");
