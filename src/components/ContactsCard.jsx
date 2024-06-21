import React from 'react'
import Phone from '../assets/icons/components/Phone'
import Mail from '../assets/icons/components/Mail'
import Mark from '../assets/icons/components/Mark'

export default function ContactsCard({name, firstNum, secondNum, thirdNum, mail, adress, link, mode, fillSVG}) {
    return (
        <div className={`contact-card flex flex-col items-center justify-center gap-5 p-[1.88rem] lg:w-1/2 shadow-newShad ${mode}`}>
            <p className='font-semibold text-18'>{name}</p>
            <ul className='flex flex-col gap-5'>
                <li className='flex gap-2.5 items-center'>
                    <Phone fill={fillSVG}/>
                    {firstNum}
                </li>
                <li className='flex gap-2.5 items-center'>
                    <Phone fill={fillSVG}/>
                    {secondNum}
                </li>
                {
                    thirdNum !== '' ? (
                        <li className='flex gap-2.5 items-center'>
                            <Phone fill={fillSVG}/>
                            {thirdNum}
                        </li>
                    ) : ''
                }
                <li className='flex gap-2.5 items-center'>
                    <Mail fill={fillSVG}/>
                    {mail}
                </li>
                <li className='flex gap-2.5 items-center'>
                    <Mark fill={fillSVG}/>
                    <a href={link} target='_blank' className='underline' rel="noopener">{adress}</a>
                </li>
            </ul>
        </div>
    )
}
