import React, {useEffect, useRef} from 'react'
import styles from '../dem.module.css'
import { register } from 'swiper/element/bundle'

register();

export default function AccordionDem({title, img, children, activeIndex, onAccordionClick, index}) {
    const isActive = index === activeIndex

    const swiperRef = useRef(null)
    useEffect(() => { 
        if (!children) return
        const swiperContainer = swiperRef.current
        if (!swiperContainer) return
        const params = {
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                940: {
                    slidesPerView: 2,
                }
            },
            injectStyles: [`
                .swiper {display: flex !important; flex-direction: column; gap: 2rem; overflow: visible !important;}
                @media (min-width: 1024px) {.swiper {gap: 50px;}}
                .swiper-pagination {position: relative !important; bottom: 0; top: 0; cursor: inherit !important; display: flex; gap: 10px; align-items: center; justify-content: center;}
                .swiper-pagination-bullet {width: 10px; height: 10px; margin: 0 !important; background: rgba(23, 99, 244, 0.8) !important;}
                .swiper-pagination-bullet-active {background: #1763F4 !important;}
            `]
        }
        Object.assign(swiperContainer, params)
        swiperContainer.initialize()
    }, [])

    return (
        <div className='flex flex-col gap-5 relative'>
            <div className={`${styles.cont} w-full justify-between flex lg:rounded-[2.5rem] px-[2.14rem] rounded-[0.71rem] lg:px-10 py-5 shadow-newShad cursor-pointer items-center`}
                onClick={() => onAccordionClick(index)}>
                <div className='flex gap-2.5 items-center text-mainBlue text-18'>
                    <img src={img} alt="дошкольники" width='30'/>
                    {title}
                </div>
                <span className={`${styles.plus}`}></span>
            </div>
            <div className={`w-full rounded-[1.25rem] ${children ? 'lg:p-10 px-[2.14rem] py-[1.43rem]' : 'px-[2.14rem] lg:px-10 py-5'} shadow-newShad ${isActive ? 'block' : 'pointer-events-none -z-100 absolute opacity-0'}`}>
                <div className='w-full overflow-hidden'>
                    {children ? (
                            <swiper-container
                            init="false"
                            ref={swiperRef}
                            grab-cursor="true"
                            slides-per-view="2"
                            pagination="true"
                            space-between="10"
                        >
                            {children}
                        </swiper-container>
                    ) : (
                        <p className='text-center text-mainBlue w-full'>Экзамен ещё не начался</p>
                    )}
                </div>
            </div>
        </div>
    )
}
