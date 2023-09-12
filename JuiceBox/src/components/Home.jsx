import React, { useEffect, useState } from 'react';
import {
  fetchAllPosts,
  createNewPost,
  updateExistingPost,
  deletePostById,
} from '../API';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState([]);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    async function getallPosts() {
      const response = await fetchAllPosts();
      if (response) {
        setPosts(response);
        setTags(response);
        console.log('Response:', response);
      } else {
        setError(response.error);
        console.log('Error Message:', error);
      }
    }
    getallPosts();
  }, []);

  // Search Bar
const postToDisplay=searchParams
? posts.filter(p=>p.title.toLowerCase().includes(searchParams.toLowerCase())) :
posts;
console.log(postToDisplay)

  return (
    <>
      <div className="search-bar">
        <label>
            Search: {' '}
            <input type="text" placeholder="Search" onChange={(e)=>setSearchParams(e.target.value)}/>
        </label>
    </div>

      <div className="postcontainer">
        <h2 className="posttitle">Posts</h2>
        {posts &&
          postToDisplay.map((post) => (
            <div key={post.id} className="eachpost">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              {post.tags &&
                post.tags.map((tag, index) => (
                  <div key={index}>
                    <p style={{ color: '#535bf2' }}>{tag.name}</p>
                  </div>
                ))}
              <div>
                //{/* Delete Button */}
                <button
                  //onClick={() => handleDelete(post.id)}
                  //className="delete-button"
                //>
                  //Delete
                //</button>
                //{/* Edit Button */}
                //<button
                  //onClick={() => handleEdit(post)}
                  //className="edit-button"
                //>
                  //Edit
                //</button>
              //</div>
            //</div>
          //))}
      //</div>
    //</>
  //);
//}
