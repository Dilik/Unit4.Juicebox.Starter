import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Posts } from './components/Posts'
import { CreatePostForm } from './components/CreatePostForm'
import { SignUp } from './components/Register'
import { Login } from './components/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/CreatePost" element={<CreatePostForm />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
