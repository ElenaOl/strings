//this is helper function to identify that the character is a letter. Will be used in the minimize function.
function isLetter (char){
  if(char >= 'a' && char <= 'z'){
    return true;
  }
  if(char >= 'A' && char <= 'Z'){
    return true;
  }
  return false;
}

//this function recives a sring and minimize it by replacing the repeating identifiers with it's first location at that string. The function is written JavaScript. (I can provide a C# version as well. In JavaScript using array, in C# using List.)
function minimize (str){
  if(str === null || str.length === 0){
    return str;
  }
 var identifiersMap = {}; 
 var result = []; 
 var currentIdentifier = [];
 var identifierCount = 0;

// go past the last char to flush the last word
 for(var i=0; i<str.length+1; i++){
    if(isLetter(str[i])){
     // not the end of the identifier
      currentIdentifier.push(str[i]);
      continue;
    }

    // handle non letter 
    if(currentIdentifier.length > 0){
      var currentIdentifierString = currentIdentifier.join('');
      if(identifiersMap[currentIdentifierString] === undefined){
        // new identifier
        identifiersMap[currentIdentifierString] = identifierCount;
        result.push(currentIdentifierString);
      }else{
        // existing identifier
        result.push("$" + identifiersMap[currentIdentifierString]);
      }

      identifierCount++;
      currentIdentifier = [];
    }

    // add the current non letter
    result.push(str[i]);
 }
  result = result.join('');
  return result;
}



//minimize("lena567slava lena slava")
