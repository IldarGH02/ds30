export interface MenuItem {
    title: string;
    href?: string;
    children?: MenuItem[];
    category?: 'important' | 'national' | 'materials' | 'resources' | 'other';
}

export const categoryConfig = {
    resources: {
        title: 'Электронные ресурсы',
        icon: '💻',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700'
    },
};

export const menuStructure: MenuItem[] = [
    {
        title: 'Электронные ресурсы для родителей',
        href: '#',
        category: 'resources'
    },
];

