import { registerUser } from '../API'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    location: '',
  })

  const [passwordMasked, setPasswordMasked] = useState(true)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()


    await registerUser(formData.username, formData.password, formData.name, formData.location)
    navigate('/login')
  }

  const togglePasswordMask = () => {
    setPasswordMasked(!passwordMasked)
  }

  return (
    <div>
      <h2>Register Account</h2>
      <form className="register" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Type username here.."
          />
        </label>
        <label>
          Password:
          <input
            type={passwordMasked ? 'password' : 'text'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Type password here.."
          />
          <button type="button" onClick={togglePasswordMask}>
            {passwordMasked ? 'Show' : 'Hide'} Password
          </button>
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type name here.."
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Type location here.."
          />
        </label>
        <button>Register Account</button>
      </form>
    </div>
  )
}
