/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var INT_MIN =Number.MIN_SAFE_INTEGER;  // Minimum value
    var INT_MAX = Number.MAX_SAFE_INTEGER;  
    var Max_val = INT_MIN;
    if(numbers.length == 0){
        return undefined;
    }
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] > Max_val){
            Max_val = numbers[i];
        }
    }
    return Max_val;
}

var ans = findLargestElement([3, 7, 2, 9, 1,22]);
console.log(ans);
module.exports = findLargestElement;