import React, {useEffect, useRef, useState} from 'react'
import { Helmet } from 'react-helmet-async';
import pyramid from '../../src/assets/icons/pyramid.png'
import ball from '../../src/assets/icons/ball.png'
import book from '../../src/assets/icons/book.png'
import comp from '../../src/assets/icons/comp.png'
import handStud from '../../src/assets/icons/hand-stud.png'
import hands from '../../src/assets/icons/hand.png'
import horse from '../../src/assets/icons/horse.png'
import demPreview from '../../src/assets/dem-preview.jpg'
import AccordionDem from '../../src/components/AccordionDem';

export default function DemExamPage() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const videos = [
        {
            title: 'Дошкольное образование',
            img: pyramid,
            videos: ''
        },
        {
            title: 'Специальное дошкольное образование',
            img: horse,
            videos: ''
        },
        {
            title: 'Физическая культура, спорт и фитнес',
            img: ball,
            videos: [
                {
                    title: '06.2024 - ДЭ Физическая культура спорт и фитнес',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240158&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Физическая культура спорт и фитнес',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240154&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Физическая культура спорт и фитнес',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240151&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Физическая культура спорт и фитнес',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240150&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Физическая культура спорт и фитнес',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240146&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Физическая культура спорт и фитнес',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240143&hd=2'
                },
            ]
        },
        {
            title: 'Социальная работа',
            img: hands,
            videos: [
                {
                    title: '06.2024 - ДЭ Социальная работа',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240161&hd=2'
                }
            ]
        },
        {
            title: 'Дополнительное образование детей и взрослых',
            img: handStud,
            videos: [
                {
                    title: '06.2024 - ДЭ Педагог дополнительного образования',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240156&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Педагог дополнительного образования',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240153&hd=2'
                },
            ]
        },
        {
            title: 'Веб-технологии',
            img: comp,
            videos: [
                {
                    title: '06.2024 - ДЭ Информационные системы и программирование',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240152&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Информационные системы и программирование',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240149&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Информационные системы и программирование',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240147&hd=2'
                },
            ]
        },
        {
            title: 'Преподавание в младших классах',
            img: book,
            videos: [
                {
                    title: '06.2024 - ДЭ Преподавание в начальных классах',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240160&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Преподавание в начальных классах',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240159&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Преподавание в начальных классах',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240155&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Преподавание в начальных классах',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240148&hd=2'
                },
                {
                    title: '06.2024 - ДЭ Преподавание в начальных классах',
                    url: 'https://vk.com/video_ext.php?oid=-174700694&id=456240145&hd=2'
                },
            ]
        },
    ]

    return (
        <>
            <Helmet>
                <title>Демонстрационный экзамен | Тольяттинский социально-педагогический колледж</title>
            </Helmet>
            <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
            lg:max-w-[80rem] xl:p-0 md:gap-[2.5rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
                <div className="w-full rounded-[2.5rem] py-5 px-10 shadow-newShad text-18">
                    Демонстрационный экзамен (ДЭ) – это форма аттестации по образовательным программам среднего профессионального образования, которая проводится преимущественно в форме практических заданий в условиях реальных или смоделированных производственных процессов, направленная на определение уровня освоения экзаменуемым образовательной программы и степени сформированности профессиональных знаний, умений и навыков.
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        videos.map((item, index) => (
                            <AccordionDem 
                                key={index}
                                title={item.title}
                                img={item.img}
                                index={index}
                                activeIndex={activeIndex}
                                onAccordionClick={handleAccordionClick}
                            >
                                {Array.isArray(item.videos) && (
                                    item.videos.map((i, index) => (
                                        <swiper-slide>
                                            <div className='w-full flex flex-col gap-2.5' key={index}>
                                                <div className='w-full rounded-[1.25rem] relative overflow-hidden'>
                                                    <img src={demPreview} alt="превью видео" className='w-full' width='' />
                                                    <iframe className='w-full absolute left-0 top-0 h-full' src={i.url} height='480' allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                                                </div>
                                                <div className='text-mainBlue self-center'>{i.title}</div>
                                            </div>
                                        </swiper-slide>
                                    ))
                                )}
                            </AccordionDem>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}
