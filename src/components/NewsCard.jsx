import React from 'react'
import newsImg from '../assets/news-img.jpg'

export default function NewsCard({text, date, link}) {
    return (
        <div className='flex flex-col gap-5 rounded-[1rem] shadow-newShad lg:shadow-none p-[1.07rem] lg:p-0'>
            <img src={newsImg} alt="новость" className='rounded-[0.625rem] order-1' />
            <div className="flex flex-col gap-5 items-start">
                <div className="flex flex-col gap-2.5">
                    <p className='text-mainBlue'>{date}</p>
                    <p className='text-grayMainText lg:text-18 text-[1.14rem]'>Открытие студенческого клуба РСМ</p>
                    <p className='slider-item__text text-grayMainText leading-[120%]'>{text}</p>
                </div>
            </div>
            <a href={link} target='_blank' className="order-2 self-center lg:self-start uppercase rounded-[1.88rem] px-6 py-3 text-[1rem] lg:text-[0.875rem] duration-[.1s] flex items-center justify-center border-mainBlue border-[1px] text-mainBlue hover:text-white hover:bg-mainBlue">подробнее</a>
        </div>
    )
}
