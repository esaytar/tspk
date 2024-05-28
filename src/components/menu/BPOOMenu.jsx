import React from 'react'

export default function BPOOMenu({ulID, index, main, liW}) {
    const items = [
        {
            classes: true,
            value: 'Материально-техническое обеспечение обучающихся с ограниченными возможностями здоровья и инвалидностью'
        },
        {
            classes: true,
            value: 'Учебно-методическое обеспечение инклюзивного образования'
        },
        {
            classes: false,
            value: 'Конференции'
        },
        {
            classes: false,
            value: 'Полезные ссылки'
        },
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col  ${main}`}>
            {
                items.map((item, index) => (
                    <li className={`${item.classes && liW ? liW : ''} `} key={index}><a href="" className='text-white/60 lg:text-current hover:text-white'>{item.value}</a></li>
                ))
            }
        </ul>
    )
}
