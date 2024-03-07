import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoApp from './TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoApp/>
  </React.StrictMode>,
)
// commented App part because i coded todo concept also and i want to run that also