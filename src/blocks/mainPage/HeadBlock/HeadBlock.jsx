import React, {useRef} from 'react'
import Header from '../../../components/Header/Header'
import './HeadBlock.css'
import arrowLong from '../../../assets/icons/arrow-long.svg'
import BlueButton from '../../../components/BlueButton'
import videoBg from '../../../assets/video_bg.jpg'
import video from '../../../assets/video.mp4'

export default function HeadBlock() {
    const menuRef = useRef(null);

    return (
        <div className='picture w-full flex flex-col items-center lg:pt-10 lg:pb-[16rem] lg:px-[3rem] relative'>
            {/* <video loop autoPlay muted poster={videoBg} className='absolute top-0 left-0 -z-10 w-full h-full object-cover brightness-50'>
                <source src={video} type='video/mp4'/>
            </video> */}
            <Header menuRef={menuRef}/>
            <div className='text-white flex gap-[3.625rem] items-center w-full lg:max-w-[87.5rem] py-[9.7rem] lg:pt-[15rem] px-[1.88rem]'>
                <div className='w-full flex flex-col gap-10 lg:max-w-[29rem]'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-base lg:text-18 text-white/80'>Государственное автономное профессиональное образовательное учреждение Самарской области</p>
                        <p className='uppercase text-[2.14rem] leading-[120%] lg:text-[3rem] lg:leading-[3.52rem]'>Тольяттинский социально-педагогический колледж</p>
                    </div>
                    <div className='flex flex-col gap-5 lg-gap-[1.88rem] items-start leading-[1.32rem]'>
                        <BlueButton styles="px-[1.86rem] py-4 lg:px-9 lg:py-[1.125rem] rounded-[1.88rem] gap-18 text-[1.14rem]">
                            <a href="http://x927215g.beget.tech/index.html" target="_blank">Инвестируй в своё будущее</a>
                            <img src={arrowLong} alt="стрелка вправо" />
                        </BlueButton>
                        <button className='border-white border-[1px] px-[1.86rem] py-4 lg:px-9 lg:py-[1.125rem] rounded-[1.88rem] gap-18 flex text-[1.14rem]'>
                            Направления
                            <img src={arrowLong} className='rotate-90' alt="стрелка вниз" />
                        </button>
                    </div>
                </div>
                <div className='hidden lg:block w-full relative'>
                    <img src="https://i.mycdn.me/getVideoPreview?id=2754291698396&idx=1&type=39&tkn=YoYKFIhtGVnCN82LSTsOni2ChYs&fn=vid_x&quot;" alt="" />
                    <iframe className='absolute left-0 top-0 w-full h-full' src="https://vk.com/video_ext.php?oid=-174700694&id=456239521&hd=1" width="800" height="550" allow="encrypted-media; fullscreen; picture-in-picture;" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}
