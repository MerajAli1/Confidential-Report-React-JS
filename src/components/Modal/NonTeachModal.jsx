import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:400,
    overflowY:"scroll"
};


export default function BasicModal({ data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [facultyDept, setFacultyDept] = React.useState('')
    const [annualSpecial, setAnnualSpecial] = React.useState('')
    const [reportPeriod, setReportPeriod] = React.useState('')
    const [sendTo, setSendTo] = React.useState('')
    const [name, setName] = React.useState('')
    const [designation, setDesignation] = React.useState('')
    const [academicQualification, setAcademicQualification] = React.useState('')
    const [dob, setDob] = React.useState('')
    const [totalService, setTotalService] = React.useState('')
    const [language, setLanguage] = React.useState('')
    const [training, setTraining] = React.useState('')
    const [Post, setPost] = React.useState('')
    const [payAndScale, setPayAndScale] = React.useState('')
    const [Period, setPeriod] = React.useState('')


    console.log(data)

    const updateTeachingData = async () => {
        const nonTeachingObj = {
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
        await updateDoc(doc(db, "nonTeachingStaff", data.id), nonTeachingObj)
    }
    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField onChange={(e) => setFacultyDept(e.target.value)} value={data.facultyDept} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setAnnualSpecial(e.target.value)} value={data.annualSpecial} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setReportPeriod(e.target.value)} value={data.reportPeriod} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setSendTo(e.target.value)} value={data.sendTo} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setName(e.target.value)} value={data.name} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setDesignation(e.target.value)} value={data.designation} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setAcademicQualification(e.target.value)} value={data.academicQualification} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setDob(e.target.value)} value={data.dob} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setTotalService(e.target.value)} value={data.totalService} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setLanguage(e.target.value)} value={data.language} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setTraining(e.target.value)} value={data.training} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setPost(e.target.value)} value={data.Post} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setPayAndScale(e.target.value)} value={data.payAndScale} id="outlined-basic" variant="outlined" />
                    <TextField onChange={(e) => setPeriod(e.target.value)} value={data.Period} id="outlined-basic" variant="outlined" /><br/>
                    <Button variant='contained' onClick={updateTeachingData}>Update</Button>
                </Box>
            </Modal>
        </div>
    );
}