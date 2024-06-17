import React, { useState, useEffect } from 'react'
import ArrowBottom from '../assets/icons/components/ArrowBottom';
import DataCollegeMenu from '../components/menu/DataCollegeMenu'
import BPOOMenu from './menu/BPOOMenu';
import { useLocation } from 'react-router-dom';

export default function HeadingInfoPage({listRef, titleList, titlePage, type}) {
    const [isOpened, setIsOpened] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsOpened(false)
    }, [location])

    useEffect(() => {
        function handleClickOutside(event) {
            if (listRef.current && !listRef.current.contains(event.target)) {
                setIsOpened(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, []);

    let listStyles = `${isOpened ? 'flex' : 'hidden'} absolute flex-col  p-[1.43rem] bg-white gap-5 rounded-[1.43rem]
    lg:px-10 lg:py-5 lg:rounded-[2.5rem] z-[15] mt-2.5 shadow-newShad`

    return (
        <div className='w-full flex justify-between items-center flex-col lg:flex-row gap-[1.43rem]'>
            <h1 className='lg:text-[1.81rem] text-grayMainText font-semibold lg:w-10/12 text-[1.28rem]'>{titlePage}</h1>
            <div ref={listRef} className='w-full relative text-18'>
                <div className='flex w-full justify-between border-mainBlue/50 border-[2px] rounded-[40px] px-[1.71rem] py-[0.86rem] items-center 
                    lg:px-10 lg:py-5 cursor-pointer' onClick={() => {setIsOpened(!isOpened)}}>
                    <p className='text-mainBlue '>{titleList}</p>
                    <ArrowBottom style='stroke-mainBlue w-[23px] h-[12px]'/> 
                </div>
                {type === 'bpoo' && <BPOOMenu color="text-mainBlue" main={listStyles}/>}
                {type === 'main' && <DataCollegeMenu color="text-mainBlue" main={listStyles}/>}
            </div>
        </div>
    )
}
