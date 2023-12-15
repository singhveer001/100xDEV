// Find anagram or not

function Anagram(str1,str2){
    // Here split method create array of individual character
    // .sort() method arrange the letters aplphabatically
    // .join() method merge them back into a string
    if(str1.split('').sort().join('') == str2.split('').sort().join('')){
        return true;
    }
    else{
        return false;
    }
}

var ans = Anagram('safe','fase');
console.log(ans);


// Understanding steps line by line of upper function

function arrayFromString(str){
    var array = str.split(" ");
    return array;
}

var ans = arrayFromString("my name is veerbhan");
console.log(ans);

ans = ans.sort();
console.log(ans);

var final = ans.join();
console.log(final);