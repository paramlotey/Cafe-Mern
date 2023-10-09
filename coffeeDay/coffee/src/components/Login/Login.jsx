import React, { useState } from "react";
import './login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    const response = await axios.post("http://localhost:4000/login", userData);
    if (response.data.success) {
      alert(response.data.msg);

      // 
      if (email === "admin@gmail.com" && password === "admin123") {
        navigate('/admin/dashboard'); 
      }

    } else {
      alert(response.data)
    }
  }

  return (
    <>
      <div className="login form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email " id="email" name="email"></input>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
          <button type="submit">Log In</button>
        </form>
        <button className="link-btn">Don't have an account? Register Here..</button>
      </div>
    </>
  )
}

export default Login;
