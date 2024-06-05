import React from 'react'
import { Link } from "react-router-dom"

export default function BPOOMenu({ulID, index, main, liW}) {
    const items = [
        {
            classes: false,
            value: 'Документы',
            link: '/bpoo-docs'
        },
        {
            classes: true,
            value: 'Материально-техническое обеспечение обучающихся с ограниченными возможностями здоровья и инвалидностью',
            link: ''
        },
        {
            classes: true,
            value: 'Учебно-методическое обеспечение инклюзивного образования',
            link: ''
        },
        {
            classes: false,
            value: 'Конференции',
            link: ''
        },
        {
            classes: false,
            value: 'Полезные ссылки',
            link: ''
        },
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col  ${main}`}>
            {
                items.map((item, index) => (
                    <li className={`${item.classes && liW ? liW : ''} `} key={index}>
                        <Link to={item.link} className='text-white/60 hover:text-white'>
                            {item.value}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
