import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showOTPField, setShowOTPField] = useState(false);
  const [otp, setOTP] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); 

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      console.log(username, email, password );
      const response = await axios.post('http://20.244.89.90:8000/auth/register', { username, email, password, phone });
      console.log(response.data);
      console.log("Registration successful");
      setRegistrationMessage(response.data.message);
      setShowOTPField(true);
     
      setUserName('');
      setEmail('');
      setPhone('');
      setPassword('');

      navigate("/login", { state: { email } }); // Navigate to login page with email as state
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === "User already exists") {
        setErrorMessage(error.response.data.message);
      } else {
        console.error(error);
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className='Login d-flex vh-100 justify-content-center align-items-center'>
      <div className='card p-3 w-30'> 
        <h2>Registration</h2>
        <form onSubmit={handleRegistration}>
          <input className='form-control mb-2' type="text" placeholder="Name" value={username} onChange={(e) => setUserName(e.target.value)} required />
          <input className='form-control mb-2' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className='form-control mb-2' type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input className='form-control mb-2' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className='btn btn-success'>Register</button>
        </form>
        {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>} {/* Display error message here */}
        <p>If you have an account</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
