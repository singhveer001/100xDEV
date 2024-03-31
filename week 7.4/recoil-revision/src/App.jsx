import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue , RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
      <MainApp/>
  </RecoilRoot>
 
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const [messagingAtomCount , setMessagingAtomCount] = useRecoilState(messagingAtom)
  // same as useState

  // Using selectors
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // Without using selectors (using useMemo)
  // const totalNotificationCount = useMemo(() =>{
  //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount ;
  // },[networkNotificationCount , jobsAtomCount , notificationsAtomCount , messagingAtomCount])

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount })</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationsAtomCount})</button>
      
      <button onClick={()=>{
        setMessagingAtomCount(messagingAtomCount + 1)
      }}>Me</button>
      
      <button >Me2 ({totalNotificationCount})</button>
    </>
  )
}

export default App
