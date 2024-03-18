import { useEffect,useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    // 1st way is to do with dom concept
/*  
    useEffect(() => {
        document.getElementById("inputBox").focus()
    }, []);

    const handleButtonClick = () => {
        document.getElementById("inputBox").focus()
    };
*/

    // 2nd way is to do with useRef hook
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus()
    }, []);

    const handleButtonClick = () => {
        inputRef.current.focus()
    };


    return (
        <div>
            <input ref={inputRef}  type="text" placeholder="Enter text here" />
            {/* This how we do in javascript using dom */}
            {/* <input id="inputBox" type="text" placeholder="Enter text here" />  */}
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
