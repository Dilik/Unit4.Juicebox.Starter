import { fetchAllPosts } from "../API";
import { useEffect,useState } from "react";

export function Posts(){
    const[posts,setPosts]=useState([])
    const[error, setError]=useState([])


useEffect(()=>{
    async function getallPosts(){
        const response= await fetchAllPosts()
        if(response){
            setPosts(response)
            console.log("testing:",response)
            
        }else{
            setError(response.error)
            console.log("Error Message:",error)
        }
    }
    getallPosts();
},[])
const postsToDisplay=posts
console.log(postsToDisplay)

return(
    <>
    <h1>Posts</h1>
    
    {postsToDisplay.map((post)=>{
        return 
            <div key={post.id}>
            <h4>{post.content}</h4>
            </div>
    })}
    
    </>
)
}