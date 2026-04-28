import { CategoryCard } from "@/widgets/category-card/ui/CategoryCard.tsx";
import { menuStructure, MenuItem } from "@/features/Parents/config/menuStructure.ts";
import { useState } from "react";
import { getContentByTitle } from "@/features";
import { GenericModal } from "@/entites/Parents/Modal/GenericModal.tsx";
import {SEO} from "@/entites/SEO";

export const ForParentsPage = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        title: '',
    });

    // Группировка пунктов по категориям
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
                description="Здесь собрана вся необходимая информация о жизни детского сада,
                            воспитании и развитии ваших детей"
                url="https://ds30.vercel.app/for-parents"
            />
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-purple-600 font-medium">👨‍👩‍👧‍👦 Для вас, родители</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Информация для родителей
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Уважаемые родители! Здесь собрана вся необходимая информация о жизни детского сада,
                            воспитании и развитии ваших детей
                        </p>
                    </div>

                    {/* Поиск */}
                    <div className="mb-8 max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="🔍 Поиск по разделам..."
                                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                            />
                            <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Сетка категорий */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        <CategoryCard
                            category="important"
                            items={groupedItems.important || []}
                            onOpenModal={openModal}
                        />
                        <CategoryCard
                            category="national"
                            items={groupedItems.national || []}
                            onOpenModal={openModal}
                        />
                        <CategoryCard
                            category="consulting"
                            items={groupedItems.consulting || []}
                            onOpenModal={openModal}
                        />
                        <CategoryCard
                            category="resources"
                            items={groupedItems.resources || []}
                            onOpenModal={openModal}
                        />
                        <CategoryCard
                            category="other"
                            items={groupedItems.other || []}
                            onOpenModal={openModal}
                        />
                    </div>

                    {/* Дополнительная информация */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Блок "Прием родителей" */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-4 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900">Прием родителей</h3>
                                <p className="text-sm text-gray-600 mt-0.5">График работы заведующего</p>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Прием родителей (законных представителей) осуществляется заведующим организацией:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-lg">📅</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">понедельник</p>
                                            <p className="text-gray-600">с 14.00 до 17.00</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-lg">📅</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">четверг</p>
                                            <p className="text-gray-600">с 9.00 до 12.00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Блок "Контакты" */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-4 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900">Контакты</h3>
                                <p className="text-sm text-gray-600 mt-0.5">Как с нами связаться</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                        <span className="text-lg">📞</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Телефон</p>
                                        <p className="font-semibold text-gray-800">956-08-28, 956-07-30, 927-07-90</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-lg">✉️</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Электронная почта</p>
                                        <p className="font-semibold text-gray-800">dou30samara@yandex.ru</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-lg">📍</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Адрес</p>
                                        <p className="font-semibold text-gray-800">г. Самара, пр. Карла Маркса, 370</p>
                                    </div>
                                </div>
                            </div>
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