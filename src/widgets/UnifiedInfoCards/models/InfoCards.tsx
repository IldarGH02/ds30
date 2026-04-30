import {Book, GraduationCap, Heart, Shield, Bell, Users} from "lucide-react";

export const sections = [
    {
        icon: Book,
        title: 'Основные сведения',
        description: 'Основные сведения об образовательной организации',
        color: 'from-blue-400 to-blue-600',
        href: '#info',
        path: '/info'
    },
    {
        icon: GraduationCap,
        title: 'Методическая копилка',
        description: 'Материалы специалистов, советы и рекомендации',
        color: 'from-orange-400 to-orange-600',
        href: '#methodology',
        path: '/methodology'
    },
    {
        icon: Shield,
        title: 'Безопасность',
        description: 'Детская безопасность, дорожная безопасность',
        color: 'from-red-400 to-red-600',
        href: '#safety',
        path: '/safety',
    },
    {
        icon: Heart,
        title: 'Наши группы',
        description: 'Информация о группах детского сада',
        color: 'from-teal-400 to-teal-600',
        href: '#groups',
        path: '/groups'
    }
];

interface InfoCard {
    icon: any;
    title: string;
    description: string;
    color: string;
    link: string;
    type: 'important' | 'section';
}

export const infoCards: InfoCard[] = [
    // Важная информация
    {
        icon: Bell,
        title: 'Консультативный пункт',
        description: 'Для родителей, дети которых не посещают дошкольную организацию',
        color: 'from-yellow-400 to-orange-500',
        link: '/consulting-center',
        type: 'important'
    },
    {
        icon: Shield,
        title: 'Независимая оценка',
        description: 'Независимая оценка качества условий образовательной деятельности',
        color: 'from-blue-400 to-indigo-500',
        link: '/quality-assessment',
        type: 'important'
    },
    {
        icon: Users,
        title: 'Национальный проект',
        description: 'Информирование о национальных проектах "Образование" и "Демография"',
        color: 'from-purple-400 to-pink-500',
        link: '/national-projects',
        type: 'important'
    },
    // Разделы сайта
    ...sections.map(section => ({
        icon: section.icon,
        title: section.title,
        description: section.description,
        color: section.color,
        link: section.path,
        type: 'section' as const
    }))
];