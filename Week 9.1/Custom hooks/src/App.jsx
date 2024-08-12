import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

//Created Custom hook to fetch and manage todos data
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set an interval to fetch todos data periodically every n seconds
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then((res) => { 
          setTodos(res.data.todos);  // Update the todos state with the fetched data
          setLoading(false);  // Set loading to false once data is fetched
        });
    }, n * 1000);

    // Initial fetch of todos data on component mount
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res) => {
        setTodos(res.data.todos);    
        setLoading(false);
      });

    // Cleanup function to clear the interval when the component is unmounted
    // or when the value of n changes. This prevents multiple intervals from being set.
    // cleanup logic to stop the old clock
    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
}

function App() {
  // Using the custom hook useTodos to fetch todos data every 10 seconds
  const { todos, loading } = useTodos(10);

  // If data is still loading, display a loading message
  if (loading) {
    return <div>Loading.....</div>;
  }

  // Once data is loaded, map over todos and render each one using the Track component
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
