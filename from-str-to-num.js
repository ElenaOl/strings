function fromStrToNum (str){
  if(str.length === 0){
    return 0;
  }
  if(str === undefined){
    return 0;
  }
  var int = 0;
  for(var i=0; i<str.length; i++){
    var strInt = str[i] - '0';
    int = int *10 + strInt;
  }
  return int;
}
