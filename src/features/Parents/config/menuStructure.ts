export interface MenuItem {
    title: string;
    href?: string;
    children?: MenuItem[];
    category?: 'important' | 'national' | 'consulting' | 'resources' | 'other';
}

export const categoryConfig = {
    important: {
        title: 'Важная информация',
        icon: '⚠️',
        gradient: 'from-red-400 to-orange-500',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-700'
    },
    national: {
        title: 'Национальные проекты',
        icon: '🇷🇺',
        gradient: 'from-blue-400 to-indigo-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700'
    },
    consulting: {
        title: 'Консультационная помощь',
        icon: '💬',
        gradient: 'from-purple-400 to-pink-500',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-700'
    },
    resources: {
        title: 'Полезные ресурсы',
        icon: '📚',
        gradient: 'from-green-400 to-teal-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700'
    },
    other: {
        title: 'Дополнительно',
        icon: '📌',
        gradient: 'from-gray-400 to-gray-600',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-200',
        textColor: 'text-gray-700'
    }
};

// Структура меню с категориями
export const menuStructure: MenuItem[] = [
    {
        title: 'Это важно',
        href: '/roditelyam/eto-va/',
        category: 'important'
    },
    {
        title: 'Независимая оценка качества',
        href: '/roditelyam/nezavisimaya-otsenka-kachestva-usloviy-obrazovatelnoy-deyatelnosti-obrazovatelnykh-organizatsiy/',
        category: 'important'
    },
    {
        title: 'Опрос о качестве образовательных услуг',
        href: '/roditelyam/opros-o-kachestve-obrazovatelnykh-uslug/',
        category: 'important'
    },
    {
        title: 'Профилактика гриппа',
        href: '/roditelyam/profilaktika-grippa/',
        category: 'important'
    },
    {
        title: 'Национальный проект',
        category: 'national',
        children: [
            { title: 'О национальных проектах', href: '/roditelyam/natsionalnyy-proekt/o-natsionalnykh-proektakh/' },
            { title: 'Информирование родительской и педагогической общественности', href: '/roditelyam/natsionalnyy-proekt/informirorvanie-roditelskoy-i-pedagogicheskoy-obshchestvennosti/' },
            { title: 'План мероприятий по реализации национальных проектов', href: '/roditelyam/natsionalnyy-proekt/plan-meropriyatiy-dorozhnaya-karta-po-realizatsii-natsionalnykh-proektov-obrazovanie-i-demografiya-/' },
            { title: 'Персонифицированное финансирование дополнительного образования', href: '/roditelyam/natsionalnyy-proekt/personifitsirovannoe-finansirovanie-dopolnitelnogo-obrazovaniya-detey/' }
        ]
    },
    {
        title: 'Консультативный пункт',
        category: 'consulting',
        children: [
            { title: 'Онлайн-опрос', href: '/roditelyam/konsultativnyy-tsentr-dlya-roditeley-deti-kotorykh-ne-poseshchayut-doshkolnoe-uchrezhdenie/onlayn---opros/' },
            { title: 'О консультационном пункте', href: '/roditelyam/konsultativnyy-tsentr-dlya-roditeley-deti-kotorykh-ne-poseshchayut-doshkolnoe-uchrezhdenie/o-konsultatsionnom-punkte/' },
            { title: 'Полезная библиотека для родителей', href: '/roditelyam/konsultativnyy-tsentr-dlya-roditeley-deti-kotorykh-ne-poseshchayut-doshkolnoe-uchrezhdenie/poleznaya-biblioteka-dlya-roditeley/' },
            { title: 'Коллекция фильмов и роликов', href: '/roditelyam/konsultativnyy-tsentr-dlya-roditeley-deti-kotorykh-ne-poseshchayut-doshkolnoe-uchrezhdenie/kollektsiya-filmov-i-rolikov-dlya-roditeley-o-vospitanii-detey/' },
            { title: 'Консультации педагога-психолога', href: '/roditelyam/konsultativnyy-tsentr-dlya-roditeley-deti-kotorykh-ne-poseshchayut-doshkolnoe-uchrezhdenie/konsultatsii-pedagoga-psikhologa-/' }
        ]
    },
    {
        title: 'Узнай очередь в детский сад',
        href: '/roditelyam/aya-informatsiya/roditelyam/uznay-ochered-v-detskiy-sad/',
        category: 'resources'
    },
    {
        title: 'Электронные ресурсы для родителей',
        href: '/roditelyam/elektronnye-resursy-dlya-roditeley/',
        category: 'resources'
    },
    {
        title: 'Семейные воспитательные группы',
        href: '/roditelyam/semeynye-vospitatelnye-gruppy/',
        category: 'other'
    },
    {
        title: 'Службы защиты',
        href: '/roditelyam/aya-informatsiya/roditelyam/sluzhby-zashchity/',
        category: 'important'
    },
    {
        title: '8 правил для родителей',
        href: '/roditelyam/aya-informatsiya/roditelyam/8-pravil-dlya-roditeley/',
        category: 'important'
    },
    {
        title: 'Окружное родительское собрание',
        href: '/roditelyam/okruzhnoe-roditelskoe-sobranie/',
        category: 'important'
    },
    {
        title: 'Движение ГТО',
        href: '/roditelyam/dvizhenie-gto/',
        category: 'important'
    },
    {
        title: 'Просвещение родителей',
        href: '/roditelyam/prosveshchenie-roditeley/',
        category: 'important'
    },
    {
        title: 'Семейные воспитательные группы',
        href: '#',
        category: 'other'
    },
    {
        title: 'Противодействие коррупции',
        href: '#',
        category: 'other'
    },
    {
        title: 'Плата за присмотр и уход',
        href: '#',
        category: 'other'
    },
    {
        title: 'Порядок зачисления в ДОУ',
        href: '#',
        category: 'other'
    },
    {
        title: 'Сопровождение детей с ОВЗ',
        href: '#',
        category: 'other'
    },
    {
        title: 'Навигатор дополнительного образования',
        href: '#',
        category: 'other'
    },
    {
        title: 'Нормативные документы',
        href: '#',
        category: 'other'
    },
    {
        title: 'Методическая копилка',
        href: '#',
        category: 'other'
    },
    {
        title: 'Проектные площадки',
        href: '#',
        category: 'other'
    },
    {
        title: 'Экологическая страничка',
        href: '#',
        category: 'other'
    },
];

