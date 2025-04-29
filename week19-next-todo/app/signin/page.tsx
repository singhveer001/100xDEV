'use client'
import axios from 'axios'
export default function Signin(){
    
    return <div className="w-screen  h-screen flex justify-center items-center">
        <div className="borde p-2 ">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={ () => {
                axios.post("https://localhost:3000/api/v1/signup")
            }}>Sign In</button>
        </div>
    </div>
}