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
  const newPost = result.data //THIS MIGHT JUST BE result.posts
  return newPost
}
