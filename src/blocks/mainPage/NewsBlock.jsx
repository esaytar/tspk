import React, {useEffect, useRef} from 'react'
import NewsCard from '../../components/NewsCard'
import { register } from 'swiper/element/bundle'

register();

export default function NewsBlock() {
    
    // const url = 'https://api.vk.com/method/wall.get?owner_id=174700694&domain=tspk63&offset=1&count=5&access_token=664330a8664330a8664330a8fa6638f9f566643664330a8047988401142e3fe7c189a9a&filter=owner&v=5.236'
   
    useEffect(() => {
        
        async function fetchData() {
            try {
                const response = await fetch('https://esaytar.github.io/tspk/data.json', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                let data = await response.json();
                console.log('Data:', data); // Отладочное сообщение для проверки данных
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        }
        fetchData();
    }, [])
    
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            breakpoints: {
                580: {
                    slidesPerView: 2,
                },
                940: {
                  slidesPerView: 3,
                }
            },
            injectStyles: [
            `
                .swiper {display: flex !important; flex-direction: column; gap: 2rem; overflow: visible !important;}
                @media (min-width: 1024px) {.swiper {gap: 50px;}}
                .swiper-pagination {position: relative !important; bottom: 0; top: 0; cursor: inherit !important; display: flex; gap: 10px; align-items: center; justify-content: center;}
                .swiper-pagination-bullet {width: 10px; height: 10px; margin: 0 !important; background: rgba(23, 99, 244, 0.8) !important;}
                .swiper-pagination-bullet-active {background: #1763F4 !important;}

            `
          ]
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    const convertToNormalDate = (num) => {
        const date = new Date(num * 1000)
        const readableDate = date.toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        return readableDate
    }

    return (
        <div className='flex flex-col lg:gap-10 gap-[1.43rem] w-full'> 
            <p className='text-grayText text-[1.29rem] lg:text-[1.81rem] font-semibold '>Новости</p>
            <div className='flex flex-col items-center gap-[3.125rem]'> 
                <div className='lg:overflow-hidden w-full'>
                    <swiper-container
                        init="false"
                        grab-cursor="true"
                        ref={swiperRef}
                        slides-per-view="1"
                        pagination="true"
                        space-between="10"
                        >
                            {
                                data.items.map((item, index) => (
                                    <swiper-slide>
                                        <NewsCard
                                            key={index}
                                            text={item.text}
                                            date={convertToNormalDate(item.date)}
                                            link={`https://vk.com/tspk63?w=wall${item.owner_id}${id}`}
                                        /> 
                                    </swiper-slide>
                                ))
                            }
                    </swiper-container>
                </div>
            </div>
        </div>
    )
}
