import { CategoryCard } from "@/widgets/category-card/ui/CategoryCard.tsx";
import { menuStructure, MenuItem } from "@/features/Parents/config/menuStructure.ts";
import { useState } from "react";
import { getContentByTitle } from "@/features";
import { GenericModal } from "@/entites/Parents/Modal/GenericModal.tsx";
import { SEO } from "@/entites/SEO";

import { pdfLinks } from "@/features/flu-prevention/index.ts"
import { ContactsBlock } from "@/widgets/contacts";
import { MealsOrganizationContent } from "@/features/meals-organization";

import {
    cardClass,
    cardHeaderClass,
    cardTitleClass,
    cardSubtitleClass,
    cardContentClass,
    docIconClass,
    docTextClass,
    docLinkClass,
    infoBlockVariants,
} from '@/pages/ForParentsPage/styles/ForParentsStyles.ts'

export const ForParentsPage = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        title: '',
    });

    const groupedItems = menuStructure.reduce((acc, item) => {
        const category = item.category || 'other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
    }, {} as Record<string, MenuItem[]>);

    const openModal = (title: string) => {
        setModalState({ isOpen: true, title });
    };

    const closeModal = () => {
        setModalState({ isOpen: false, title: '' });
    };

    return (
        <>
            <SEO
                title="Информация для родителей"
                description="Здесь собрана вся необходимая информация о жизни детского сада, воспитании и развитии ваших детей"
                url="https://ds30.vercel.app/for-parents"
            />
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок страницы */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Информация для родителей
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Уважаемые родители! Здесь собрана вся необходимая для вас информация
                        </p>
                    </div>

                    {/* Основной контент — сетка с двумя колонками */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                        {/* ЛЕВАЯ КОЛОНКА (2/3 ширины) — Документы и информационные блоки */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Блок: Информация по зачислению */}
                            <div className={cardClass}>
                                <div className={cardHeaderClass}>
                                    <h2 className={cardTitleClass}>📋 Информация по зачислению ребенка в ДОУ</h2>
                                    <p className={cardSubtitleClass}>Нормативные документы и положения</p>
                                </div>
                                <div className={cardContentClass}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <a href="https://docs.wixstatic.com/ugd/9c6a61_8486c200029e4adfa0c638df6c9c3082.pdf" className={docLinkClass} target="_blank" rel="noopener noreferrer">
                                            <svg className={docIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            <span className={docTextClass}>Положение о возн.(прекр.) отношений</span>
                                        </a>
                                        <a href="https://docs.wixstatic.com/ugd/9c6a61_b4b0887e4f53405e8e6b8b23117e6592.pdf" className={docLinkClass} target="_blank" rel="noopener noreferrer">
                                            <svg className={docIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            <span className={docTextClass}>Положение о личном деле воспитанников</span>
                                        </a>
                                        <a href="https://docs.wixstatic.com/ugd/9c6a61_3e1a68ba1d88409c8b69edf2c74e3a2d.pdf" className={docLinkClass} target="_blank" rel="noopener noreferrer">
                                            <svg className={docIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            <span className={docTextClass}>Положение о порядке перевода</span>
                                        </a>
                                        <a href="https://docs.wixstatic.com/ugd/9c6a61_aa0f27f3d2a648fb932fed550ef1bd8e.pdf" className={docLinkClass} target="_blank" rel="noopener noreferrer">
                                            <svg className={docIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            <span className={docTextClass}>Положение о порядке сохранения места</span>
                                        </a>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <a href="https://disk.yandex.ru/i/mHDUv82VxdBbE" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium" target="_blank" rel="noopener noreferrer">
                                            <span>⭐</span> Право внеочередного и первоочередного приема детей
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Блок: Профилактика гриппа */}
                            <div className={cardClass}>
                                <div className={cardHeaderClass}>
                                    <h2 className={cardTitleClass}>🦠 Профилактика гриппа</h2>
                                    <p className={cardSubtitleClass}>Основные документы и рекомендации</p>
                                </div>
                                <div className={cardContentClass}>
                                    <p className="text-gray-700 mb-4">Ознакомьтесь с основными документами по профилактике гриппа:</p>
                                    <div className="space-y-2">
                                        {[
                                            { href: pdfLinks.gripp, title: "Грипп" },
                                            { href: pdfLinks.grippChildren, title: "Грипп у детей" },
                                            { href: pdfLinks.whyVaccine, title: "Почему вам необходима прививка против гриппа" },
                                            { href: pdfLinks.prevention, title: "Профилактика гриппа" }
                                        ].map((link, idx) => (
                                            <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className={docLinkClass}>
                                                <svg className={docIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                <span className={docTextClass}>{link.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Блок: Семейные воспитательные группы */}
                            <div className={cardClass}>
                                <div className={cardHeaderClass}>
                                    <h2 className={cardTitleClass}>👨‍👩‍👧‍👦 Семейные воспитательные группы</h2>
                                    <p className={cardSubtitleClass}>Поддержка семей с детьми дошкольного возраста</p>
                                </div>
                                <div className={cardContentClass}>
                                    <div className="space-y-4">
                                        {/* Что это */}
                                        <div className={infoBlockVariants.green + " rounded-lg p-4"}>
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">🏠</div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Что такое семейная воспитательная группа?</h4>
                                                    <p className="text-gray-600 text-sm mt-1">Это структурное подразделение детского сада. Воспитатель осуществляет присмотр и уход за 3 и более детьми от 2 до 7 лет в условиях своей семьи.</p>
                                                    <p className="text-gray-500 text-xs mt-1">Основание: Постановление Администрации г.о. Самара от 21.04.2011 № 308</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Для кого */}
                                        <div className={infoBlockVariants.blue + " rounded-lg p-4"}>
                                            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2"><span className="text-lg">👪</span> Кто может стать воспитателем?</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Мама одного из детей</div>
                                                <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Бабушка</div>
                                                <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Бывшие педагоги и воспитатели</div>
                                                <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Многодетные мамы</div>
                                                <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Матери-одиночки</div>
                                            </div>
                                        </div>

                                        {/* Условия */}
                                        <div className={infoBlockVariants.amber + " rounded-lg p-4"}>
                                            <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2"><span className="text-lg">📋</span> Основные условия</h4>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• Жилое помещение от 30 кв. м в радиусе до 500 м от детского сада</li>
                                                <li>• Питание детей обеспечивает детский сад (готовые блюда)</li>
                                                <li>• Занятия проводятся в детском саду, воспитатель сопровождает детей</li>
                                                <li>• Пребывание в группе оплачивается как в обычном детском саду</li>
                                                <li>• Дети остаются в очереди на поступление в детский сад</li>
                                            </ul>
                                        </div>

                                        {/* Трудоустройство */}
                                        <div className={infoBlockVariants.purple + " rounded-lg p-4"}>
                                            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2"><span className="text-lg">💼</span> Трудоустройство и оплата</h4>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• Официальное трудоустройство в детском саду</li>
                                                <li>• Зарплата воспитателя — как у штатного сотрудника ДОУ (от квалификации)</li>
                                                <li>• Помощник воспитателя — 0,5 ставки</li>
                                            </ul>
                                        </div>

                                        {/* Контакты */}
                                        <div className={infoBlockVariants.gray + " rounded-lg p-4"}>
                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><span className="text-lg">📞</span> Куда обратиться?</h4>
                                            <p className="text-sm text-gray-700 mb-2">В ближайшее дошкольное образовательное учреждение или в:</p>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center gap-2"><span>🏛️</span> Управление развития дошкольного образования</div>
                                                <div className="flex items-center gap-2"><span>📍</span> ул. Ленинградская, 92, г. Самара</div>
                                                <a href="tel:8463407393" className="flex items-center gap-2 text-blue-600 hover:underline">📞 340-73-93</a>
                                                <a href="http://www.depsamobr.ru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">🌐 depsamobr.ru</a>
                                            </div>
                                        </div>

                                        <div className="bg-green-100 rounded-lg p-3 text-center text-sm text-green-700 border border-green-200">
                                            💡 Подробнее — на сайте Департамента образования в разделе «Для родителей»
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Блок: Движение ГТО */}
                            <div className={cardClass}>
                                <div className={cardHeaderClass}>
                                    <h2 className={cardTitleClass}>🏅 Всероссийский физкультурно-спортивный комплекс ГТО</h2>
                                    <p className={cardSubtitleClass}>"Готов к труду и обороне"</p>
                                </div>
                                <div className={cardContentClass}>
                                    <div className="space-y-4">
                                        {/* Что такое ГТО */}
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">🏃</div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-1">Что такое ГТО?</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        ГТО — это программа физической подготовки, направленная на развитие массового спорта
                                                        и укрепление здоровья граждан Российской Федерации. Комплекс ГТО включает в себя
                                                        нормативы по различным видам упражнений: бег, прыжки, метание, подтягивание, наклоны и другие.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Зачем участвовать */}
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">🎯</div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-1">Зачем участвовать?</h4>
                                                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                                                        <li>Укрепление здоровья и физическое развитие</li>
                                                        <li>Возможность получить знак отличия (бронзовый, серебряный, золотой)</li>
                                                        <li>Дополнительные баллы при поступлении в вузы</li>
                                                        <li>Участие в спортивных мероприятиях и соревнованиях</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* План работы */}
                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">📅</div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-blue-800 mb-1">План работы ГТО</h4>
                                                    <p className="text-blue-700 text-sm mb-2">Актуальный план мероприятий по сдаче нормативов ГТО</p>
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        <span>Открыть план работы (PDF)</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Ступени ГТО */}
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">🥇</div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-800 mb-2">Ступени ГТО для дошкольников</h4>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <div className="text-center p-2 bg-orange-100 rounded-lg">
                                                            <div className="text-lg">🥉</div>
                                                            <div className="text-xs font-semibold text-orange-700">I ступень</div>
                                                            <div className="text-xs text-gray-600">6-8 лет</div>
                                                        </div>
                                                        <div className="text-center p-2 bg-gray-100 rounded-lg">
                                                            <div className="text-lg">🥈</div>
                                                            <div className="text-xs font-semibold text-gray-700">II ступень</div>
                                                            <div className="text-xs text-gray-600">9-10 лет</div>
                                                        </div>
                                                        <div className="text-center p-2 bg-yellow-100 rounded-lg">
                                                            <div className="text-lg">🥇</div>
                                                            <div className="text-xs font-semibold text-yellow-700">III ступень</div>
                                                            <div className="text-xs text-gray-600">11-12 лет</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Дополнительная информация */}
                                        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                                            <p className="text-green-700 text-sm">💪 Будьте здоровы! Участвуйте в движении ГТО — это отличный способ проверить свою физическую подготовку!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Блок: Организация питания в ДОУ */}
                            <div className={cardClass}>
                                <div className={cardHeaderClass}>
                                    <h2 className={cardTitleClass}>🍎 Организация питания в ДОУ</h2>
                                    <p className={cardSubtitleClass}>Информация о питании воспитанников детского сада</p>
                                </div>
                                <div className={cardContentClass}>
                                    <MealsOrganizationContent />
                                </div>
                            </div>
                        </div>

                        {/* ПРАВАЯ КОЛОНКА (1/3 ширины) — CategoryCard и контакты */}
                        <div className="space-y-6">

                            {/* CategoryCard - только если есть ресурсы */}
                            {groupedItems.resources && groupedItems.resources.length > 0 && (
                                <CategoryCard
                                    category="resources"
                                    items={groupedItems.resources}
                                    onOpenModal={openModal}
                                />
                            )}

                            {/* Блок "Прием родителей" */}
                            <div className={cardClass}>
                                <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900">Прием родителей</h3>
                                    <p className="text-sm text-gray-600 mt-0.5">График работы заведующего</p>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4">Прием родителей (законных представителей) осуществляется заведующим организацией:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">📅</div>
                                            <div><p className="font-semibold text-gray-800">понедельник</p><p className="text-gray-600">с 14.00 до 17.00</p></div>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg">📅</div>
                                            <div><p className="font-semibold text-gray-800">четверг</p><p className="text-gray-600">с 9.00 до 12.00</p></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* ContactsBlock */}
                            <ContactsBlock />
                        </div>
                    </div>
                </div>
            </section>

            {/* Модальное окно */}
            <GenericModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                title={modalState.title}
            >
                {getContentByTitle(modalState.title)}
            </GenericModal>
        </>
    );
};