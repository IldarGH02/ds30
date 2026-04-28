import { SEO } from "@/entites/SEO";

export const AchievementsPage = () => {
    return (
        <>
            <SEO
                title="Достижения"
                description="Достижения десткого сада и его воспитанников"
                url="https://ds30.vercel.app/achivments"
            />
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-yellow-700 font-medium">🏆 Наши достижения</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Достижения детского сада
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Награды, грамоты и успехи наших воспитанников и педагогов
                        </p>
                    </div>

                    {/* Блок-заглушка */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-12 text-center">
                            {/* Иконка */}
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l2 2" />
                                </svg>
                            </div>

                            {/* Текст заглушки */}
                            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                                Информация готовится к публикации
                            </h2>
                            <p className="text-gray-500 max-w-md mx-auto">
                                В ближайшее время здесь появятся фотографии грамот и дипломов
                                нашего детского сада и его воспитанников.
                            </p>
                            <p className="text-gray-400 text-sm mt-4">
                                Следите за обновлениями!
                            </p>

                            {/* Декоративная линия */}
                            <div className="w-16 h-1 bg-gray-200 mx-auto mt-6 rounded-full"></div>
                        </div>
                    </div>

                    {/* Контактная информация */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl text-center">
                        <p className="text-gray-600 text-sm">
                            📞 По вопросам можно обратиться к администрации детского сада: <strong className="text-gray-800">956-08-28</strong>
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};