import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/icon1.png'
const SignUp = () => {
    return (
        <>
            <center>
                <div className="signup-container">
                    <h1>Dawood University of Engineering and Technology</h1>
                    <h2>Sign Up</h2>
                    <img src={image} alt="" srcset="" />
                    <form action="#" onsubmit="redirectToPage(); return false;">
                        <Typography variant='h4' for="staffType">Select Staff Type:</Typography><br />

                        <Button variant='contained'><Link style={{ textDecoration: 'none', color: "white" }} to={'/teaching'} value="teaching">Teaching Staff</Link></Button><br />
                        <Button sx={{marginTop:3}} variant='contained'><Link style={{ textDecoration: 'none', color: "white"}} to={'/nonteaching'} value="nonteaching">Non-Teaching Staff</Link></Button>
                    </form>
                </div>
            </center>
        </>
    )
}

export default SignUp