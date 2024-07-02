// create a function isLegal that returns true or false is a user is above 18. it takes user as input

interface User {
    firstName : string,
    lastName : string,
    age : number
}

function isLegal(user1 : User){
    if(user1.age >= 18){
        return true ;
    }else{
        return false;
    }
}

function greet2 (user1 : User){
    console.log("Hi there " + user1.firstName)
}

const user1 = {
    firstName : "Veer",
    lastName : "Singh",
    age:16,
}

const ans =isLegal(user1);
console.log(ans)

const ans2 = greet2 (user1)

