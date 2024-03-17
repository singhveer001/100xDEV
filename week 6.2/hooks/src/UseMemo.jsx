import React, { useEffect, useMemo, useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    // const [cunt , setCunt ] = useState(0);

    // It also rerender multiple time thats why we used useMemo so it can render only that time when inputValue changes
    let count = useMemo(() =>{
        let finalCount =0;
        for(let i=1 ; i<=inputValue;i++){
                finalCount = finalCount +i;
         }
        return finalCount;
    },[inputValue])

    // 2nd Approach using useEffect
    // The difference is that is both => this introduced an extra state Variable ,
    // which cause two Rerender any time inputValue changes (1st at the of inputValue and 2nd at the time of setCunt )
    // useEffect(() =>{
    //     let finalCount =0;
    //     for(let i=1 ; i<=inputValue;i++){
    //             finalCount = finalCount +i;
    //      }
    //      setCunt(finalCount);
    // },[inputValue])

return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={function(e){
            setInputValue(e.target.value)
        }}
      /> <br />
      <button onClick={()=>{
        setCounter(counter+1);
      }}>Counter ({counter})</button>
      <div>Sum is: {count}</div>
    </div>
  );
}

export default App;
