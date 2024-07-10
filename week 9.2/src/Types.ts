// Unions(in types)
type GreetArgs = number | string;

function Greet(id:GreetArgs){
    console.log(`ID: ${id}`);
}
Greet(2);
Greet("2"); // It accept string also because we declared in types


// Intersaction(in types)
type Employe = {
    name:string;
    startDate:Date;
};

interface Manager {
    name:string,
    department:string,
};

type TechLead = Employe & Manager;

// This is same like above statement
// type TechLead = {
//     name:string,
//     department:string,
//     startDate:Date,
// }


const t : TechLead = {
    name:"Veerbhan",
    startDate:new Date(),
    department:"comps"  
}
