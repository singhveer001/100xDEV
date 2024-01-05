// { Drink: 45, food: 30 }

// [
//     { category: 'Drink', amountSpend: 45 },
//     { category: 'food', amountSpend: 30 }
// ]


function solve(input){
    var keys = Object.keys(input)  // [ 'Drink', 'food' ]  =here we hot keys
    var ans = [];
    for(var i =0; i<keys.length; i++){
        var category = keys[i];
        ans.push({
            category:category,
            amountSpent : input[category]
        })
    }
    console.log(ans);
}
var solution = solve({ Drink: 45, food: 30 })