// Filtering

// What if i tell u , given an input array , give me back all the even values from it 

const arr =[1,2,3,4,5]

// output -> [2,4]

/****************************************************************************/ 
// solution

const newArray = []

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0 ){
        newArray.push(arr[i]);
    }
}
console.log(newArray);

/*****************************************************************/ 

// Another solution (filter)

function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const ans = arr.filter(filterLogic);
console.log(ans);

/**************************************************/ 

// Proper way to write filter
const ans2 = arr.filter(function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
});

console.log(ans2);

/**********************************************/
// example

const array = ["Veerbhan","piyush","aaditya"]

const answer = array.filter(function(n){
    if(n.startsWith("V")){
        return true;
    }else{
        return false;
    }
})

console.log(answer);