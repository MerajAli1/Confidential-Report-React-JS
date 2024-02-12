import React, { useState } from 'react'
import image from "../../assets/icon1.png"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig/firebase'
import { Button, TextField } from '@mui/material'
const NonTeaching = () => {
    const [facultyDept, setFacultyDept] = useState('')
    const [annualSpecial, setAnnualSpecial] = useState('')
    const [reportPeriod, setReportPeriod] = useState('')
    const [sendTo, setSendTo] = useState('')
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [academicQualification, setAcademicQualification] = useState('')
    const [dob, setDob] = useState('')
    const [totalService, setTotalService] = useState('')
    const [language, setLanguage] = useState('')
    const [training, setTraining] = useState('')
    const [Post, setPost] = useState('')
    const [Period, setPeriod] = useState('')
    const [payAndScale, setPayAndScale] = useState('')

    const submitData = async () => {
        const teachingObj = {
            vicechancellor: false,
            provicechancellor: false,
            chairman: true,
            facultyDept,
            annualSpecial,
            reportPeriod,
            sendTo,
            name,
            designation,
            academicQualification,
            dob,
            totalService,
            language,
            training,
            Post,
            Period,
            payAndScale,
            time: new Date()
        }
        console.log(teachingObj)

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "nonTeachingStaff"), teachingObj);
        console.log("Document written with DocRef: ", docRef);
        console.log("Document written with ID: ", docRef.id);
        alert("Submitted")
    }
    return (
        <>
            <center>
                <div className="header">
                    <h2>DAWOOD UNIVERSITY OF ENGINEERING & TECHNOLOGY</h2>
                    <h3>ANNUAL CONFIDENTIAL REPORT FORM</h3>
                </div>
                <div className="icon">
                    <img src={image} alt="logo" height="150px" width="150px" />
                </div>
            </center>
            <h1 style={{ textAlign: "center" }}>Non Teaching Staff</h1>
            <center>
                <div className="intro">
                    <label htmlFor="Faculty"> Faculty / Department:</label>
                    <select style={{ marginBottom: 6 }} onChange={(e) => setFacultyDept(e.target.value)} id="Faculty" name="Faculty" required>
                        <option disabled selected>Select Department</option>
                        <optgroup label="Dean FOE">
                            <option value="Chemical Engineering">Chemical Engineering</option>
                            <option value="Energy & Environment Engineering">Energy & Environment Engineering</option>
                            <option value="Industrial Engineering & Management">Industrial Engineering & Management</option>
                            <option value="Metallurgy & Materials Engineering">Metallurgy & Materials Engineering</option>
                            <option value="Petroleum & Gas Engineering">Petroleum & Gas Engineering</option>
                        </optgroup>
                        <optgroup label="AC FoCEET">
                            <option value="Computer System Engineering">Computer System Engineering</option>
                            <option value="Electronic Engineering">Electronic Engineering</option>
                            <option value="Telecommunication Engineering">Telecommunication Engineering</option>
                        </optgroup>
                        <optgroup label="Dean FoISH">
                            <option value="Computer Science">Computer Science</option>
                            <option value="BS Mathematics">BS Mathematics</option>
                        </optgroup>
                        <optgroup label="Dean AC FoAP">
                            <option value="Architecture & Planning">Architecture & Planning</option>

                        </optgroup>
                    </select><br />
                    <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="AnnualSpecial"> Annual Special:</label>
                    <TextField label="Annual Special" onChange={(e) => setAnnualSpecial(e.target.value)} type="text" id="annualSpecial" name="annualSpecial" required /><br />
                    <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="ReportPeriod"> Report Period:</label>
                    <TextField label="Report Period" onChange={(e) => setReportPeriod(e.target.value)} type="text" id="reportPeriod" name="reportPeriod" required /><br />
                    <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="To"> TO:</label>
                    <TextField label="TO" onChange={(e) => setSendTo(e.target.value)} type="text" id="To" name="To" required />
                </div>
            </center>

            <center>
                <div className="form">
                    <div style={{ fontSize: "large", listStyle: 'none' }}>
                        <li>
                            <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="Name">Name (in block letters):</label>
                            <TextField label='Name' onChange={(e) => setName(e.target.value)} type="text" id="Name" name="Name" />
                        </li>
                        <li>
                            <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="Designation">Designation:</label>
                            <TextField label='Designation' onChange={(e) => setDesignation(e.target.value)} type="text" id="Designation" name="Designation" />
                        </li>
                        <li>
                            <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="AcademicQualification">Academic Qualification:</label>
                            <TextField label='Academic Qualification' onChange={(e) => setAcademicQualification(e.target.value)} type="text" id="AcademicQualification" name="AcademicQualification" />
                        </li>
                        <li>
                            <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="DateOfBirth">Date Of Birth:</label>
                            <TextField label='Date Of Birth' onChange={(e) => setDob(e.target.value)} type="text" id="DateOfBirth" name="DateOfBirth" />
                        </li>
                        <li>
                            <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="TotalService">Total Service (with date of joining):</label>
                            <TextField label='Total Service' onChange={(e) => setTotalService(e.target.value)} type="text" id="TotalService" name="TotalService" />
                        </li>
                        <li>
                            <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="KnowledgeOfLanguage">Knowledge Of Language:</label>
                            <TextField label='Knowledge Of Language' onChange={(e) => setLanguage(e.target.value)} type="text" id="KnowledgeOfLanguage" name="KnowledgeOfLanguage" />
                        </li>
                        <li>
                            <label style={{ display: 'inline-block', width: "20%", marginTop: 4 }} htmlFor="SpecialTraining">Special Training:</label>
                            <TextField label='Special Training' onChange={(e) => setTraining(e.target.value)} type="text" id="SpecialTraining" name="SpecialTraining" />
                        </li>
                    </div>
                </div>
            </center>


            <center>
                <div className="post">
                    <h2 className="h"><center>POST HELD DURING THE PERIOD</center></h2>
                    <div style={{ fontSize: "large", listStyle: 'none' }}>
                        <li>
                            <label style={{ display: "inline-block", width: "20%" }} htmlFor="Post">Post:</label>
                            <TextField label="Post" onChange={(e) => setPost(e.target.value)} type="text" id="post" name="post" />
                        </li>
                        <li>
                            <label style={{ display: "inline-block", width: "20%" }} htmlFor="Period">Period:</label>
                            <TextField label="Period" onChange={(e) => setPeriod(e.target.value)} type="text" id="Period" name="Period" />
                        </li>
                        <li>
                            <label style={{ display: "inline-block", width: "20%" }} htmlFor="PayAndScale"> Pay And Scale:</label>
                            <TextField label="Pay And Scale" onChange={(e) => setPayAndScale(e.target.value)} type="text" id="PayAndScale" name="PayAndScale" />
                        </li>
                    </div>
                    <Button sx={{ marginTop: 5 }} variant='contained' onClick={submitData}>Submit Form</Button>
                </div>
            </center>

        </>
    )
}

export default NonTeaching