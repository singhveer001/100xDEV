import React,{Fragment} from 'react'
import { useState } from 'react'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"Go to gym",
    description:"Go to gym today"
  },
  {
    id:2,
    title:"eat food",
    description:"eat food"
  },
  {
    id:3,
    title:"Go to class",
    description:"Go to the class"
  }
])

  function addTodo(){
    console.log("hello");
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }


    // this code also do same thing
/*
    function addTodo(){
    const newTodos = [];
    for(let i=0; i<todos.length;i++){ 
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id:4,
      title:Math.random(),
      description:Math.random()

    })
    setTodos(newTodos)
  }
*/

  return (
    <div>
    
        <button onClick={addTodo}>Add a todo</button>
        {todos.map(function(todo) { 
         return <Todo key={todo.id} title={todo.title} description={todo.description}/>
          })}
    </div>
  )
}

// todo component
function Todo({title,description}){
    return <div>
        <h1>
          {title}
        </h1>
        <h5>
          {description}
        </h5>
    </div>
}
export default App
