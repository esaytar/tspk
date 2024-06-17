import React from 'react'
import BlueButton from './BlueButton'

export default function QuestionForm() {
    return (
        <form className='flex flex-col lg:gap-[1.88rem] gap-[1.43rem] lg:p-[1.88rem] lg:w-[70%] py-[2.14rem] px-[1.57rem]' onSubmit={(e) => { e.preventDefault();}}>
            <p className='text-mainBlue text-[1.31rem] font-semibold text-center'>Задать вопрос профессиональному колледжу</p>
            <div className='flex flex-col lg:gap-5 gap-[1.43rem]'>
                <input type="text" placeholder='Имя' className='bg-mainGray/5 p-[1.1rem] rounded-[1.25rem] text-18'/>
                <input type="email" placeholder='Электронная почта' className='bg-mainGray/5 p-[1.1rem] rounded-[1.25rem] text-18'/>
                <input type="tel" placeholder='Номер телефона' className='bg-mainGray/5 p-[1.1rem] rounded-[1.25rem] text-18'/>
                <textarea name="" id="" placeholder='Сообщение' className='bg-mainGray/5 p-[1.1rem] rounded-[1.25rem] resize-none text-18'></textarea>
            </div>
            <BlueButton styles='p-[1.1rem] text-white rounded-[1.25rem] text-18' reload={() => {location.reload()}}>Отправить</BlueButton>
        </form>
    )
}
