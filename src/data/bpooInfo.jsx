import docPDF from '../assets/icons/doc_pdf.svg'
import pptxIco from '../assets/icons/pptx_icon.svg'
import playIco from '../assets/icons/play_icon.svg'
import LinkDataMode from './components/LinkDataMode'
import pic1 from '../assets/bpoo/001.jpg'
import pic2 from '../assets/bpoo/002.jpg'
import pic3 from '../assets/bpoo/003.jpg'
import pic4 from '../assets/bpoo/004.jpg'
import pic5 from '../assets/bpoo/005.jpg'
import pic6 from '../assets/bpoo/006.jpg'
import picture1 from '../assets/bpoo/008.jpg'
import picture2 from '../assets/bpoo/009.jpg'
import picture3 from '../assets/bpoo/010.jpg'
import picture4 from '../assets/bpoo/011.jpg'

export const docsInfo = [
    {
        title: 'Региональные документы',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/1.%20644r.pdf' text='Распоряжение Губернатора Самарской области от 05 ноября 2015 года № 644-р «Об утверждении Межведомственного комплексного плана мероприятий по организации инклюзивного образования и созданию специальных условий для получения профессионального образования инвалидами и лицами с ограниченными возможностями здоровья в Самарской области на 2015 - 2020 годы»'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/2.Rasp_306_%205_peredacha.pdf' text='Распоряжение министерства образования и науки Самарской области от 05 июня 2013 года № 306-р «Об утверждении Порядка передачи детям-инвалидам и инвалидам, обучавшимся на дому с использованием дистанционных образовательных технологий в образовательных учреждениях Самарской области, компьютерного оборудования для получения профессионального образования»'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/3.Rasporjazhenie_o_sozdanii_centrov.pdf' text='Распоряжение министерства образования и науки Самарской области от 11 ноября 2015 года № 736-р «О создании ресурсных учебно-методических центров по обучению лиц с ограниченными возможностями здоровья и инвалидов на базе государственных профессиональных образовательных организаций Самарской области»'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/4.attache_445099289.pdf' text='Письмо министерства образования и науки Самарской области от 24 марта 2016 года № МО-16-09-01/289-ту (О работе Портала информационной и методической поддержки инклюзивного среднего профессионального образования инвалидов и лиц с ограниченными возможностями здоровья http://spo.wil.ru/ )'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/5.Bazovaya_prof_org_2018.pdf' text='Распоряжение министерства образования и науки Самарской области от 30 мая 2018 года № 403-р «Об определении ГАПОУ СО «Тольяттинский социально-педагогический колледж» базовой профессиональной образовательной организацией, обеспечивающей поддержку региональной системы инклюзивного профессионального образования инвалидов»'/>
        ]
    },
    {
        title: 'Локальные документы',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/Polozenie_o_BPOO.pdf' text='Положение о БПОО'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/Plan_rab_BPOO.pdf' text='План работы БПОО'/>,
        ]
    }
]

export const provInfo = [
    {
        title: 'Документы',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/Nal_spec_sredstv_obuch_2018.pdf' text='Наличие специальных технических средств обучения студентов с инвалидностью и ОВЗ коллективного и индивидуального пользования'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/PoOVZ/Spravka_o_nal_spec_usl_2018.pdf' text='Справка о наличии специальных условий для получения образования обучающимися с ограниченными возможностями здоровья'/>,
        ]
    }
]

export const eduProvInfo = [
    {
        title: 'Документы',
        content: [
            <LinkDataMode image={docPDF} link='' text='Адаптированные образовательные программы'/>,
            <LinkDataMode image={docPDF} link='' text='Информационные материалы'/>,
            <LinkDataMode image={docPDF} link='' text='Повышение квалификации'/>,
        ]
    }
]

export const linksInfo = [
    {
        title: 'Ссылки',
        content: [
            <LinkDataMode image={docPDF} link='http://spo.wil.ru/apex/f?p=140:1:12256584596511:::1::' text='Портал информационной и методической поддержки инклюзивного среднего профессионального образования инвалидов и лиц с ограниченными возможностями здоровья'/>,
            <LinkDataMode image={docPDF} link='http://proforient.fmcspo.ru/' text='Федеральный методический центр СПО и ПО лиц с инвалидностью и ОВЗ'/>,
            <LinkDataMode image={docPDF} link='https://abilympicspro.ru/' text='Национальный чемпионат по профессиональному мастерству среди инвалидов и лиц с ограниченными возможностями здоровья «Абилимпикс»'/>,
            <LinkDataMode image={docPDF} link='https://www.spo-rudn.ru/' text='Экспертно-консультационное сопровождение деятельности профессиональных образовательных организаций, реализующих образовательные программы СПО и профессионального обучения для инвалидов и обучающихся с ОВЗ'/>,
            <LinkDataMode image={docPDF} link='https://cposo.ru/professionalnoe-obrazovanie-dlya-lits-s-ovz-i-invalidov' text='ЦПО Самарской области "Профессиональное образование для лиц с инвалидностью и ОВЗ"'/>,
        ]
    }
]

