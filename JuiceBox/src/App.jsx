import './App.css'
import {Route, Routes}from "react-router-dom"
import { Posts } from './components/Posts'
import {CreatePostForm} from './components/CreatePostForm'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route
          path="/CreatePost"
          element={
            <CreatePostForm/>
          }
        />
      </Routes>
        
    </>
  )
}

export default App
