
// Normal object
const user = {
    firstName :"Veerbhan",
    lastName : "Singh",
    email : "veer@gmail.com",
    age : 21,
}

// Assigning type to user Object we use interfaces

interface Users  {
    firstName : string,
    lastName : string,
    email : string,
    age : number
}

// Example function that uses the interface
function printUserDetails(user: Users) {
    console.log(`Name: ${user.firstName} ${user.lastName}, Email: ${user.email}, Age: ${user.age}`);
}

printUserDetails(user);