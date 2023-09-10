import { createPost } from '../API'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function CreatePostForm({ posts, setPosts }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleTagsChange = (e) => {
    let newValue = e.target.value

    if (!newValue.startsWith('#')) {
      newValue = '#' + newValue
    }

    setTags(newValue)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')

    if (!token) {
      setErrorMessage('You must be logged in to add a post.')
    }

    const newPost = {
      title: title,
      content: content,
      tags: tags,
    }

    try {
      const freshPost = await createPost(token, newPost)
      setPosts([...posts, freshPost])
      navigate('/Posts')
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Post </h1>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <label htmlFor="name">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Content</label>
      <input
        type="text"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label htmlFor="Tags">Tags</label>
      <input type="text" id="tags" value={tags} onChange={handleTagsChange} />

      <button className="create">Create</button>
    </form>
  )
}
