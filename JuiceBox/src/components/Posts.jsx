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
    <h2 className="posttitle">Posts</h2>
    {posts && posts.map((post)=>(
            <div key={post.id} className="eachpost">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.tags && post.tags.map((tag, index)=>(
                <div key={index}>
                    <p style={{color:"#535bf2"}}>{tag.name}</p>
                </div>
            ))}

            </div>
    ))}
    
    </div>
    </>
)
}