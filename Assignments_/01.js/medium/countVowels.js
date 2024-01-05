/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    var lowerCaseWord = str.toLowerCase(); // Converting all words in lower case
    var countVowel = 0;
    for(var i=0 ; i<str.length; i++){
      if(lowerCaseWord[i]=='a' || lowerCaseWord[i]=='e' || lowerCaseWord[i]=='i' || lowerCaseWord[i]=='o' || lowerCaseWord[i]=='u'){
          countVowel++;
      }
    }
    return countVowel;
  }
  
  var word = "My name is Veerbhan ";
  var NumOfVowels = countVowels(word);
  console.log(NumOfVowels);
  
  module.exports = countVowels;