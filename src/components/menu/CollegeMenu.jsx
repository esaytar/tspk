import React from 'react'
import {Link} from "react-router-dom"

export default function CollegeMenu({ulID, index, main, gap}) {
    const items = [
        [
            {
                value: 'Абитуриентам',
                isLink: false,
                link: ''
            },
            {
                value: 'Приемная комиссия',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Специальности',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Общежитие',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Пофамильный список подавших заявления',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Профориентация школьников',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Статистика поданных заявлений 2023',
                isLink: true,
                link: '/error'
            },
        ],
        [
            {
                value: 'Студентам',
                isLink: false,
                link: ''
            },
            {
                value: 'Расписание на каждый день',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Содействие трудоустройству выпускников',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Информация о вакантных местах для перевода',
                isLink: true,
                link: '/error'
            },
            {
                value: 'ЕГЭ 2024',
                isLink: true,
                link: '/error'
            },
        ],
        [
            {
                value: 'Преподавателям',
                isLink: false,
                link: ''
            },
            {
                value: 'Шаблоны документов',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Методические рекомендации преподавателям',
                isLink: true,
                link: '/error'
            },
            {
                value: 'Критерии назначения стимулирующих выплат',
                isLink: true,
                link: '/error'
            },
        ]
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} ${gap ? gap : ''} ${main}`}>
            {
                items.map((item, index) => (
                    <li key={index}>
                        <ul className={`${main} flex flex-col`}> 
                            {
                                item.map((i, index) => (
                                    <li key={index}>
                                        {i.isLink ? <Link to={i.link} className='text-white/60 hover:text-white'>{i.value}</Link> : <p>{i.value}</p>}
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))
            }
        </ul>
    )
}
