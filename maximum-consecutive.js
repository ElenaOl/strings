//1.            find maximum consecutive repeating character in string.
// Input : str = "aaaaaabbcbbbbbcbbbb"
// Output :a

function maximumConsecutive (str){
   var maxLetter = str[0];
   var countMax = 1;
   var countCurrent = 1;

   for(var i=0; i<str.length; i++){
     if(str[i] === str[i+1]){
       countCurrent ++;
     }else{
       if(countMax < countCurrent){
         countMax = countCurrent;
         maxLetter = str[i];
       }
       countCurrent = 1;
     }
   }
  return maxLetter;
 }
maximumConsecutive ("aaaaaabbcbbbbbcbbbb");
