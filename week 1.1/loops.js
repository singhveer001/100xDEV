var users = ["veer","Aadi","Piyush"] 
// accesing all in form of array   
console.log(users); 

// if we want to access single entity then enter index in braket
console.log(users[0]);  

// But if we want to print all then we use loops
for(let i=0; i<users.length;i++){
    console.log(users[i]);
}

// Example 2
var users2 = [{name:"veer" ,age:22},
             {name: "Aadi", age:23},
             {name:"Piyush",age:24}
            ];
            
for(let i=0; i<users2.length;i++){
       const toLog = users2[i].name + "'s age is " + users2[i].age ;
       console.log(toLog);
}