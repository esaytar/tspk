import React, {useEffect} from 'react'
import {confInfo, confInfo2, confPic, confPic2} from '../../../src/data/bpooInfo'
import LinkDataMode from '../../../src/data/components/LinkDataMode'
import docPDF from '../../../src/assets/icons/doc_pdf.svg'

export default function ConferencesPage({func}) {
    useEffect(() => {
        func('Конференции')
    }, [])

    return (
        <>
            <div className='flex items-center justify-center px-10 py-5 rounded-[2.5rem] shadow-newShad'>
                <p className='text-18 text-center'>II Межрегиональная научно-практическая конференция <br /> «ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ ЛИЦ С ИНВАЛИДНОСТЬЮ И ОВЗ <br /> (презентация опыта и лучших практик)», <br /> 2 ноября 2018 г.</p>
            </div>
            <div className='flex flex-col gap-5 text-18'>
                {confInfo.map((item, index) => (
                    <LinkDataMode
                        key={index} 
                        text={item.text}
                        image={item.img}
                        link={item.link}
                        alter={item.img == docPDF ? 'PDF-файл' : 'Видеофайл'}
                        person={item.person}
                    />
                ))}
            </div>
            <div className='flex items-center justify-center p-5 rounded-[1.25rem] shadow-newShad'>
                <div className='grid grid-rows-2 grid-cols-3 w-full rounded-[0.63rem] gap-0 overflow-hidden'>
                    {confPic.map((item, index) => (
                        <img src={item} alt="конференция" key={index} />
                    ))}
                </div>
            </div>

            <div className='flex items-center justify-center px-10 py-5 rounded-[2.5rem] shadow-newShad'>
                <p className='text-18 text-center'>I Межрегиональная научно-практическая конференция <br /> «ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ ЛИЦ С ИНВАЛИДНОСТЬЮ И ОВЗ <br /> (презентация опыта и лучших практик)», <br /> 23 марта 2018 г. <br /> г. Тольятти</p>
            </div>
            <div className='flex flex-col gap-5 text-18'>
                {confInfo2.map((item, index) => (
                    <LinkDataMode
                        key={index} 
                        text={item.text}
                        image={item.img}
                        link={item.link}
                        alter={item.img == docPDF ? 'PDF-файл' : 'Презентация'}
                    />
                ))}
            </div>
            <div className='grid sm:grid-rows-2 sm:grid-cols-2 gap-[1.3rem] lg:gap-10 w-full text-18 text-mainBlue'>
                {confPic2.map((item, index) => (
                    <div className='rounded-[1.25rem] p-5 flex flex-col gap-5 shadow-newShad items-center' key={index}>
                        <img src={item.img} alt="фотография мероприятия" className='rounded-[5px]' />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}