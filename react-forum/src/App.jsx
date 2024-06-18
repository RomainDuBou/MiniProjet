import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { UserApi } from './api/UserApi'
import { useAuth } from './context/AuthContext'

function App() {
   const { user, setUser, setToken } = useAuth()
   
   useEffect(() => {
    UserApi.currentUser().then((response) => {
      console.log(response);
      setUser(response.data.data)
     }).catch((error) => {
      const resp = error.response
      if(resp.status == 401 || resp.status == 400) {
        setToken(null)
        setUser({})
      }
     })
   }, [])


  return (
    <>
     <Header user={user} setToken={setToken} setUser={setUser}/>
     <main>
      <Navbar />
      <Outlet />
     </main>
     
    </>
  )
}

export default App
