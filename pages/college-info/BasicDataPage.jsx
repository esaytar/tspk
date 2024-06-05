import React from 'react'
import { useState, useRef, useEffect } from 'react';
import HeadingInfoPage from '../../../src/components/HeadingInfoPage';
import LogoTSPK from '../../../src/assets/icons/components/LogoTSPK';
import InfoString from '../../../src/components/InfoString';
import {basicInfo} from '../../../src/data/collegeInfo.jsx'

export default function BasicDataPage({func}) {
    useEffect(() => {
        func('Основные сведения')
    }, [])

    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            <LogoTSPK styles='fill-grayMainText w-[79px] h-[59px]'/>
            {
                basicInfo.map((item, index) => (
                    <InfoString 
                        title={item.title}
                        key={index}
                    >
                        {Array.isArray(item.content) ? (
                            item.content.map((contentItem, contentIndex) => 
                                <div key={Date().now} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                            )
                        ) : (
                            <div>{item.content}</div>
                        )}
                    </InfoString>
                ))
            }
            <p className='text-[12px] text-grayMainText text-center lg:text-left'>Вся представленная на данной странице информация полностью соответствует Приказу Федеральной службы по надзору в сфере образования и науки от 14.08.2020 № 831 "Об утверждении Требований к структуре официального сайта образовательной организации в информационно-телекоммуникационной сети "Интернет" и формату представления информации" (Зарегистрированному 12.11.2020 № 60867)</p>
        </div>
    )
}
