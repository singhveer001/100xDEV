/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function swap(start,end){
 
    var temp = start;
    start = end;
    end = start;
  
  }
  
  function isPalindrome(str) {
    var loweCaseWord = str.toLowerCase(); // Converting all latter into small latter
    var start = 0;
    var end = str.length-1;
    while(start <= end){
      if(loweCaseWord[start] == loweCaseWord[end] ){
        swap(start,end);
        start++;
        end--;
      }
      else{
        return false;
      }
    }
    return true;
  }
  
  var ans = isPalindrome('Maam');
  console.log(ans);
  
  module.exports = isPalindrome;
  