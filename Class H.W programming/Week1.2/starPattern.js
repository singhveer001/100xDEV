
function prinSingleFullRow(num){
        var string ="";
        for(var i =0; i< num; i++){
            string += "*"
        }
        console.log(string);
}
// prinSingleFullRow(5)

function printPartialRow(num){
    var str = "" ;
    str += "*";
    for(var i =0; i< num-2; i++){
        str += " "
    }
    str += "*";
    console.log(str);
}

// printPartialRow(5)

function starryPattern(num){
    prinSingleFullRow(num)
    for(var i =0 ; i<num-2; i++){
        printPartialRow(num);
    }
    prinSingleFullRow(num)
}

starryPattern(10);