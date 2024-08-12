import { useEffect, useState } from 'react';

// This custom hook is created to show online and offline if wifi is closed and opend
export function useIsOnline(){
    const [isOnline,setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online",()=>{
            setIsOnline(true);
        })

        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })
    })

    return isOnline;
}

