// Function

function printAllUsers(users){
    for(let i=0; i<users.length;i++){
        const toLog = users[i].name + "'s age is " + users[i].age ;
        console.log(toLog);
 }
}

// Array of object
var users = [{name:"veer" ,age:22},
             {name: "Aadi", age:23},
             {name:"Piyush",age:24}
            ];

var users2 = [{name:"naitik" ,age:16},
             {name: "unnati", age:19},
             {name:"mausam",age:22}
            ];
            
printAllUsers(users);  
printAllUsers(users2);
printAllUsers(users);


// Example 
// Passing function inside function

function sum(index1,index2){
        return index1 + index2;
}

function diff(index1,index2){
        return index1 - index2;
}

function multiply(index1,index2){
        return index1 * index2;
}

function arithmetic(firstEl , secondEl, arithmeticFn){
        return arithmeticFn(firstEl,secondEl);
}

var answer = arithmetic(5,2,sum);
console.log(answer);

var ans2  = arithmetic(5,10,multiply)
console.log(ans2);