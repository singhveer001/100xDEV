// Slice function

function findIndex (str,start, end){
    console.log("Original String",str);
    console.log("After Slice :",str.slice(start,end));
}

findIndex("Veerbhan Singh Singh",0 ,7);           

console.log("HelloDost".slice(0,6));

var value = "SliceMethod";
let ans = value.slice(3,7);
console.log(ans);


// Creating function for slice

function cutIt(str, startIndex,endIndex){
    let newString ="";
    for(let i=0; i<str.length; i++){
        if(i >= startIndex && i<endIndex){
            newString += str[i];
        }
    }
    return newString;
}

const string = "ThisIs Long String"

let SliceAns = cutIt(string,2,10);
console.log(SliceAns);