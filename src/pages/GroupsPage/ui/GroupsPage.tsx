import {SEO} from "@/entites/SEO";

export const GroupsPage = () => {
    return (
        <>
            <SEO
                title="Наши группы"
                description="Информация о группах детского сада"
                url="https://ds30.vercel.app/groups"
            />
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-gradient-to-r from-green-100 to-teal-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-green-600 font-medium">👥 Наши группы</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Наши группы
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Информация о группах детского сада
                        </p>
                    </div>

                    {/* Блок-заглушка */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-12 text-center">
                            {/* Иконка */}
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>

                            {/* Текст заглушки */}
                            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                                Информация обновляется
                            </h2>
                            <p className="text-gray-500 max-w-md mx-auto">
                                В детском саду произошли изменения в составах групп.
                                Информация о группах будет опубликована после завершения формирования.
                            </p>
                            <p className="text-gray-400 text-sm mt-4">
                                Приносим извинения за временные неудобства.
                            </p>

                            {/* Декоративная линия */}
                            <div className="w-16 h-1 bg-gray-200 mx-auto mt-6 rounded-full"></div>
                        </div>
                    </div>

                    {/* Контактная информация */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl text-center">
                        <p className="text-gray-600 text-sm">
                            📞 По вопросам комплектования групп можно обратиться к администрации детского сада: <strong className="text-gray-800">956-08-28</strong>
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};