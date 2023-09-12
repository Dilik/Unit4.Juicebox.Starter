export async function fetchAllPosts() {
  try {
    const response = await fetch('http://localhost:3000/api/posts');
    const result = await response.json();
    console.log("Fetched all posts", result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const createPost = async (token, addPost) => {
  const response = await fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: addPost,
    }),
  })
  const result = await response.json()
  const newPost = result.data //THIS MIGHT JUST BE result.posts GOTTA TEST
  return newPost
}

export const registerUser = async (username, password, name, location) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
        username: username, 
        password: password,
        name: name,
        location: location,
    
    })
    });
    const result = await response.json();
    const token = result.token 
    localStorage.setItem("token", token);
    localStorage.setItem("username", username)
    console.log(result);

    return result
  } catch (err) {
    console.error(err);
  }

}

export const loginUser = async (username, password) => {
  try {
    console.log('Sending login request...');
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
          username: username,
          password: password,
      }),
    });
    console.log('Response received:', response);

    const result = await response.json();
    console.log('Result:', result);

    const token = result.token;
    return token;
  } catch (err) {
    console.error('Error:', err);
  }
};