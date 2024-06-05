import React from 'react'
import { Link } from "react-router-dom"

export default function DataCollegeMenu({main, liW, ulID, index, color}) {
    const items = [
        {
            classes: false,
            value: 'Основные сведения',
            link: '/infos/basic-data'
        },
        {
            classes: true,
            value: 'Структура и органы управления образовательной организацией',
            link: '/infos/structure-college'
        },
        {
            classes: false,
            value: 'Документы',
            link: '/infos/documents'
        },
        {
            classes: false,
            value: 'Образование',
            link: ''
        },
        {
            classes: false,
            value: 'Образовательные стандарты и требования',
            link: ''
        },
        {
            classes: true,
            value: 'Руководство. Педагогический (научно-педагогический) состав',
            link: ''
        },
        {
            classes: true,
            value: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            link: ''
        },
        {
            classes: true,
            value: 'Стипендии и иные виды материальной поддержки',
            link: ''
        },
        {
            classes: false,
            value: 'Платные образовательные услуги',
            link: ''
        },
        {
            classes: false,
            value: 'Финансово-хозяйственная деятельность',
            link: ''
        },
        {
            classes: true,
            value: 'Вакантные места для приема (перевода) обучающихся',
            link: ''
        },
        {
            classes: false,
            value: 'Доступная среда',
            link: ''
        },
        {
            classes: false,
            value: 'Международное сотрудничество',
            link: ''
        },
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col ${main}`}>
            {
                items.map((item, index) => (
                    <li className={`${item.classes && liW ? liW : ''} w-fit`} key={index}>
                        <Link to={item.link} className={`${color === undefined ? 'text-white/60 hover:text-white' : color}`}>
                            {item.value}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
