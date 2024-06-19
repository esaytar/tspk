import React from 'react'
import {Link} from "react-router-dom"
import girl from '../../src/assets/girl-404.png'
import ArrowBottom from '../../src/assets/icons/components/ArrowBottom'

export default function ErrorPage() {
    return (
        <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
        lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
            <div className='w-full flex justify-between flex-col lg:flex-row'>
                <img src={girl} alt="ошибка 404" />
                <div className='flex flex-col lg:gap-10 gap-[1.42rem] lg:p-10 py-[1.42rem]'>
                    <h1 className='text-mainBlue font-medium text-[6.25rem]'>404</h1>
                    <div className='flex flex-col lg:gap-5 gap-[0.71rem] text-grayMainText'>
                        <p className='font-semibold lg:text-[1.88rem] text-[1.93rem]'>Страница не найдена</p>
                        <p className='lg:text-[1.5rem] text-[1.36rem] leading-7'>Кажется, вы заблудились! Пожалуйста, проверьте правильность введенного адреса или вернитесь на главную страницу. Надеемся, что вы скоро найдете то, что ищете.</p>
                    </div>
                    <Link to="/" className='text-mainBlue flex gap-2.5 text-[1.5rem] items-center'>На главную <ArrowBottom style='stroke-mainBlue -rotate-90'/></Link>
                </div>
            </div>

        </div>
    )
}
