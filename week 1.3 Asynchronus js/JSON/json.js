
const users = `{"name": "Veerbhan", "Age" : 22, "gender" : "Male"}`;

// JSON.parse
// JSON.stringify

// JSON.parse => convert string into javascript object
const user = JSON.parse(users)
console.log(user["gender"]);


const users2 = {
    name : "Piyush",
    Age : 23,
    gender : "Male"
}
users2["name"];
// JSON.stringify => Conver object into string 
const finalString = JSON.stringify(users2)
console.log(finalString);
console.log(finalString["name"]); // This will give undefined because this is string 