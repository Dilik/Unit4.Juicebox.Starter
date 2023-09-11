import './App.css'
import { Route, Routes,Link } from 'react-router-dom'
import { Posts } from './components/Posts'
import { CreatePostForm } from './components/CreatePostForm'
import { SignUp } from './components/Register'
import { Login } from './components/Login'
import Profile from './components/Profile'
import Logout from './components/Logout'

function App() {
  return (
    <>
    <h1 className='banner'>JuiceBox</h1>
     

      <Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/CreatePost" element={<CreatePostForm />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Logout" element={<Logout />}/>
      </Routes>
    
    
    </>
  )
}

export default App
