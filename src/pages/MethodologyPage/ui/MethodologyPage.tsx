import { useState, ReactNode } from 'react';
import { GenericModal } from '@/entites/Parents/Modal/GenericModal';
import {
    MusicDirectorContent
} from '@/features/music-director';
import { SpeechTherapistContent } from "@/features/speech-therapist";
import { PsychologistContent } from "@/features/psychologist";
import { PhysicalInstructorContent } from "@/features/physical-instructor";
import { NurseContent } from "@/features/nurse";
import { AdaptationContent } from '@/features/adaptation';
import {RemindersContent} from "@/features/reminders";
import { EducationalRoutesContent } from '@/features/educational-routes';

interface ModalState {
    isOpen: boolean;
    title: string;
    content: ReactNode;
}

export const MethodologyPage = () => {
    const [modalState, setModalState] = useState<ModalState>({
        isOpen: false,
        title: '',
        content: null,
    });

    const openModal = (title: string, content: ReactNode) => {
        setModalState({
            isOpen: true,
            title,
            content,
        });
    };

    const closeModal = () => {
        setModalState({
            isOpen: false,
            title: '',
            content: null,
        });
    };

    return (
        <>
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок страницы */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gradient-to-r from-green-100 to-teal-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-green-600 font-medium">📚 Методическая копилка</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Методическая копилка
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Полезные материалы, консультации и рекомендации специалистов детского сада
                        </p>
                    </div>

                    {/* Блок: Специалисты */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                        <div className="border-l-4 border-blue-500 bg-blue-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">👨‍🏫</span>
                                <span>Специалисты детского сада</span>
                            </h2>
                        </div>
                        <div className="p-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {/* Музыкальный руководитель */}
                                <button
                                    onClick={() => openModal('Музыкальный руководитель', <MusicDirectorContent />)}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors border border-gray-200 group text-left w-full"
                                >
                                    <span className="text-2xl">🎵</span>
                                    <div>
                                        <div className="font-medium text-gray-800 group-hover:text-purple-600">Музыкальный руководитель</div>
                                        <div className="text-xs text-gray-500">Зверева Маргарита Николаевна</div>
                                    </div>
                                </button>

                                {/* Учитель-логопед */}
                                <button
                                    onClick={() => openModal('Учитель-логопед', <SpeechTherapistContent />)}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors border border-gray-200 group text-left w-full"
                                >
                                    <span className="text-2xl">🗣️</span>
                                    <div>
                                        <div className="font-medium text-gray-800 group-hover:text-purple-600">Учитель-логопед</div>
                                        <div className="text-xs text-gray-500">Сосова Надежда Васильевна</div>
                                    </div>
                                </button>

                                {/* Психолог */}
                                <button
                                    onClick={() => openModal('Психолог', <PsychologistContent />)}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors border border-gray-200 group text-left w-full"
                                >
                                    <span className="text-2xl">🧠</span>
                                    <div>
                                        <div className="font-medium text-gray-800 group-hover:text-purple-600">Психолог</div>
                                        <div className="text-xs text-gray-500">Консультации для родителей</div>
                                    </div>
                                </button>

                                {/* Инструктор по физическому воспитанию */}
                                <button
                                    onClick={() => openModal('Инструктор по физическому воспитанию', <PhysicalInstructorContent />)}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors border border-gray-200 group text-left w-full"
                                >
                                    <span className="text-2xl">🏃</span>
                                    <div>
                                        <div className="font-medium text-gray-800 group-hover:text-purple-600">Инструктор по физическому воспитанию</div>
                                        <div className="text-xs text-gray-500">Рекомендации и материалы</div>
                                    </div>
                                </button>

                                {/* Советы медицинской сестры */}
                                <button
                                    onClick={() => openModal('Советы медицинской сестры', <NurseContent />)}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors border border-gray-200 group text-left w-full"
                                >
                                    <span className="text-2xl">💊</span>
                                    <div>
                                        <div className="font-medium text-gray-800 group-hover:text-purple-600">Советы медицинской сестры</div>
                                        <div className="text-xs text-gray-500">Здоровье детей</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Блок: Тематические разделы */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                        <div className="border-l-4 border-green-500 bg-green-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">📖</span>
                                <span>Полезные материалы для родителей</span>
                            </h2>
                        </div>
                        <div className="p-5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {/* Адаптация ребёнка в детском саду */}
                                <button
                                    onClick={() => openModal('Адаптация ребёнка в детском саду', <AdaptationContent />)}
                                    className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors border border-gray-200 group w-full"
                                >
                                    <span className="text-3xl mb-2">🏠➡️🏫</span>
                                    <div className="font-medium text-gray-800 group-hover:text-green-600">Адаптация ребёнка в детском саду</div>
                                    <div className="text-xs text-gray-500 mt-1">Советы и рекомендации</div>
                                </button>

                                {/* Памятки для родителей */}
                                <button
                                    onClick={() => openModal('Памятки для родителей', <RemindersContent />)}
                                    className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors border border-gray-200 group w-full"
                                >
                                    <span className="text-3xl mb-2">📋</span>
                                    <div className="font-medium text-gray-800 group-hover:text-green-600">Памятки для родителей</div>
                                    <div className="text-xs text-gray-500 mt-1">Полезные памятки</div>
                                </button>

                                {/* Образовательные маршруты */}
                                <button
                                    onClick={() => openModal('Образовательные маршруты', <EducationalRoutesContent />)}
                                    className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors border border-gray-200 group w-full"
                                >
                                    <span className="text-3xl mb-2">🗺️</span>
                                    <div className="font-medium text-gray-800 group-hover:text-green-600">Образовательные маршруты</div>
                                    <div className="text-xs text-gray-500 mt-1">Для занятий с детьми</div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Контактная информация */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl text-center">
                        <p className="text-gray-600 text-sm">
                            📞 По вопросам можно обратиться к администрации детского сада: <strong className="text-gray-800">956-08-28</strong>
                        </p>
                    </div>

                </div>
            </section>

            {/* Модальное окно */}
            <GenericModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                title={modalState.title}
            >
                {modalState.content}
            </GenericModal>
        </>
    );
};