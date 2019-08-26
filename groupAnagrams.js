var groupAnagrams = function(strs) {
    var finalResult = [];
    var midResult = [];
    
    for(var i=0; i<strs.length; i++){
      midResult.push(strs[i]);
        for(var j=i+1; j<strs.length; j++){          
          var isAnagramRes = isAnagram (midResult[0], strs[j]);
          if(isAnagramRes){
            midResult.push(strs[j]);
            strs.splice(j, 1);
            j--;
          }
        }
        finalResult.push(midResult);
        midResult = [];
    }
    return finalResult; 
};

function isAnagram (str1, str2){
    var hash = {};
    if(str1.length !== str2.length){
        return false;
    }
    for(var i=0; i<str1.length; i++){
        if(hash[str1[i]] === undefined){
            hash[str1[i]] = 1;
        }else{
            hash[str1[i]] += 1;
        }
    }
    for(var j=0; j<str2.length; j++){
       if(hash[str2[j]] === undefined){
            return false;
        }else{
            hash[str2[j]] -= 1;
        } 
    }
    for(var key in hash){
        if(hash[key] !== 0){
            return false;
        }
    }
    return true;
}
groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
