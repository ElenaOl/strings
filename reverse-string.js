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