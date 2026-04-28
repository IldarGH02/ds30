import {SEO} from "@/entites/SEO";

export const QualityAssessmentPage = () => {
    return (
        <>
            <SEO
                title="Независимая оценка качества"
                description="Ваше мнение важно для нас! Оценка качества помогает нам становиться лучше"
                url="https://ds30.vercel.app/quality-assessment"
            />
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок страницы */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-gradient-to-r from-blue-100 to-green-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-blue-600 font-medium">⭐ Качество образования</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Независимая оценка качества
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ваше мнение важно для нас! Оценка качества помогает нам становиться лучше.
                        </p>
                    </div>

                    {/* ========== БЛОК 1: НЕЗАВИСИМАЯ ОЦЕНКА ========== */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-blue-500 bg-blue-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">🏛️</span>
                                <span>Независимая оценка качества условий образовательной деятельности</span>
                            </h2>
                        </div>
                        <div className="p-5 space-y-4">
                            <p className="text-sm text-gray-600">
                                Оцените качество условий оказания услуг нашей организацией
                            </p>

                            {/* Ссылка на bus.gov.ru */}
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🏛️</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 mb-1">Официальный сайт bus.gov.ru</h4>
                                        <p className="text-gray-600 text-sm mb-2">
                                            Здесь вы можете оставить отзыв о качестве услуг, предоставляемых нашим учреждением
                                        </p>
                                        <a
                                            href="https://bus.gov.ru/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            <span>Перейти на bus.gov.ru →</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Ссылка на Госуслуги */}
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📱</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 mb-1">Портал Госуслуг</h4>
                                        <p className="text-gray-600 text-sm mb-2">
                                            Единый портал государственных и муниципальных услуг
                                        </p>
                                        <a
                                            href="https://gosuslugi.ru"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium transition-colors text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            <span>Перейти на Госуслуги →</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Инструкция */}
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">📖</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-amber-800 mb-1">Инструкция для граждан</h4>
                                        <p className="text-amber-700 text-sm mb-2">
                                            О размещении гражданами отзывов по результатам ознакомления с представленной на сайте bus.gov.ru информацией
                                        </p>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <span>Скачать инструкцию (PDF)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========== БЛОК 2: ОПРОС О КАЧЕСТВЕ ========== */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-green-500 bg-green-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">📝</span>
                                <span>Опрос о качестве образовательных услуг</span>
                            </h2>
                        </div>
                        <div className="p-5 space-y-4">
                            <p className="text-sm text-gray-600">
                                Уважаемые родители! Оцените качество образовательных услуг, предоставляемых нашим учреждением
                            </p>

                            {/* Сообщение о недоступности опроса */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">ℹ️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-yellow-800 mb-1">В настоящее время опрос не проводится</h4>
                                        <p className="text-yellow-700 text-sm">
                                            По всем вопросам вы можете обратиться к администрации детского сада
                                            по телефону <strong>956-08-28</strong> или по электронной почте{' '}
                                            <strong>dou30samara@yandex.ru</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Информация об анкете */}
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📝</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 mb-1">Анкета для родителей</h4>
                                        <p className="text-gray-600 text-sm">
                                            К сожалению, форма для заполнения временно недоступна.
                                            О дате проведения следующего опроса будет сообщено дополнительно.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Контактная информация */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-center">
                        <p className="text-gray-700 text-sm">
                            📞 По всем вопросам обращаться к администрации детского сада:
                            <strong className="text-blue-600 ml-1">956-08-28</strong>
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            ✉️ Электронная почта: <strong>dou30samara@yandex.ru</strong>
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};