// Here we understand Lazy loading( it improve the performance )

// Lazy loading in React allows you to split your code into smaller chunks, 
// loading only the code that is needed for a particular part of your application when it is actually required.
// This can improve the initial loading time of your application.
import React, { Suspense } from 'react';
import {BrowserRouter, Routes,Route,useNavigate} from 'react-router-dom'
import { lazy } from 'react'
const Landing = lazy( () => import('./components/Landing'))
const Dashboard = lazy( () => import('./components/Dashboard'))


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Appbar/> 

        <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"Loading..."}> <Dashboard/>  </Suspense>} />
            <Route path="/" element = {<Suspense fallback={"Loading..."}> <Landing/> </Suspense>} />
        </Routes>
       
    </BrowserRouter>
    </div>
    
  )
}

function Appbar(){
  const navigate = useNavigate();

  return <div>
      <div style={{display:'flex', justifyContent:'center', gap:"20px", backgroundColor:"Gray", height:"50px"}} >
        <button onClick={() =>{
          // window.location.href = "/"
          navigate("/");
        }}>Landing</button>

        <button onClick={()=>{
          // window.location.href ="/dashboard"
          navigate("/dashboard");
        }}>Dashboard</button>
    </div>
  </div>
}
export default App
