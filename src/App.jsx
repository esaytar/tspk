import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import MainPage from '../public/pages/MainPage'
import Header from './components/Header/Header'
import ContactsPage from '../public/pages/ContactsPage'
import Footer from './components/Footer'
import MarqueeBlock from './components/MarqueeBlock'
import DocsPage from '../public/pages/bpoo-pages/DocsPage'
import MainInfoPage from '../public/pages/college-info/MainInfoPage'
import MainBPOOPage from '../public/pages/bpoo-pages/MainBPOOPage'

function App() {
    const menuRef = useRef(null);
    const location = useLocation()
    const [isMain, setIsMain] = useState(false)

    useEffect(() => {
        location.pathname === '/' ? setIsMain(false) : setIsMain(true)
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div className={`${isMain ? 'lg:pt-10 ' : ''}w-full flex flex-col items-center gap-[1.43rem] overflow-hidden md:gap-[3.75rem]`}>
            {isMain && <Header menuRef={menuRef}/>} 
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/contacts' element={<ContactsPage/>}></Route>
                <Route path='/infos/*' element={<MainInfoPage/>}></Route>
                <Route path='/bpoo/*' element={<MainBPOOPage/>}></Route>
            </Routes> 
            <MarqueeBlock/>
            <Footer/>
        </div>
    )
}

export default App