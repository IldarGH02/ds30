import { useState } from 'react';
import { GenericModal } from '@/entites/Parents/Modal/GenericModal';
import { OrgStructureContent } from "@/features/org-structure";
import { DocumentsContent } from '@/features/documents';
import { EducationContent } from '@/features/education/ui/EducationContent';
import { EducationalStandardsContent } from "@/features/educational-standards";
import { TeachingStaffContent } from "@/features/teaching-staff";
import { FinancialActivitiesContent } from "@/features/financial-activities";
import { VacanciesContent } from "@/features/vacancies";
import { MealsOrganizationContent } from "@/features/meals-organization";

export const OrgInfoPage = () => {
    const [modalState, setModalState] = useState<{ isOpen: boolean; title: string; content: React.ReactNode }>({
        isOpen: false,
        title: '',
        content: null,
    });

    const openModal = (title: string, content: React.ReactNode) => {
        setModalState({ isOpen: true, title, content });
    };

    const closeModal = () => {
        setModalState({ isOpen: false, title: '', content: null });
    };

    const sections = [
        { title: 'Структура и органы управления', content: <OrgStructureContent />, icon: '🏛️' },
        { title: 'Документы', content: <DocumentsContent />, icon: '📄' },
        { title: 'Образование', content: <EducationContent />, icon: '🎓' },
        { title: 'Образовательные стандарты и требования', content: <EducationalStandardsContent />, icon: '📖' },
        { title: 'Педагогический состав', content: <TeachingStaffContent />, icon: '👩‍🏫' },
        { title: 'Финансово-хозяйственная деятельность', content: <FinancialActivitiesContent />, icon: '📊' },
        { title: 'Вакантные места для приема (перевода) обучающихся', content: <VacanciesContent />, icon: '📢' },
        { title: 'Организация питания в ДОУ', content: <MealsOrganizationContent />, icon: '🍎' },
    ];

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок */}
                <div className="text-center mb-10">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-2 mb-4">
                        <span className="text-blue-600 font-medium">📋 Сведения об организации</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Сведения об образовательной организации
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Основная информация в соответствии с требованиями законодательства
                    </p>
                </div>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sections.map((section, idx) => (
                        <button
                            key={idx}
                            onClick={() => openModal(section.title, section.content)}
                            className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left border border-gray-100 group"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-3xl">{section.icon}</span>
                                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {section.title}
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">
                                Нажмите для просмотра информации →
                            </p>
                        </button>
                    ))}
                </div>

                {/* Контактная информация */}
                <div className="mt-10 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl text-center">
                    <p className="text-gray-600 text-sm">
                        📞 По вопросам можно обратиться к администрации детского сада: <strong className="text-gray-800">956-08-28</strong>
                    </p>
                </div>

            </div>

            <GenericModal isOpen={modalState.isOpen} onClose={closeModal} title={modalState.title}>
                {modalState.content}
            </GenericModal>
        </section>
    );
};