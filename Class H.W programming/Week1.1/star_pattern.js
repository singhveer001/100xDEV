/*

**
****
******
********

*/ 

function starryPattern(numberOfRows){
    for(var i =1 ; i<numberOfRows ; i++){
        var  stringToPrint ="";
        for(var j =0; j< i*2 ; j++){
            stringToPrint = stringToPrint + "*";
        }
        console.log(stringToPrint);
    }
}

starryPattern(5);

console.log("\n");

// solution 2 (normal changes)

function starryPattern2(numberOfRows){
    for(var i =0 ; i<numberOfRows ; i++){
        var  stringToPrint ="";
        for(var j =0; j< i+1 ; j++){
            stringToPrint = stringToPrint + "**";
        }
        console.log(stringToPrint);
    }
}

starryPattern2(4)