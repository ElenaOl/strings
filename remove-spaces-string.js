// 8. Remove spaces from a given string in O(n) running time and only one traversal of a string.

// Input: “I love ice cream”

// Output: “Iloveicecream”

function removeSpace (str){
  str = str.split('')
  for (var i=0; i<str.length; i++){
    if(str[i] === " "){
      str.splice(i, 1)
    }
  }
  str = str.join('')
  return str;
}

removeSpace("I love ice cream");