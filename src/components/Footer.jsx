import React from 'react'
import Telegram from '../assets/icons/components/Telegram.jsx'
import VK from '../assets/icons/components/Vk.jsx'
import CollegeMenu from './menu/CollegeMenu.jsx'
import BPOOMenu from './menu/BPOOMenu.jsx'
import DataCollegeMenu from './menu/DataCollegeMenu.jsx'
import { Link } from "react-router-dom"
import LogoTSPK from '../assets/icons/components/LogoTSPK.jsx'

export default function Footer() {
    return (
        <div className='w-full bg-mainGray flex justify-center items-center md:py-10 px-[2.14rem] py-[1.42rem] flex-col'>
            <div className="flex flex-col 2xl:w-[73%] w-full gap-[1.42rem] lg:gap-10 items-center justify-center">
                <div className="flex gap-[1.43rem] lg:gap-[8.19rem] w-full md:items-start flex-col md:flex-row">
                    <div className="flex gap-5 items-center self-start md:order-none justify-center">
                        <LogoTSPK styles='fill-white/80'/>
                    </div>
                    <div className="flex w-full justify-between flex-col md:flex-row gap-[1.42rem] md:gap-0">
                        <nav className="flex flex-col gap-[0.71rem] md:gap-5 text-white">
                            <p className='text-[1.14rem] md:text-[1rem]'>Сведения об образовательной организации</p>
                            <DataCollegeMenu main='text-[0.85rem] lg:text-[0.75rem] gap-2.5' liW='w-[15rem]'/>
                        </nav>
                        <nav className="flex flex-col gap-[0.71rem] md:gap-5 text-white">
                            <p className='text-[1.14rem] md:text-[1rem]'>Колледж</p>
                            <CollegeMenu main='text-[0.75rem] gap-2.5 flex-col'/>
                        </nav>
                        <nav className="flex flex-col gap-[0.71rem] md:gap-5 text-white">
                            <p className='text-[1.14rem] md:text-[1rem]'><a href="">БПОО</a></p>
                            <BPOOMenu main='text-[0.75rem] gap-2.5' liW='w-[16rem]'/>
                            <p className='text-[1.14rem] lg:text-[1rem]'><a href="">Демонстрационный экзамен</a></p>
                            <p className='text-[1.14rem] lg:text-[1rem]'><Link to='/contacts'>Контакты</Link></p>
                            <div className='flex gap-5 items-center self-center lg:self-start'>
                                <VK styles='w-[32px] h-[32px]'/>
                                <Telegram styles='w-[32px] h-[32px]'/> 
                            </div>
                        </nav>
                    </div>
                </div>
                <p className='text-white text-center text-[0.85rem] md:text-[1rem]'>&copy; 2024 Государственное автономное профессиональное образовательное учреждение Самарской области "Тольяттинский социально-педагогический колледж"</p>
            </div>
        </div>
    )
}
