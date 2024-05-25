import React from 'react'
import ContactsCard from '../../components/ContactsCard'

export default function AllContactsBlock() { 
    const contactsInfo = [
        {
            num: 1,
            name: '1 КОРПУС (Мурысева 84)',
            phoneNumber1: '8 (8482) 24-65-92 - Приемная комиссия',
            phoneNumber2: '8 (8482) 24-10-25 - Вахта 1 корпуса',
            phoneNumber3: '8 (8482) 24-30-54 - Приемная директора',
            email: 'so_tspk@samara.edu.ru',
            address: '445012, Самарская область, г. Тольятти, ул. Мурысева, 84',
            link: 'https://yandex.ru/maps/-/CDbsMB6u',
            mode: 'bg-mainBlue text-white rounded-leftMobile lg:rounded-leftCard',
            fill: 'fill-white'
        },
        {
            num: 2,
            name: '2 КОРПУС (Ленинградская 28)',
            phoneNumber1: '8 (8482) 48-20-93 - Вахта 2 корпуса (очное ФК, АФК и заочное отделение)',
            phoneNumber2: '8 (8482) 28-36-44 - Секретарь учебной части ФК, АФК',
            phoneNumber3: '',
            email: 'college.korpys2@yandex.ru - Секретарь учебной части ФК, АФК',
            address: '445010, Самарская область, г. Тольятти, ул. Ленинградская, 28',
            link: 'https://yandex.ru/maps/-/CDbsMY6H',
            mode: 'bg-white text-grayMainText rounded-rightMobile lg:rounded-rightCard',
            fill: 'fill-grayMainText'
        },
    ]

    return (
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex w-full flex-col lg:flex-row'>
                {
                    contactsInfo.map((item) => (
                        <ContactsCard 
                            key={item.num}
                            name={item.name}
                            firstNum={item.phoneNumber1}
                            secondNum={item.phoneNumber2}
                            thirdNum={item.phoneNumber3}
                            mail={item.email}
                            adress={item.address}
                            link={item.link}
                            mode={item.mode}
                            fillSVG={item.fill}
                        />
                    ))
                }
            </div>
            <p className='text-center text-grayMainText'>Для соединения с остальными службами необходимо позвонить на Вахту и сообщить службу для соединения. (Например: соедините меня с кабинетом 104) Заочное отделение находится во 2 корпусе, Ленинградская 28 (позвонить на вахту и попросить соединить с методистом заочного отделения) </p>
        </div>    
    )
}
