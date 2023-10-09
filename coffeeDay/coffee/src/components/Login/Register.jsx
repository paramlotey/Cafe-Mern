import React, { useState } from 'react'
import axios from 'axios';
import './login.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [cPassword, setcPass] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData={
            name:name,
            email:email,
            password:password,
            cPassword:cPassword
          }
          try {
            const response=await axios.post("http://localhost:4000/register",userData);
            if(response.data.success){
                alert(response.data.message)
            }else{
                alert(response.data)
            }
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <>
        <div className='login form-container'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input value={name} name='name' id="name" placeholder="Full Name" onChange={e=>setName(e.target.value)}></input>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                <label htmlFor="cPassword">Confirm Password</label>
                <input value={cPassword} onChange={(e) => setcPass(e.target.value)} type="password" placeholder="********" id="password" name="cPassword"></input>
                <button type="submit">Log In</button>
            </form>
            <button className='link-btn'>Already have an account? Login Here..</button>
            </div>
        </>
    )
}
export default Register