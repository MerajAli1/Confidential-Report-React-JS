import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig/firebase';

const EditPage = () => {
    const [teachingData, setTeachingData] = useState([])
    const [nonTeachingData, setNonTeachingData] = useState([])
    const getTeachingData = async () => {
        const q = query(collection(db, "teachingStaff"), orderBy('time'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const teachingArray = [];
            querySnapshot.forEach((doc) => {
                teachingArray.push({ ...doc.data(), id: doc.id });
            });
            setTeachingData([...teachingArray])
            console.log(teachingArray)
        });
    }
    const getNonTeachingData = async () => {
        const q = query(collection(db, "nonTeachingStaff"), orderBy('time'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const nonTeachingArray = [];
            querySnapshot.forEach((doc) => {
                nonTeachingData.push({ ...doc.data(), id: doc.id });
            });
            setNonTeachingData([...nonTeachingArray])
            console.log(nonTeachingArray)
        });
    }
    useEffect(() => {
        getTeachingData()
        getNonTeachingData()
    }, [])
    return (
        <>
            <div className="header">
                <h2>DAWOOD UNIVERSITY OF ENGINEERING & TECHNOLOGY</h2>
                <h3>ANNUAL CONFIDENTIAL REPORT FORM</h3>
            </div>
            <h1 style={{ textAlign: "center" }}>Teaching Staff</h1>
            <div className="icon">
                <img alt="logo" height="150px" width="150px" />
            </div>
            <div className="intro">
                <label htmlFor="Faculty"> Faculty / Department:</label>
                <select id="Faculty" name="Faculty" required>
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
                </select>
                <label htmlFor="AnnualSpecial"> Annual Special:</label>
                <input value={teachingData.map((e) => e.annualSpecial)} type="text" id="annualSpecial" name="annualSpecial" required />
                <label htmlFor="ReportPeriod"> Report Period:</label>
                <input type="text" id="reportPeriod" name="reportPeriod" required />
                <label htmlFor="To"> TO:</label>
                <input type="text" id="To" name="To" required />
            </div>

            <div className="form">
                <ul style={{ fontSize: "large" }}>
                    <li>
                        <label htmlFor="Name">Name (in block letters):</label>
                        <input type="text" id="Name" name="Name" />
                    </li>
                    <li>
                        <label htmlFor="Designation">Designation:</label>
                        <input type="text" id="Designation" name="Designation" />
                    </li>
                    <li>
                        <label htmlFor="AcademicQualification">Academic Qualification:</label>
                        <input type="text" id="AcademicQualification" name="AcademicQualification" />
                    </li>
                    <li>
                        <label htmlFor="DateOfBirth">Date Of Birth:</label>
                        <input type="text" id="DateOfBirth" name="DateOfBirth" />
                    </li>
                    <li>
                        <label htmlFor="TotalService">Total Service (with date of joining):</label>
                        <input type="text" id="TotalService" name="TotalService" />
                    </li>
                    <li>
                        <label htmlFor="KnowledgeOfLanguage">Knowledge Of Language:</label>
                        <input type="text" id="KnowledgeOfLanguage" name="KnowledgeOfLanguage" />
                    </li>
                    <li>
                        <label htmlFor="SpecialTraining">Special Training:</label>
                        <input type="text" id="SpecialTraining" name="SpecialTraining" />
                    </li>
                </ul>
            </div>
            <div className="post">
                <h2 className="h"><center>POST HELD DURING THE PERIOD</center></h2>
                <ul style={{ fontSize: "large" }}>
                    <li>
                        <label htmlFor="Post">Post:</label>
                        <input type="text" id="post" name="post" />
                    </li>
                    <li>
                        <label htmlFor="Period">Period:</label>
                        <input type="text" id="Period" name="Period" />
                    </li>
                    <li>
                        <label htmlFor="PayAndScale"> Pay And Scale:</label>
                        <input type="text" id="PayAndScale" name="PayAndScale" />
                    </li>
                </ul>
                <button>Submit Form</button>
            </div>

        </>
    )
}

export default EditPage