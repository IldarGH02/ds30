import {SEO} from "@/entites/SEO";
import { ContactInfoBanner } from "@/shared";

export const ProjectsPage = () => {
    return (
        <>
            <SEO
                title="Проектные площадки"
                description="Информация о проектной деятельности детского сада"
                url="https://ds30.vercel.app/projects"
            />
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-purple-600 font-medium">🚀 Проектная деятельность</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Проектные площадки
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Информация о проектной деятельности детского сада
                        </p>
                    </div>

                    {/* Блок-заглушка */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-12 text-center">
                            {/* Иконка */}
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>

                            {/* Текст заглушки */}
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                                Информация временно недоступна
                            </h2>
                            <p className="text-gray-500 max-w-md mx-auto">
                                В настоящее время информация о проектных площадках обновляется.
                                Пожалуйста, зайдите позже.
                            </p>

                            {/* Декоративная линия */}
                            <div className="w-16 h-1 bg-gray-200 mx-auto mt-6 rounded-full"></div>
                        </div>
                    </div>

                    <ContactInfoBanner message="По вопросам проектной деятельности можно обратиться к администрации детского сада" />

                </div>
            </section>
        </>
    );
};