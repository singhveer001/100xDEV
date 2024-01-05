/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,  
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    var spendEstimates = {};  
  for(var i =0; i< transaction.length; i++){
      var t = transaction[i];
      if(spendEstimates[t.category]){
        spendEstimates[t.category] =spendEstimates[t.category] + t.price ;
      }
      else{
        spendEstimates[t.category] = t.price;
      }
    }
    console.log(spendEstimates);
   
    // Now here we converting output in array
    var keys = Object.keys(spendEstimates) // it convert obj into array -> { Drink: 45, food: 30 }  => [ 'Drink', 'food' ]
    // console.log(keys);
    let answer = [];
    for(var i=0; i<keys.length; i++){
      var category = keys[i];
      var obj = {
          category : category,
          totalSpent : spendEstimates[category]
         }
    answer.push(obj);
}
  console.log(answer);
}

var transaction = [
  {
    itemName: "pepsi",
    category : "Drink",
    price: 20,
    timestamp : "12-june-2023"
  },
  {
    itemName: "Samosa",
    category : "food",
    price: 15,
    timestamp : "14-june-2023"
  },
  {
    itemName: "Laddu",
    category : "food",
    price: 15,
    timestamp : "14-june-2023"
  },
  {
    itemName: "mirinda",
    category : "Drink",
    price: 25,
    timestamp : "13-june-2023"
  },
]

// var users = ["Veer","sameer","golu"];
// console.log(transaction[0].itemName);

// Take upper part as input and return like this
/*
[
  {
    category : "Drink",
    spent : 45
  },
  {
    category : "food",
    spent : 30
  }
]
*/

calculateTotalSpentByCategory(transaction);

module.exports = calculateTotalSpentByCategory;
