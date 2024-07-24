import React, {useState, useEffect, useContext } from 'react'
import {MyContext} from '../../Provider'
import { Link, useLocation } from "react-router-dom"
import LogoTSPK from '../../assets/icons/components/LogoTSPK'
import ArrowBottom from '../../assets/icons/components/ArrowBottom'
import eye from '../../assets/icons/eye.svg'
import BlueButton from '../BlueButton'
import DropDownMenu from '../menu/DropDownMenu'
import './Header.css'
import MenuMobile from '../menu/menuMobile/MenuMobile'

export default function Header({menuRef}) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [resultMenu, setResultMenu] = useState()
    const {isActiveMenu, changeStatusMenu, changeStatusDropdown, isOpened, setFalseStatus} = useContext(MyContext)
    const [transparent, setTransparent] = useState(false)
    const location = useLocation()
    let counter = 0

    const linkArray = ['Сведения об образовательной организации', 'Колледж', 'БПОО']

    useEffect(() => {
        location.pathname !== '/' ? setTransparent(true) : setTransparent(false)
    }, [location])

    useEffect(() => {
        if (location.pathname === '/') {
            function handleScroll() {
                const scrollY = window.scrollY
                let heightPic = document.querySelector('.picture').offsetHeight
                let headerHeight = document.querySelector('header').offsetHeight
                if (scrollY >= heightPic) { 
                    setIsScrolled(true)
                    setTransparent(true)
                } else if (headerHeight < scrollY) {
                    setIsScrolled(false)
                    setTransparent(true)
                } else {
                    setIsScrolled(false)
                    setTransparent(false)
                }
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) changeStatusDropdown(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, []);

    const openDropDownMenu = (e) => {
        counter++
        changeStatusDropdown(true)
        setResultMenu(e.target.textContent)
        if (counter >= 1 && e.target.textContent === resultMenu) {
            counter = 0
            changeStatusDropdown(false)
        }
    }

    useEffect(() => {
        function resize() {
            if (window.innerWidth > 1024) setFalseStatus(false)
        }

        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    return (
        <div ref={menuRef} className='flex w-full justify-center absolute left-0 lg:mt-10'>
            <header style={transparent ? {} : {backgroundColor: "transparent"}} 
            className={`${isScrolled || location.pathname !== '/' ? 'light' : 'dark'} px-[1.88rem] py-[1.25rem] duration-[.2s] w-full flex justify-between items-center fixed z-20 
                lg:max-w-[80rem] lg:rounded-[1.06rem] lg:px-10 lg:py-5 2xl:max-w-[73%] 2xl:min-w-[84.5rem]`}>
                <LogoTSPK/>
                <ul className='text-white gap-5 lg:gap-10 items-center hidden lg:flex '>
                    {
                        linkArray.map((link, index) => (
                            <li key={index} className='flex gap-[0.32rem] items-center cursor-pointer' onClick={openDropDownMenu}>
                                {link}
                                <ArrowBottom style={`${isOpened && resultMenu === link ? 'rotate-180' : ''}`}/>
                            </li>
                        ))
                    }
                    <li><Link to='/dem-exam'>Демонcтрационный экзамен</Link></li>
                    <li><Link to='/contacts'>Контакты</Link></li>
                </ul>
                <button className='btnBurger flex flex-col gap-[7px] lg:hidden z-10 pointer' onClick={() => {changeStatusMenu(isActiveMenu)}}>
                    <span className="line"></span>
                </button>
                <MenuMobile status={isActiveMenu ? 'active ' : ''}/>
                <BlueButton styles='rounded-[0.32rem] hidden lg:block'>
                    <img src={eye} alt="версия для слабовидящих"/>
                </BlueButton>
            </header>
            <DropDownMenu 
                styles={`${isScrolled || location.pathname !== '/' ? `light` : `dark`} ${isOpened ? 'block' : 'hidden'}`} 
                main='gap-5'
                content={resultMenu}
                linkValue={linkArray}
                >
            </DropDownMenu>
        </div>
    )
}