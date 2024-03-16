import { useState,useEffect } from 'react'
import axios from "axios";

function App() {
  const [selectedId,setSelectedId] = useState(1);
  return (
    
    <div>
      <button onClick={() => setSelectedId(1) }>1</button>
      <button onClick={() => setSelectedId(2) }>2</button>
      <button onClick={() => setSelectedId(3) }>3</button>
      <button onClick={() => setSelectedId(4) }>4</button>
      <Todo id={selectedId} /> 
    </div>
)

}

function Todo({id}){

    const [todo, setTodos] = useState([])

    // implement effect here
    useEffect( ()=>{
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
          .then(function(response){
            setTodos(response.data.todo)  // in axios if you want to final thing then use response.data
          })
      },[id]);

    return <div>
      <h1>
      {todo.title}
      </h1>
      <h4>
      {todo.description}
      </h4>
    </div>
}
export default App
