

import Router from './Routes'

import Album from './ProjectAlbum';
import Sidebar from './Sidebar'
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react'
import Newproject from './Newproject';
import Comp from './Header'
import Header from './Header'


export const UserContext = createContext({});



function App() {

  const [loading, setLoading] = useState(true)
  const [userSession, setUserSession] = useState(true)

  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/isAuth')
        if (!res.ok) return setLoading(false)

        setUserSession(await res.json())
        
        setLoading(false);

        await fetch('/api/getReminder')

      } catch (error) {
        setLoading(false)
        console.error('There was an error fetch auth', error)
        return
      }
    }
    fetchUserAuth()
  }, [])

  return (
   
    
    //<Header/>
    <UserContext.Provider value={userSession}>
      <BrowserRouter>
      
    
      {/* <Album/> */}
   
      {loading ? <>loading...</> : <Router />}
    

  
        </BrowserRouter>
    </UserContext.Provider>
    
    

  
  )
}

export default App



