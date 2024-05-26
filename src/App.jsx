import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { Route, Routes, useLocation } from "react-router-dom"
import MainPage from '../public/pages/MainPage'
import Header from './components/Header/Header'
import ContactsPage from '../public/pages/ContactsPage'
import Footer from './components/Footer'
import MarqueeBlock from './components/MarqueeBlock'
import BasicDataPage from '../public/pages/college-info/BasicDataPage'
import ManagementStructurePage from '../public/pages/college-info/ManagementStructurePage'

function App() {
    const menuRef = useRef(null);
    const location = useLocation()
    const [isMain, setIsMain] = useState(false)

    useEffect(() => {
        location.pathname === '/' ? setIsMain(false) : setIsMain(true)
    }, [location])

    return (
        <div className={`${isMain ? 'lg:pt-10 ' : ''}w-full flex flex-col items-center gap-[1.43rem] overflow-hidden md:gap-[3.75rem]`}>
            {isMain && <Header menuRef={menuRef}/>} 
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/contacts' element={<ContactsPage/>}></Route>
                <Route path='/basic-data' element={<BasicDataPage/>}></Route>
                <Route path='/structure-college' element={<ManagementStructurePage/>}></Route>
            </Routes> 
            <MarqueeBlock/>
            <Footer/>
        </div>
    )
}

export default App