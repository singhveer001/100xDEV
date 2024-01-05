// pattern
/*

*
**
***
****

*/

// solution 1
let n = 4;
let string = "";
for(let i=0; i<=n ; i++){
    for(let j=0; j<i ; j++){
    string += "*";
    }
    string += "\n";
}
console.log(string);
console.log(typeof(n));
console.log(typeof(string));


// 2nd solution

function createPattern(numberOfRows){
    for (var i = 0; i < numberOfRows; i++) {
        var stringToPrint = "";
        for(var j =0 ; j<i+1; j++){
            stringToPrint = stringToPrint + "*";
        }
        console.log(stringToPrint);
    }
}

createPattern(10);