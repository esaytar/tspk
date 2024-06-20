import React, {useState, useRef} from 'react'
import { Route, Routes } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import HeadingInfoPage from '../../../src/components/HeadingInfoPage';
import PatternDocsPage from './PatternDocsPage';
import CriteriaPage from './CriteriaPage';
import InstructionsPage from './InstructionsPage';

export default function MainTeacthersPage() {
    const listRef = useRef()
    const [titleList, setTitleList] = useState('')

    const changeTitleList = (title) => {
        setTitleList(title)
    }

    return (
        <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
        lg:max-w-[80rem] xl:p-0 md:gap-[2.5rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
            <Helmet>
                <title>Преподавателям | Тольяттинский социально-педагогический колледж</title>
            </Helmet>

            <HeadingInfoPage
                listRef={listRef} 
                titleList={titleList} 
                titlePage='Преподавателям'
                type="teachers" 
            />

            <Routes>
                <Route path='docs' element={<PatternDocsPage func={changeTitleList}/>}></Route>
                <Route path='criteria-payments' element={<CriteriaPage func={changeTitleList}/>}></Route>
                <Route path='instructions' element={<InstructionsPage func={changeTitleList}/>}></Route>
            </Routes>
        </div>
    )
}
