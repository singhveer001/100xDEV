/*
// Using type and not using enum
type KeyInput = "Up" | "Down" | "Left" | "Right";

function doSomething(keyPressed:KeyInput){
    if(keyPressed == "Up"){
        
    }
    if(keyPressed == "Down"){

    }
}

doSomething("Up");
doSomething("Down");
*/

// Using enum (It looks in more proper manner)
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed : Direction){
        if(keyPressed == Direction.Up){
            
        }
        if(keyPressed == Direction.Down){
            
        }
}

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);