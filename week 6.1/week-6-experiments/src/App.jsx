import React,{Fragment} from 'react';
import { useState } from 'react'


function App() {
  const [title, setTitle] = useState("My name is Veer")

  function updateTitle(){
    setTitle("My name is "+ Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="Veer2"></Header>
      <Header title="Veer2"></Header>
      <Header title="Veer2"></Header>
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
    { title}
  </div>
})


export default App
