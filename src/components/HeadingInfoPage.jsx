import React from 'react'
import { useState, useRef, useEffect } from 'react';
import ArrowBottom from '../assets/icons/components/ArrowBottom';
import DataCollegeMenu from '../components/menu/DataCollegeMenu'

export default function HeadingInfoPage({listRef, titleList}) {
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            if (listRef.current && !listRef.current.contains(event.target)) {
                setIsOpened(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, []);

    return (
        <div className='w-full flex justify-between items-center flex-col lg:flex-row gap-[1.43rem]'>
            <h1 className='lg:text-[1.81rem] text-grayMainText font-semibold lg:w-10/12 text-[1.28rem]'>Сведения об образовательной организации</h1>
            <div ref={listRef} className='w-full relative text-18'>
                <div className='flex w-full justify-between border-mainBlue/50 border-[2px] rounded-[40px] px-[1.71rem] py-[0.86rem] items-center 
                lg:px-10 lg:py-5 cursor-pointer' onClick={() => {setIsOpened(!isOpened)}}>
                    <p className='text-mainBlue '>{titleList}</p>
                    <ArrowBottom style='stroke-mainBlue w-[23px] h-[12px]'/> 
                </div>
                <DataCollegeMenu color="text-mainBlue" main={`${isOpened ? 'flex' : 'hidden'} absolute flex-col  p-[1.43rem] bg-white gap-5 rounded-[1.43rem]
                    lg:px-10 lg:py-5 lg:rounded-[2.5rem] z-[15] mt-2.5 shadow-newShad`}/>
            </div>
        </div>
    )
}
