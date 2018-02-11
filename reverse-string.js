// 10. Given a string "This is a string" reverse its characters "gnirts a si siht"

function reverse(str){
  str = str.split('');
  for (var i=0; i<str.length/2; i++){
    temp = str[i];
    str[i] = str[str.length-(i+1)];
    str[str.length-(i+1)] = temp;
  }
  str = str.join('');
  return str;
}
reverse("This is a string");

function reverse(str){
    str = str.split('');
    si=0;
    ei=str.length;
    while(si<ei){
      temp = str[si];
      str[si] = str[ei];
      str[ei] = temp;
      ei=ei-1;
      si=si+1
    }
    str = str.join('');
    return str;
  }
  reverse("This is a string");