export const confInfo = [
    {
        text: 'Смотреть положение о конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Polozenie_konfere_2noyabry_2018.pdf',
        img: docPDF
    },
    {
        text: 'Пост релиз',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Post_reliz_2018.pdf',
        img: docPDF
    },
    {
        text: 'Программа конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Programma_konferencii_2018.pdf',
        img: docPDF
    },
    {
        text: 'Сборник конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Sbornik_2018.PDF',
        img: docPDF
    },
    {
        text: 'Проведение занятия по учебной практике по ПМ01 «Ввод и обработка цифровой информации» по профессии 09.01.03 «Мастер по обработке цифровой информации» с применением специальных технических средств в обучении студентов с инвалидностью и с ОВЗ.',
        person: ' Преподаватель: Кондратьева И.С.',
        link: 'https://youtu.be/Lg-yidC8XS0?si=0CJVcr8ogbgW7izb',
        img: playIco
    },
    {
        text: 'Проведение занятия по дисциплине «Физическая культура» с применением средств и методов коррекции и компенсации недостатков в физическом и психическом развитии студентов с инвалидностью и с ОВЗ.',
        person: ' Преподаватель: Малашенко А.В.',
        link: 'https://youtu.be/7khvlMrcCjk?si=oAusnqNCi0LHP0jV',
        img: playIco
    },
    {
        text: 'Мастер-класс «Использование элементов арт-терапии в психолого-педагогическом сопровождении студентов с инвалидностью и с ОВЗ (на примере песочной терапии)».',
        person: ' Оплачко Н.Н.. педагог-психолог',
        link: 'https://youtu.be/zINNImo76OA?si=CsINlkM1AcnicT6d',
        img: playIco
    },
    {
        text: 'Проведение фрагмента занятия по дисциплине «Основы проектирования баз данных» по специальности 09.02.04 «Информационные системы (по отраслям)» с применением дистанционных образовательных технологий в обучении студентов с ОВЗ для создания условий удаленного доступа.',
        person: ' Преподаватель: Кондурар Н.Н.',
        link: 'https://youtu.be/HnLhZj3Ryd0?si=Z8ysolw2HF77y34M',
        img: playIco
    }
]

export const confInfo2 = [
    {
        text: 'Смотреть программу конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Programma_konferencii.pdf',
        img: docPDF
    },
    {
        text: 'Смотреть положение о конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Polozenie_konferencyi.pdf',
        img: docPDF
    },
    {
        text: 'Пост-релиз',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Post_reliz_konf.pdf',
        img: docPDF
    },
    {
        text: 'Дьякова. Опыт организации обучения ОВЗ',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/01_Diakova.pdf',
        img: pptxIco
    },
    {
        text: 'Устименко. Индивидуальный образовательный маршрут как средство индивидуализации и дифференциации в профессиональной подготовке студентов с нарушениями ОДА',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/02_Ystimenko.pdf',
        img: pptxIco
    },
    {
        text: 'Емельянова. Особенности разработки учебно-методического обеспечения образовательной программы с учетом индивидуальных особенностей обучающихся с ОВЗ',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/03_Emelyanova.pdf',
        img: pptxIco
    },
    {
        text: 'Морозова. Особенности организации лекционно-семинарских занятий со студентами с нарушением слуха в процессе изучения дисциплин профессионального цикла',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/04_Morozova.pdf',
        img: pptxIco
    },
    {
        text: 'Старикова. Особенности организации и реализации учебной и производственной практики',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/05_Starikova.pdf',
        img: pptxIco
    },
    {
        text: 'Горбунова. Предпрофильная подготовка обучающихся 9-х классов – детей-инвалидов и детей с ОВЗ',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/06_Gorbunova.pdf',
        img: pptxIco
    },
    {
        text: 'Назарова. Проблемы социализации студентов-инвалидов и пути их решения',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/07_Nazarova.pdf',
        img: pptxIco
    },
    {
        text: 'Печерских. Содействие в трудоустройстве: от участия - до практического исполнения',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/08_Pecherskix.pdf',
        img: pptxIco
    },
    {
        text: 'Горолатова. Организация образовательного пространства для инвалидов и лиц с ограниченными возможностями здоровья для получения профессионального образования в ГБПОУ «Тольяттинский социально-экономический колледж»',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/09_Gorolatova.pdf',
        img: pptxIco
    },
    {
        text: 'Центр занятости. Рынок труда и программы центра занятости населения, применяемые для сопровождения граждан с ограниченными возможностями для успешного их трудоустройства',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/10_Centr_zanyatosti.pdf',
        img: pptxIco
    },
    {
        text: 'СБОРНИК КОНФЕРЕНЦИИ',
        link: 'https://tspk.org/images/Sbornik_konf_2017.pdf',
        img: docPDF
    },
]

export const confPic = [pic1, pic2, pic3, pic4, pic5, pic6]

export const confPic2 = [
    {
        img: picture1,
        text: 'Пленарная часть'
    },
    {
        img: picture2,
        text: 'Круглый стол'
    },
    {
        img: picture3,
        text: 'Семинар практикум'
    },
    {
        img: picture4,
        text: 'Выставка'
    },
]