import doc from '../assets/icons/doc_icon.svg'
import docPDF from '../assets/icons/doc_pdf.svg'
import pptx from '../assets/icons/pptx_icon.svg'
import LinkDataMode from './components/LinkDataMode'
import MoreLinksMode from './components/MoreLinksMode'
import UsualDataMode from './components/UsualDataMode'
import LogoTSPK from '../assets/icons/components/LogoTSPK'

export const patternsDocs = [
    {
        title: 'Методический раздел',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_RP.doc' text='Шаблон рабочей программы дисциплины (2024 год)'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_PM.doc' text='Шаблон рабочей программы профессионального модуля (2024 год)'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablom_promezutochnoy_attestacii.doc' text='Шаблон программы промежуточной аттестации (05.09.2017)'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/d/WxWZvr1eckm9R' text='Шаблон комплекта оценочных средств экзамена (квалификационного)'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_texnolog_kart.doc' text='Шаблон комплекта технологических карт'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/8cQcW1kVuJfeWw' text='Шаблон методических указаний по учебной и производственной практике'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_MY_po_Sam_rab_stud.doc' text='Шаблон методических указаний по самостоятельной работе студентов'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/My_po_prakt_zan.doc' text='Шаблон методических указаний по выполнению заданий практических занятий'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/ptZu2g-5qofIwQ' text='Шаблон ФОС по ПМ'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/emDPsnJSHMHsgA' text='Шаблон ФОС по УД'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/ILLll0Jpep5MFg' text='Шаблон ФОС по общеобразовательной подготовке'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/lqKjZRbRsAdLXQ' text='Шаблон оформления перечня электронных образовательных ресурсов по УД/МДК"'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Pasport_uch_kab.doc' text='Паспорт учебного кабинета'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/veduziykollege/Shablon_prakt_zan_na_pr.doc' text='План работы учебного кабинета'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/veduziykollege/Shablon_prakt_zan_na_pr.doc' text='Шаблон практическое занятие на производстве'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_stepend.doc' text='Шаблон стипендиальной ведомости'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/shablon_ved_ekzamena.doc' text='Шаблон ведомость экзамена/зачета/дифференцированного зачета'/>,
            <LinkDataMode image={pptx} link='https://tspk.org/images/Shablon/Korporativnii_shablon_tspk.potx' text='Шаблон корпоративного дизайна презентации (Power Point 2007/10/13)'/>,
            <LinkDataMode image={pptx} link='https://tspk.org/images/Shablon/Korporativnii_shablon_tspk.pot' text='Шаблон корпоративного дизайна презентации (Power Point более ранних версий XP/2003)'/>,
            <LinkDataMode image={pptx} link='https://tspk.org/images/Shablon/Korporativnii_shablon_tspk2.potx' text='Новый шаблон корпоративного дизайна презентации (24.01.2018)'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_programma_dualnogo_obuchenia.doc"' text='Шаблон программы дуального обучения'/>,
        ]
    },
    {
        title: 'Шаблоны приказов',
        content: [
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/9LlWm7Fbl3RZ6g' text='Приказ о выполнении индивидуальных проектов обучающихся'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/KPYyKZkEa4KQvQ' text='Приказ о закреплении тем и руководителей курсовых работ'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/7RreMr4r10ljdg' text='Приказ о назначении рецензентов'/>,
            <LinkDataMode image={docPDF} link='https://yadi.sk/i/wYxdiWJbMkWpMA' text='Приказ об организации и проведении практики'/>,
        ]
    },
    {
        title: 'Мультимедиа',
        content: [
            <LogoTSPK styles='fill-grayMainText'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/GAPOU_TSPK_log.png' text='Официальный логотип ГАПОУ ТСПК + белый вариант'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/GAPOU_TSPK_log_bez_nazvania.png' text='Официальный логотип (без названия ГАПОУ) + белый вариант'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/GAPOU_TSPK_log2.jpg' text='Официальный логотип с приемной комиссией'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Logo_TSPK__big_blue.png' text='Только логотип (синий)'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Logo_TSPK__big_white.png' text='Только логотип (белый)'/>,
            <LinkDataMode image={docPDF} link='https://disk.yandex.ru/i/D2JoN5X9Yz4ZPQ' text='Новый шаблон сертификата, грамоты, диплома + Шрифт Play | Посмотреть шаблон'/>,
        ]
    },
    {
        title: 'Оплата труда',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/oficial_dokument_2023/prepodavatel_list_samoanaliza.docx' text='Листы самоанализа (обновлено 01.08.2023)'/>,
    },
    {
        title: 'Административно-управленческий раздел',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_ped_otd.doc' text='Шаблон Протокол педагогического совета отделения'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Shablon/Shablon_stipendia_vedomosty.doc' text='Шаблон стипендиальной ведомости'/>,
        ]
    }
]

export const criteriInfo = [
    {
        title: 'Критерии назначения стимулирующих выплат',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/oficial_dokument_2020/New_kriterii_stimul_viplat_prepodavateliam.docx' text='Новые критерии назначения стимулирующих выплат'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/oficial_dokument_2020/Prikaz_new_stimus_prepod.pdf' text='Приказ МОиН Самарской области об изменении перечня критериев, позволяющих оценить результативность и качество работы (эффективность труда) работников'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/oficial_dokument_2020/razyasnenia_stmul_viplat_prepod.pdf' text='Разъяснения МОиН Самарской области'/>,
        ]
    }
]