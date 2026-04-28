export interface MenuItem {
    title: string;
    href?: string;
    children?: MenuItem[];
    category?: 'important' | 'national' | 'materials' | 'resources' | 'other';
}

export const categoryConfig = {
    important: {
        title: 'Важная информация',
        icon: '⚠️',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-700'
    },
    national: {
        title: 'Национальные проекты',
        icon: '🇷🇺',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700'
    },
    materials: {
        title: 'Полезные материалы',
        icon: '📚',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700'
    },
    resources: {
        title: 'Электронные ресурсы',
        icon: '💻',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700'
    },
    other: {
        title: 'Дополнительно',
        icon: '📌',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-200',
        textColor: 'text-gray-700'
    }
};

export const menuStructure: MenuItem[] = [
    // ========== КАТЕГОРИЯ: ВАЖНАЯ ИНФОРМАЦИЯ ==========
    {
        title: 'Это важно',
        href: '#',
        category: 'important'
    },
    {
        title: 'Профилактика гриппа',
        href: '#',
        category: 'important'
    },
    {
        title: 'Службы защиты',
        href: '#',
        category: 'important'
    },
    {
        title: '8 правил для родителей',
        href: '#',
        category: 'important'
    },
    {
        title: 'Движение ГТО',
        href: '#',
        category: 'important'
    },
    {
        title: 'Просвещение родителей',
        href: '#',
        category: 'important'
    },

    // ========== КАТЕГОРИЯ: НАЦИОНАЛЬНЫЕ ПРОЕКТЫ ==========
    {
        title: 'Национальный проект',
        category: 'national',
        children: [
            { title: 'О национальных проектах', href: '#', category: 'national' },
            { title: 'Информирование родительской и педагогической общественности', href: '#', category: 'national' },
            { title: 'План мероприятий по реализации национальных проектов', href: '#', category: 'national' }
        ]
    },
    {
        title: 'Персонифицированное финансирование дополнительного образования',
        href: '#',
        category: 'national'
    },

    // ========== КАТЕГОРИЯ: ПОЛЕЗНЫЕ МАТЕРИАЛЫ ==========
    {
        title: 'Полезные материалы',         // родительский пункт (для аккордеона)
        category: 'materials',
        children: [
            { title: 'Полезная библиотека для родителей', href: '#', category: 'materials' },
            { title: 'Коллекция фильмов и роликов', href: '#', category: 'materials' },
            { title: 'Консультации педагога-психолога', href: '#', category: 'materials' },
        ]
    },

    // ========== КАТЕГОРИЯ: ЭЛЕКТРОННЫЕ РЕСУРСЫ ==========
    {
        title: 'Электронные ресурсы для родителей',
        href: '#',
        category: 'resources'
    },

    // ========== КАТЕГОРИЯ: ДОПОЛНИТЕЛЬНО ==========
    {
        title: 'Семейные воспитательные группы',
        href: '/family-groups',
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
        href: '/enrollment',
        category: 'other'
    },
    {
        title: 'Сопровождение детей с ОВЗ',
        href: '#',
        category: 'other'
    },
    {
        title: 'Нормативные документы',
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
    }
];

