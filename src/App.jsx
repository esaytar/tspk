import React, { useEffect, useState, useRef, useContext} from 'react'
import {MyContext} from './Provider'
import { Route, Routes, useLocation } from "react-router-dom"
import MainPage from '../public/pages/MainPage'
import Header from './components/Header/Header'
import ContactsPage from '../public/pages/ContactsPage'
import Footer from './components/Footer'
import MarqueeBlock from '../src/blocks/mainPage/marquee/MarqueeBlock'
import MainInfoPage from '../public/pages/college-info/MainInfoPage'
import MainBPOOPage from '../public/pages/bpoo-pages/MainBPOOPage'
import ErrorPage from '../public/pages/ErrorPage'
import MainTeachersPage from '../public/pages/for-teachers/MainTeachersPage'
import DemExamPage from '../public/pages/DemExamPage'

export default function App() {
    const {changeStatusDropdown, setFalseStatus} = useContext(MyContext)
    const menuRef = useRef(null);
    const location = useLocation()
    const [isMain, setIsMain] = useState(false)

    useEffect(() => {
        location.pathname === '/' ? setIsMain(false) : setIsMain(true)
        window.scrollTo(0, 0);
        setFalseStatus(false)
        changeStatusDropdown(false)
    }, [location])

    return (
        <div className={`${isMain ? 'lg:pt-10 ' : ''}w-full flex flex-col items-center gap-[1.43rem] overflow-hidden md:gap-[3.75rem]`}>
            {isMain && <Header menuRef={menuRef}/>} 
            <Routes>
                <Route path='/error' element={<ErrorPage/>}></Route>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/contacts' element={<ContactsPage/>}></Route>
                <Route path='/dem-exam' element={<DemExamPage/>}></Route>
                <Route path='/infos/*' element={<MainInfoPage/>}></Route>
                <Route path='/bpoo/*' element={<MainBPOOPage/>}></Route>
                <Route path='/teachers/*' element={<MainTeachersPage/>}></Route>
            </Routes> 
            <MarqueeBlock/>
            <Footer/>
        </div>
    )
}