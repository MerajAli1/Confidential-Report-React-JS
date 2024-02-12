import React from 'react'
import image from "../../assets/icon1.png"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
const MainPage = () => {
    return (
        <>
            <center>
                <div className="text">
                    <h3>WELCOME TO DAWOOD UNIVERSITY OF ENGINEERING & TECHNOLOGY</h3>
                </div>
                <div className="icon-container">
                    <img src={image} alt="logo" />
                </div>
                <div className="button-container">
                    <Link to="/signup">
                        <Button variant='contained' className="signup-Button">Sign Up</Button> </Link>
                    <Link to="/login">
                        <Button variant='contained' className="login-Button">Log In</Button> </Link>
                </div>
            </center>
        </>
    )
}

export default MainPage