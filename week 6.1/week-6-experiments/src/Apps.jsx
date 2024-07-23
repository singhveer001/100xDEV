// Here extra re-rendering cant happen because we didn't added state in App comonent
//A parent component re-render triggers all children re-rendering
// A state variable that is being used inside component changes that component re render.

import {useState} from 'react'


function Apps() {
  
  return (
    <div>
      <HeaderWithState/>
      <Header title="Piyush Pandey" />
    </div>
  )
}

function HeaderWithState(){
  const [title, setTitle] = useState("Veerbhan singh" );

  function uptadeTitle() {
     setTitle("my name is " + Math.random())
  }
   return (
      <div>
        <button onClick={uptadeTitle}>Update the title</button>
        <Header title={title} />
      </div>
    )
}

function Header({title}){
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Apps