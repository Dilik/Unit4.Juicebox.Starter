import { useState } from 'react';
import { loginUser } from '../API';
import { Link, useNavigate } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
export const Login = ({username, setUsername, password, setPassword, setIsLoggedIn,}) => {
  const [errorMessage, setErrorMessage] = useState('')
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
            <label className="loginScreen">
                Password:
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Type password here..'/>
            </label>
        <button className="loginBtn">Log in</button>

        <Link to={"/register"}>
          Don't have an account? Register here!
        </Link>
    </form> 


    </>
    
    );
}

