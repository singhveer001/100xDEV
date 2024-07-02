// Find maximum in an array

function maxValue( arr : number[] ){
    let max =0;
    for(let i=0; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

const maxvalue = maxValue([1,3,5,2,7,6]);
console.log(maxvalue);

