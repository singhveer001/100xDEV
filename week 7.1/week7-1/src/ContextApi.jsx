import { useContext, useState } from "react"
import { CountContext } from "./components/Context";

function App() {
  const [count, setCount] = useState(0);
  
  // wrap anyone that wants to use the teleported value inside a provider 
  return (

    <div>
      <CountContext.Provider value={count}>
          <Count count={count} setCount={setCount} />
      </CountContext.Provider>
 
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App