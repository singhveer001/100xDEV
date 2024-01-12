
let counter = 0;

function updateCount(){
    
    counter++;
    console.clear();
    console.log(counter);
    setTimeout(updateCount,1000);   
}
updateCount();
