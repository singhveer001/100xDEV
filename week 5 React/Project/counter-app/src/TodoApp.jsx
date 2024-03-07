import {useState} from "react";

// Any time a parent rerender its child re-render as well
function TodoApp() {

  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]); 

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3] // add previous and new also
    
    // way 1 using spread operator
    // setTodos([...todos, {
    //   title: "new Todo",
    //   description: "desc of new todo"
    // }])

    // You can write your logic in this way also
    const newTodo = [];
    for(let i=0; i<todos.length;i++){
      newTodo.push(todos[i]);
    }
    newTodo.push({
      title:"Hello veer",
      description:"Veer is a good boy"
    })
    setTodos(newTodo);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default TodoApp