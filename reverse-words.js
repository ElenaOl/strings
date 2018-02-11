// 11. Given a string "This is a string" reverse the characters in every word 
"siht si a gnirts"
// O(2n)
function swap (str, si, ei){
  // str = str.split('');
  
  while(ei>si){
    temp = str[si];
    str[si] = str[ei];
    str[ei] = temp;
    ei=ei-1;
    si=si+1
  }
  
  // str = str.join('');
  return str;
}
// swap("This is a string", 10, 15)

function reverseWords(str){
  str = str.split('');
  // console.log(str)
  var si = 0;
  for(var i=0; i<=str.length; i++){
    if(str[i] === " " || str[i] === undefined){
      swap(str, si, i-1);
      si = i+1;
    }
  }
  return str;
}
reverseWords("this is a string");
