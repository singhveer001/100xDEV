// Given a list of users , filter out the users that are legaal

interface User{
    firstName : string,
    lastName : string,
    age : number,
};


function filtersUsers(users : User[]){
    let legalAge : User[] = [];
    for(let i=0; i<users.length; i++){
        if(users[i].age >= 18){
            legalAge.push(users[i]);
        }
    }
    return legalAge;
}

// Using filter
// function filtersUsers(users : User[]){
//     let legalAge = 18;
//     return users.filter(user => user.age >= legalAge)
// }

const users: User[] = [
    { firstName: "Veerbhan", lastName: "Singh", age: 21 },
    { firstName: "John", lastName: "Doe", age: 16 },
    { firstName: "Jane", lastName: "Doe", age: 25 },
    { firstName: "Emily", lastName: "Clark", age: 17 }
];

const legalUsers = filtersUsers(users);
console.log(legalUsers);