import { useEffect, useState } from "react"


function App() {
    const [count,setCount] = useState(0);
    const [decrement,setDecrementt] = useState(100);

    useEffect(() =>{
       console.log("mount");
    },[count]) // if we add only empty arry as dependency then it mount only at the time of component rendering
    useEffect(() =>{
       console.log("mount");
    },[decrement])

    return <div>
               <button onClick={()=> setCount(c => c+1)}>{count}</button>
               <button onClick={()=> setDecrementt(c => c-1)}>{decrement }</button>
        </div>
}



export default App
