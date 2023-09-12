import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPosts() {
      const APIData = await fetchAllPosts();
      if (APIData !== null) {
        setPosts(APIData);
        console.log("the posts", APIData);
      } else {
        setError(window.alert("error"));
      }
    }
    getAllPosts();
  }, []);

//   const displayedPosts = searchParam
//     ? posts.filter((post) => post.title.toLowercase().includes(searchParam))
//     : posts;
//   console.log(
//     displayedPosts.filter((post) =>
//       post.title.toLowercase().includes(searchParam)
//     )
//   );
//   console.log(searchParam);

  return (
    <>
      <div className="homeheader">
        <h1>Home</h1>
      </div>
      <div className="searchbar">
        <label>
          Search
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </label>
      </div>

      {/* {displayedPosts.map((posts) => (
        <div key={posts.id} className="post">
            <h3>{posts.title}</h3>
            <h4>{posts.author.username}</h4>
            <p>{posts.tags}</p>
        </div>
      ))} */}
    </>
  );
}
