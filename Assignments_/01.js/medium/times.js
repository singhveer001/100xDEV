/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     let a= 0;
//     for(let i=0 ; i<n; i++){
//         a = a+i;
//     }
//     return a;
// }

// const beforeDate = new Date();
// const befireTimeInMs = beforeDate.getTime();

// calculateTime(1000000);

// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();

// console.log(afterTimeInMs - befireTimeInMs);

/* ---------------------------------------------------------- */
// function currTimePrint(){
//     console.log(new Date().getTime());
// }

// setInterval(currTimePrint,1000);

/* ---------------------------------------------------------- */


function calculateSumTime(n) {
    // Record the start time
    const startTime = new Date().getTime();

    // Calculate the sum
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Record the end time
    const endTime = new Date().getTime();

    // Calculate the time difference in seconds
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;

    // Print the result and the time taken
    console.log(`Sum from 1 to ${n}: ${sum}`);
    console.log(`Time taken: ${elapsedTimeInSeconds} seconds`);
}

// Test cases
calculateSumTime(100);
calculateSumTime(100000);
calculateSumTime(1000000000);
calculateSumTime(10000000000); 