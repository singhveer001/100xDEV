// Understanding zod easily

// If this is an array of number with atleast 1 input , return true , else return false

const zod = require("zod");

function validateInput(arr){
const schema = zod.array(zod.number());

const response = schema.safeParse(arr);
console.log(response);

}

validateInput([1,2,3]);  // if we give wrong input then it give error validateInput(["1",2,3])


/*************************************************************************************************/ 


// If we writing this logic without zod 
function validatedInput(arr){
    if(typeof arr == "object" && arr.length > 1 && typeof arr[0] == "number" ){
        console.log("Your input is arr");

    }
    else{
        console.log("Yor input is wrong");
    }
}
validatedInput(["2",3,2])