// 3. Write a method to replace all spaces in a string with ‘%20’.
function replace(str){
    str = str.split('');
    for(var i=0; i<str.length; i++){
      if(str[i] === ' '){
        str[i] = '%20';
      }
    }
    str = str.join('');
    return str;
  }
  replace('I love science')