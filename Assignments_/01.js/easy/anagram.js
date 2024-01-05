/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sort(str){
    var array = str.split("");
    array = array.sort() ;
    var sortedString = array.join("");
    return sortedString;
  
  }
  
  function isAnagram(str1, str2) {
      var string1 =  str1.toLowerCase();
      var string2 = str2.toLowerCase();
    if(sort(string1) == sort(string2)){
      return true ;
  }
  else{
      return false;
  }
  }
  var ans = isAnagram("Debit Card","Bad Credit");
  console.log(ans);
  
  module.exports = isAnagram;
  