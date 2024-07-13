import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://20.244.89.90:8000/auth/login', { phone, password });
      console.log(email, password);
      console.log(response.data);
      setErrorMessage('Login successful.');
      navigate('/home'); // Redirect to '/home' on successful login
    } catch (error) {
      setEmail('');
      setPassword('');

      if (error.response) {
        setErrorMessage(error.response.data.message || "An error occurred. Please try again later.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className='Login d-flex vh-100 justify-content-center align-items-center'>
      <div className='card p-3 w-30'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            className='form-control mb-2' 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            className='form-control mb-2' 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className='btn btn-success'>Login</button>
        </form>
        {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>} {/* Display error message here */}
        <p>Create Account</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
