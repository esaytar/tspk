import React from 'react'

export default function CollegeMenu({ulID, index, main, gap}) {
    const items = [
        [
            {
                value: 'Абитуриентам',
                isLink: false
            },
            {
                value: 'Приемная комиссия',
                isLink: true
            },
            {
                value: 'Специальности',
                isLink: true
            },
            {
                value: 'Общежитие',
                isLink: true
            },
            {
                value: 'Пофамильный список подавших заявления',
                isLink: true
            },
            {
                value: 'Профориентация школьников',
                isLink: true
            },
            {
                value: 'Статистика поданных заявлений 2023',
                isLink: true
            },
        ],
        [
            {
                value: 'Студентам',
                isLink: false
            },
            {
                value: 'Расписание на каждый день',
                isLink: true
            },
            {
                value: 'Содействие трудоустройству выпускников',
                isLink: true
            },
            {
                value: 'Информация о вакантных местах для перевода',
                isLink: true
            },
            {
                value: 'ЕГЭ 2024',
                isLink: true
            },
        ],
        [
            {
                value: 'Преподавателям',
                isLink: false
            },
            {
                value: 'Шаблоны документов',
                isLink: true
            },
            {
                value: 'Методические рекомендации преподавателям',
                isLink: true
            },
            {
                value: 'Критерии назначения стимулирующих выплат',
                isLink: true
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
                                        {i.isLink ? <a href="" className='!text-white/60 hover:text-white'>{i.value}</a> : <p>{i.value}</p>}
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
