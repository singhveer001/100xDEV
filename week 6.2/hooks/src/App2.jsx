import { useState,useEffect } from 'react'
import axios from "axios";

function App() {

  return (
    <div>
        <Todo id={1} /> 
    </div>
)

}

function Todo({id}){
    const [todo, setTodos] = useState([])

    useEffect( ()=>{
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
          .then(function(response){
            setTodos(response.data.todo)
          })
      },[]);

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
