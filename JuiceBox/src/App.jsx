import './App.css'
import { Route, Routes,Link } from 'react-router-dom'
import { Posts } from './components/Posts'
import { CreatePostForm } from './components/CreatePostForm'
import { SignUp } from './components/Register'
import { Login } from './components/Login'
import Profile from './components/Profile'
import Logout from './components/Logout'
import NavBar from './components/NavBar'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <>
     
<NavBar/>
      <Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/CreatePost" element={<CreatePostForm />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/Logout" element={<Logout />}/>
      </Routes>
    
    
    </>
  )
}

export default App
