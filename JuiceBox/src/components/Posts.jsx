import { fetchAllPosts } from "../API";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export function Posts(){
    const[posts,setPosts]=useState([])
    const[tags, setTags]=useState([])
    const[error, setError]=useState([])


useEffect(()=>{
    async function getallPosts(){
        const response= await fetchAllPosts()
        if(response){
            setPosts(response)
            setTags(response)
            console.log("Response:",response)
            
        }else{
            setError(response.error)
            console.log("Error Message:",error)
        }
    }
    getallPosts();
},[])
const postsToDisplay=posts
const tagsToDisplay=tags

return(
    
    <>
     <div className='navbar'>
      <Link to={"/Profile"}>Profile</Link>
      <Link to={"/Posts"}>Posts</Link>
      <Link to={"/Register"}>Register</Link>
      <Link to={"/"}>Login</Link>
      <Link to={"/Logout"}>Logout</Link>
      </div>

    <div className="postcontainer">
    <h1 className="posttitle">Posts</h1>
    {postsToDisplay.map((post)=>(
            <div key={post.id} className="eachpost">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            </div>
    ))}
    
    {tagsToDisplay.map((tag)=>(
        <div key={tag.id}>
            <h3>{tag.name}</h3>
        </div>
    ))}
    </div>
    </>
)
}