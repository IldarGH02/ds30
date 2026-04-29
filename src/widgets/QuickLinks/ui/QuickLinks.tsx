// components/QuickLinks.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, FileText, Phone as PhoneIcon, Users, Award, AlertCircle, Building, Leaf, LucideIcon } from 'lucide-react';
import { GenericModal } from '@/entites/Parents/Modal/GenericModal';
import { HelplineContent } from '@/features/helpline';

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

export function QuickLinks() {
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
      icon: Users,
      title: 'Комплектование',
      description: 'Порядок зачисления ребенка в ДОУ',
      color: 'bg-green-500',
      href: '/enrollment',
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
      onClick: () => setIsHelplineModalOpen(true),
    },
    {
      type: 'link',
      icon: Leaf,
      title: 'Экологическая страничка',
      description: 'Воспитание бережного отношения к природе',
      color: 'bg-purple-500',
      href: '/ecology',
      isExternal: false,
    },
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Быстрые ссылки</h2>
            <p className="text-xl text-gray-600">
              Часто используемые разделы и документы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCards.map((card, index) => {
              const Icon = card.icon;
              
              // Модальное окно
              if (card.type === 'modal') {
                return (
                  <button
                    key={index}
                    onClick={card.onClick}
                    className="group relative w-full text-left bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className={`absolute inset-0 ${card.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                    <div className={`relative w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="relative text-gray-600 text-sm mb-4">
                      {card.description}
                    </p>
                    <div className="relative flex items-center text-blue-600 text-sm font-medium">
                      Подробнее
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              }
              
              // Внешняя ссылка (a)
              if (card.isExternal) {
                return (
                  <a
                    key={index}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className={`absolute inset-0 ${card.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                    <div className={`relative w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="relative text-gray-600 text-sm mb-4">
                      {card.description}
                    </p>
                    {card.warning && (
                      <div className="relative mb-3 p-2 bg-orange-100 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-1 text-orange-700 text-xs font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{card.warningText}</span>
                        </div>
                      </div>
                    )}
                    <div className="relative flex items-center text-blue-600 text-sm font-medium">
                      Подробнее
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              }
              
              // Внутренняя ссылка (Link)
              return (
                <Link
                  key={index}
                  to={card.href}
                  className="group relative block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`absolute inset-0 ${card.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                  <div className={`relative w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="relative text-gray-600 text-sm mb-4">
                    {card.description}
                  </p>
                  {card.warning && (
                    <div className="relative mb-3 p-2 bg-orange-100 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-1 text-orange-700 text-xs font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{card.warningText}</span>
                      </div>
                    </div>
                  )}
                  <div className="relative flex items-center text-blue-600 text-sm font-medium">
                    Подробнее
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <GenericModal
        isOpen={isHelplineModalOpen}
        onClose={() => setIsHelplineModalOpen(false)}
        title="Телефоны доверия"
      >
        <HelplineContent />
      </GenericModal>
    </>
  );
}