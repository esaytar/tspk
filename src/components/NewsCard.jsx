import React from 'react'
import BlueButton from './BlueButton'
import newsImg from '../assets/news-img.jpg'

export default function NewsCard() {
    return (
        <div className='flex flex-col gap-5 rounded-[1rem] shadow-newShad lg:shadow-none p-[1.07rem] lg:p-0'>
            <img src={newsImg} alt="новость" className='rounded-[0.625rem] order-1' />
            <div className="flex flex-col gap-5 items-start">
                <div className="flex flex-col gap-2.5">
                    <p className='text-mainBlue'>13.03.2023</p>
                    <p className='text-grayMainText lg:text-18 text-[1.14rem]'>Открытие студенческого клуба РСМ</p>
                    <p className='text-grayMainText leading-[120%]'>Сегодня на базе нашего колледжа состоялось открытие студенческого клуба РСМ! </p>
                </div>
            </div>
            <BlueButton styles="order-2 self-center lg:self-start uppercase rounded-[1.88rem] px-6 py-3 text-[1rem] lg:text-[0.875rem] bg-transparent border-mainBlue border-[1px] text-mainBlue hover:text-white hover:bg-mainBlue">подробнее</BlueButton>
        </div>
    )
}
