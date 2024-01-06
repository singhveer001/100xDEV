
class Animal {
    constructor(name , legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static myType(){
        console.log("Animal");
    }

    speak(){
        console.log("hi there " + this.speaks);
    }
}

console.log(Animal.myType());
console.log(Animal.speak()); // ye function direct nhi call hoyega call karne ke liye us function ke aage static hona chahiye

let dog = new Animal("Dog",4,"bhaw bhaw");
let cat = new Animal("Cat",4,"miaw miaw");
cat.speak();
dog.speak();