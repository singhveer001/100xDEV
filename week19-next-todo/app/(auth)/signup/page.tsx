'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
export default function Signup(){
    const [username, setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const router = useRouter();
    return <div className="w-screen  h-screen flex justify-center items-center">
        <div className="borde p-2 ">
            <input type="text" placeholder="username" onChange={e => {
                setUsername(e.target.value )
            }}/>
            <input type="password" placeholder="password" onChange={ e => {
                setPassword(e.target.value)
            }}/>
            <button onClick={async  () => {
                await axios.post("http://localhost:3000/api/v1/signup",{
                    username,
                    password
                })
                router.push('/signin')
            }}>Sign Up</button>
        </div>
    </div>
}


