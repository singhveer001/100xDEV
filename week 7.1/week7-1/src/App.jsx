import {BrowserRouter, Routes,Route,useNavigate} from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Appbar/> 
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<Landing/>} />
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
