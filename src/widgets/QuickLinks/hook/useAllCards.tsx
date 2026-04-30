import {Award, Building, FileText, Leaf, LucideIcon, Phone as PhoneIcon} from "lucide-react";
import {useState} from "react";

interface BaseCard {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
}

interface LinkCard extends BaseCard {
    type: 'link';
    href: string;
    isExternal: boolean;
    warning?: boolean;
    warningText?: string;
}

interface ModalCard extends BaseCard {
    type: 'modal';
    onClick: () => void;
}

type Card = LinkCard | ModalCard;

export const useAllCards = () => {
    const [isHelplineModalOpen, setIsHelplineModalOpen] = useState(false);

    const allCards: Card[] = [
        {
            type: 'link',
            icon: FileText,
            title: 'План работы ГТО',
            description: 'Центры тестирования комплекса ГТО на 2026 год',
            color: 'bg-blue-500',
            href: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ГТО012026.pdf',
            isExternal: true,
        },
        {
            type: 'link',
            icon: Building,
            title: 'Сведения об образовательной организации',
            description: 'Основные сведения, структура, документы, образовательные стандарты',
            color: 'bg-indigo-500',
            href: '/org-info',
            isExternal: false,
        },
        {
            type: 'link',
            icon: Award,
            title: 'Платные услуги',
            description: 'Информация о платных образовательных услугах',
            color: 'bg-orange-500',
            href: '#',
            isExternal: false,
            warning: true,
            warningText: 'В 2025-2026 учебном году не предоставляются',
        },
        {
            type: 'modal',
            icon: PhoneIcon,
            title: 'Телефон доверия',
            description: 'Помощь детям и родителям в трудных ситуациях',
            color: 'bg-blue-500',
            onClick: () => setIsHelplineModalOpen(true), // Исправлено: false -> true
        },
        {
            type: 'link',
            icon: Leaf,
            title: 'Экологическая страничка',
            description: 'Воспитание бережного отношения к природе',
            color: 'bg-purple-500',
            href: '/environmental',
            isExternal: false,
        },
    ];

    return {
        isHelplineModalOpen,
        allCards,
        setIsHelplineModalOpen
    }
}