var longestCommonPrefix = function(strs) {
 var result = [];
 if(strs.length === 0){
   return '';
 }
//  if(strs.length === 1){
//    return strs[0];
//  }
 var i = 0;
 while(true){
   var same = isSame(strs, i);
   if(same){
     result.push(strs[0][i]);
   }else{
     return result.join('');
   } 
   i++;
 }
};
longestCommonPrefix(['aaaa']);

function isSame (strs, index){
  if(strs[0].length <=index){
    return false;
  }
  for(var i=1; i<strs.length; i++){
    if(strs[i].length <=index){
      return false;
    }
    if(strs[i][index] !== strs[0][index]){
      return false;
    }
  }
  return true;
}