import React, {useRef, useState} from 'react'
import { Route, Routes } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import DocsPage from './DocsPage';
import HeadingInfoPage from '../../../src/components/HeadingInfoPage';
import ProvisionPage from './ProvisionPage';
import EduProvPage from './EduProvPage';
import UsefulLinksPage from './UsefulLinksPage';
import ConferencesPage from './ConferencesPage';
import mainImg from '../../../src/assets/bpoo/main.jpg'

export default function MainBPOOPage() {
    const listRef = useRef()
    const [titleList, setTitleList] = useState('')

    const changeTitleList = (title) => {
        setTitleList(title)
    }

    return (
        <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
        lg:max-w-[80rem] xl:p-0 md:gap-[2.5rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
            <Helmet>
                <title>Базовая профессиональная образовательная организация | Тольяттинский социально-педагогический колледж</title>
            </Helmet>
            <div className='w-full lg:rounded-[1.25rem] rounded-[0.71rem]'>
                <img src={mainImg} className='w-full' alt="БПОО ТСПК" />
            </div>
            <div className='w-full px-[2.14rem] py-[1.43rem] rounded-[0.71rem] shadow-newShad 
                lg:rounded-[2.5rem] lg:px-10 lg:py-5'>
                <p className='text-18'>Базовая профессиональная образовательная организация (БПОО) - профессиональная образовательная организация, обеспечивающая поддержку функционирования региональной системы профессионального образования инвалидов и лиц с ОВЗ в Самарской области. БПОО осуществляет методическое сопровождение организации и реализации профессионального образования в профессиональных образовательных организациях Самарской области.</p>
            </div>
            <HeadingInfoPage 
                listRef={listRef} 
                titleList={titleList} 
                titlePage='Базовая профессиональная образовательная организация'
                type="bpoo"    
            />
            <Routes>
                <Route path='documents' element={<DocsPage func={changeTitleList}/>}></Route>
                <Route path='material-provision' element={<ProvisionPage func={changeTitleList}/>}></Route>
                <Route path='education-provision' element={<EduProvPage func={changeTitleList}/>}></Route>
                <Route path='useful-links' element={<UsefulLinksPage func={changeTitleList}/>}></Route>
                <Route path='conferences' element={<ConferencesPage func={changeTitleList}/>}></Route>
            </Routes>
        </div> 
    )
}
