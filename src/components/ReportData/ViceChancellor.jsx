import { collection, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig/firebase';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal'
import NonTeachModal from '../Modal/NonTeachModal'
const ViceChancellor = () => {
    const [teachingData, setTeachingData] = useState([])
    const [nonTeachingData, setNonTeachingData] = useState([])
    const [data, setData] = useState({})
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    const getTeachingData = async () => {
        const q = query(collection(db, "teachingStaff"), orderBy('time'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const teachingArray = [];
            querySnapshot.forEach((doc) => {
                teachingArray.push({ ...doc.data(), id: doc.id });
            });
            setTeachingData([...teachingArray])
            setUser(JSON.parse(localStorage.getItem('users')))
            console.log(teachingArray)
        });
    }

    const getNonTeachingData = async () => {
        const q = query(collection(db, "nonTeachingStaff"), orderBy('time'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const teachingArray = [];
            querySnapshot.forEach((doc) => {
                teachingArray.push(doc.data());
            });
            setNonTeachingData([...teachingArray])
            console.log(teachingArray)
        });
    }

    const updateData = async (id) => {
        // console.log(id)
        setData(id)
        // navigate('/editpage')
        // const editValue = prompt("Enter Value", id)
        // const userObj = {
        //     [id.currentTarget.key]: editValue
        // }
        // await updateDoc(doc(db, "teachingStaff", id), userObj)
    }
    // const approvedBtn = async (id) => {
    //     const userObj = {
    //         chairman: false,
    //         vicechancellor: false,
    //         provicechancellor: true,
    //     }
    //     await updateDoc(doc(db, "teachingStaff", id), userObj)
    // }
    // console.log(data)
    useEffect(() => {
        getTeachingData()
        getNonTeachingData()
    }, [])
    return (
        <>
            <h1>Vice Chancellor</h1>
            <h1 style={{ textAlign: "center" }}>Teaching Staff</h1>
            {/* <button onClick={editHandler}>Edit Button</button> */}
            <center>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Faculty / Department</th>
                            <th>Annual Special</th>
                            <th>Report Period</th>
                            <th>TO</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Academic Qualification</th>
                            <th>Date Of Birth</th>
                            <th>Total Service</th>
                            <th>Knowledge Of Language</th>
                            <th>Special Training</th>
                            <th>Post</th>
                            <th>Period</th>
                            <th>Pay And Scale</th>
                            <th>Edit Button</th>
                        </tr>
                    </thead>

                    {/* map on below tr tag */}
                    <tbody>
                        {teachingData?.map((e, i) => {
                            {
                                return (
                                    e.vicechancellor === true ? (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{e.facultyDept}</td>
                                            <td>{e.annualSpecial}</td>
                                            <td>{e.reportPeriod}</td>
                                            <td>{e.sendTo}</td>
                                            <td>{e.name}</td>
                                            <td>{e.designation}</td>
                                            <td>{e.academicQualification}</td>
                                            <td>{e.dob}</td>
                                            <td>{e.totalService}</td>
                                            <td>{e.language}</td>
                                            <td>{e.training}</td>
                                            <td>{e.Post}</td>
                                            <td>{e.Period}</td>
                                            <td>{e.payAndScale}</td>
                                            <td><button onClick={() => updateData(e)}><Modal data={data} /></button></td>
                                            {/* <button onClick={()=>approvedBtn(e.id)}>Approve</button> */}
                                        </tr>
                                    ) : ""
                                )
                            }

                        })}

                    </tbody>


                </table>
            </center>


            <h1 style={{ textAlign: "center" }}>Non Teaching Staff</h1>
            <center>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Faculty / Department</th>
                            <th>Annual Special</th>
                            <th>Report Period</th>
                            <th>TO</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Academic Qualification</th>
                            <th>Date Of Birth</th>
                            <th>Total Service</th>
                            <th>Knowledge Of Language</th>
                            <th>Special Training</th>
                            <th>Post</th>
                            <th>Period</th>
                            <th>Pay And Scale</th>
                            <th>Edit Button</th>
                        </tr>
                    </thead>

                    {/* map on below tr tag */}
                    <tbody>
                        {nonTeachingData?.map((e, i) => {
                            {
                                return (
                                    e.vicechancellor === true ? (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{e.facultyDept}</td>
                                            <td>{e.annualSpecial}</td>
                                            <td>{e.reportPeriod}</td>
                                            <td>{e.sendTo}</td>
                                            <td>{e.name}</td>
                                            <td>{e.designation}</td>
                                            <td>{e.academicQualification}</td>
                                            <td>{e.dob}</td>
                                            <td>{e.totalService}</td>
                                            <td>{e.language}</td>
                                            <td>{e.training}</td>
                                            <td>{e.Post}</td>
                                            <td>{e.Period}</td>
                                            <td>{e.payAndScale}</td>
                                            <td><button onClick={() => updateData(e)}><NonTeachModal data={data} /></button></td>
                                            {/* <button onClick={()=>approvedBtn(e.id)}>Approve</button> */}
                                        </tr>
                                    ) : ""
                                )
                            }

                        })}

                    </tbody>


                </table>
            </center>

        </>
    )
}

export default ViceChancellor