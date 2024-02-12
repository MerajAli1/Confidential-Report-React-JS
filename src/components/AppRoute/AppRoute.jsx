import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from "../mainPage/MainPage"
import SignUp from "../signup/SignUp"
import Login from "../login/Login"
import Teaching from "../teaching/Teaching"
import NonTeaching from "../nonteaching/NonTeaching"
import ReportData from '../ReportData/ReportData'
import EditPage from '../EditPage/EditPage'
import ProViceChancellor from '../ReportData/ProViceChancellor'
import ViceChancellor from '../ReportData/ViceChancellor'
const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/teaching' element={<Teaching />} />
                    <Route path='/nonteaching' element={<NonTeaching />} />
                    <Route path='/reportdata' element={<ReportData />} />
                    <Route path='/proviceChancellor' element={<ProViceChancellor />} />
                    <Route path='/vicechancellor' element={<ViceChancellor />} />
                    <Route path='/editpage' element={<EditPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute