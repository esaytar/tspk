import React, {useRef, useState} from 'react'
import { Route, Routes } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import HeadingInfoPage from '../../../src/components/HeadingInfoPage';
import BasicDataPage from './BasicDataPage';
import ManagementStructurePage from './ManagementStructurePage';
import DocumentsPage from './DocumentsPage';

export default function MainInfoPage() {
    const listRef = useRef()
    const [titleList, setTitleList] = useState('')

    const changeTitleList = (title) => {
        setTitleList(title)
    }

    return (
        <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
        lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
            <Helmet>
                <title>Сведения об образовательной организации | Тольяттинский социально-педагогический колледж</title>
            </Helmet>
            <HeadingInfoPage listRef={listRef} titleList={titleList} titlePage='Сведения об образовательной организации'/>

            <Routes>
                <Route path='basic-data' element={<BasicDataPage func={changeTitleList}/>}></Route>
                <Route path='structure-college' element={<ManagementStructurePage func={changeTitleList}/>}></Route>
                <Route path='documents' element={<DocumentsPage func={changeTitleList}/>}></Route>
            </Routes>
        </div>
    )
}
