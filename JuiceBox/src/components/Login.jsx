import { useState } from 'react';
import { loginUser } from '../API';
import { Link, useNavigate } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
export const Login = ({ setIsLoggedIn }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordMasked, setPasswordMasked] = useState(true)
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('')
    
    const token = await loginUser(username, password);
    if (token) {
      setIsLoggedIn(true);
      localStorage.setItem('user', token);
      navigate('/Profile');
    } else {
      setErrorMessage('Invalid username or password'); 
    }
  };

  const togglePasswordMask = () => {
    setPasswordMasked(!passwordMasked)
  }

    return ( 
    
    <>
    <h2>Login</h2>
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    <form className='loginForm' onSubmit={handleSubmit}>
    <label className="loginScreen">
                Username: 
                <input  
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Type username here..'/>
            </label>
            <label>
          Password:
          <input
            type={passwordMasked ? 'password' : 'text'}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type password here.."
          />
          <button type="button" onClick={togglePasswordMask}>
            {passwordMasked ? 'Show' : 'Hide'} Password
          </button>
        </label>
        <button className="loginBtn">Log in</button>

        <Link to={"/register"}>
          Don't have an account? Register here!
        </Link>
    </form> 


    </>
    
    );
}

