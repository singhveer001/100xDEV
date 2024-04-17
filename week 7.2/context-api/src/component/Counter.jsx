import React,{useContext} from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {

    const ConterContext = useContext(CounterContext);

    return(
    <div>
        <button>Increment</button>
        <button>Decrement</button>
    </div>
    ) 
}

export default Counter;