import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig/firebase'
import { Button, TextField, Typography } from '@mui/material'
import image from '../../assets/icon1.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        localStorage.setItem('users', JSON.stringify(user.email))
        if (user.email === "vicechancellor@gmail.com") {
          navigate('/vicechancellor')
        } else if (user.email === "provicechancellor@gmail.com") {
          navigate('/provicechancellor')
        } else if (user.email === "chairman@gmail.com") {
          navigate('/reportdata')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
      });
  }
  return (
    <>
      <center>
        <div className="login-container">
          <h1>Dawood University of Engineering and Technology</h1>
          <img src={image} alt="" />
          <Typography variant='h3'>Login</Typography>
          <form onSubmit={login}>
            <label style={{display:'inline-block',width:"10%", marginTop:10}} htmlFor="email">Email:</label>
            <TextField label="Email" sx={{mt:1}} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required /><br/>
            <label style={{display:'inline-block',width:"10%", marginTop:10}} htmlFor="password">Password:</label>
            <TextField label="Password" sx={{mt:1}} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required /><br/>
            <Button onClick={login} sx={{mt:2}} variant='contained'>Login</Button>
          </form>
        </div>
      </center>
    </>
  )
}

export default Login