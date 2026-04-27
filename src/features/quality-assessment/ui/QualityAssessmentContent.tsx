// features/quality-assessment/ui/QualityAssessmentContent.tsx
export const QualityAssessmentContent = () => {
    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Независимая оценка качества условий образовательной деятельности
                </h3>
                <p className="text-blue-700 mt-1">
                    Оцените качество условий оказания услуг нашей организацией
                </p>
            </div>

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
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium transition-colors"
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
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-lg">📖</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-amber-800 mb-1">
                            Инструкция для граждан
                        </h4>
                        <p className="text-amber-700 text-sm mb-2">
                            О размещении гражданами отзывов по результатам ознакомления с представленной на сайте bus.gov.ru информацией
                        </p>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Скачать инструкцию (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-500">
                <p>
                    Ваше мнение важно для нас! Оценка качества помогает нам становиться лучше.
                </p>
            </div>
        </div>
    );
};