// useDebounce
// Create a hook that debounces a value given
// The value that needs to be debounced
// The interval at which the value should be debounced.
import { useEffect,useState } from "react";

function useDebounce(value,timeout){
    const [debouncedValue,setDebouncedValue] = useState(value);

    useEffect(() => {
        let timeoutNumber = setTimeout( () => {
            setDebouncedValue(value);
        },timeout)
        
        return () =>{
            clearTimeout(timeoutNumber);
        }
        
    },[value])

    return debouncedValue;
}

function App4 (){
    const [value,setValue] = useState(0);
    const debouncedValue = useDebounce(value,500);
    
    // Send the backend request and get data for this specific debounced
    // useEffect(() => {
    //     fetch("")
    // },[debouncedValue])

    return (
        <>
            Debounsed value is {debouncedValue} <br/>
            <input type="text" onChange={e => setValue(e.target.value)} />
        </>
    )
}

export default App4;