import { useEffect, useState } from 'react';
import { useIsOnline } from './Hooks/useIsOnline';

function App2() {

    const isOnline = useIsOnline();
    if(isOnline){
        return "You are online yay!"
    }
    
    return "You are offline | please connect to the internet"
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

export default App2;
