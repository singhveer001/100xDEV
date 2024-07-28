// Generics
//Example 1
function Identity<T>(arg: T) {
    return arg;
}

const output1 = Identity<string>("harkiratSingh");
const output2 = Identity<number>(100);
console.log(output1.toUpperCase())

//Example 2
//User can send different types of values in inputs, without any type errors
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["VEERBHANSINGH", "ramanSingh"]);
console.log(el.toLowerCase())

interface User {
    name : string;
}
const el2 = getFirstElement<User>([{name:"Veerbhan"}]);
console.log(el2.name)