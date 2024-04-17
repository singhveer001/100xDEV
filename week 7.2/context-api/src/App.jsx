import Counter from "./component/Counter"
import { useContext } from "react"
import { CounterContext } from "../../week-7/src/context"


function App() {

  const  counterstate = useContext(CounterContext);

  return (
    <div className="App">
        <h1>Counter is {counterstate.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>  
    </div>
  )
}

export default App
