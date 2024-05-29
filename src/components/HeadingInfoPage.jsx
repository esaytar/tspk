import React from 'react'
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from 'react';
import ArrowBottom from '../assets/icons/components/ArrowBottom';

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
                <ul className={`${isOpened ? 'flex' : 'hidden'} absolute flex-col lg:px-10 lg:py-5 p-[1.43rem] bg-white text-mainBlue gap-5 rounded-[1.43rem] lg:rounded-[2.5rem] z-[15] mt-2.5 shadow-newShad`}>
                    <li><Link to="/basic-data">Основные сведения</Link></li>
                    <li><Link to="/structure-college">Структура и органы управления образовательной организацией</Link></li>
                    <li><a href="">Документы</a></li>
                    <li><a href="">Образование</a></li>
                    <li><a href="">Образовательные стандарты и требования</a></li>
                    <li><a href="">Руководство. Педагогический (научно-педагогический) состав</a></li>
                    <li><a href="">Материально-техническое обеспечение и оснащенность образовательного процесса</a></li>
                    <li><a href="">Стипендии и иные виды материальной поддержки</a></li>
                    <li><a href="">Платные образовательные услуги</a></li>
                    <li><a href="">Финансово-хозяйственная деятельность</a></li>
                    <li><a href="">Вакантные места для приема (перевода) обучающихся</a></li>
                    <li><a href="">Доступная среда</a></li>
                    <li><a href="">Международное сотрудничество</a></li>
                </ul>
            </div>
        </div>
    )
}
