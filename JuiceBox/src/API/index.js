export async function fetchAllPosts() {
  try {
    const response = await fetch('http://localhost:3000/api/posts')
    const result = await response.json()
    console.log(result)
    return result.posts
  } catch (error) {
    console.log(error)
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
        user:{
        username: username, 
        password: password,
        name: name,
        location: location,
        }
    })
    });
    const result = await response.json();
    const token = result.data.token //GOTTA test
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
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    const token = result.data.token //COULD BE WRONG - gotta test
    console.log(result);
    return token
  } catch (err) {
    console.error(err);
  }
  }