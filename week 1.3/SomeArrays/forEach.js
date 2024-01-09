const arr = [1,2,4,5];

function logThings(str){
    console.log(str);
}

// forEach loop
arr.forEach(logThings);

// Normal loop
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
