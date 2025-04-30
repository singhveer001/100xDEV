import { ReactNode } from "react";

export default function({children } :{
    children : ReactNode 
}){
    return <div>
        <div>Signup/Signin Header</div>
        {children}
        <div>Signup Footer</div>
    </div>
}