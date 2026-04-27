export const OnlineSurveyContent = () => {
    const surveyUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf0aH8EuUlJ3YoE4kVadsW9m7qC_l5xz6yAJ_EUXBti0pL79Q/viewform';

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Онлайн-опрос
                </h3>
                <p className="text-blue-700 mt-1">
                    Оценка качества оказания психолого-педагогической и консультативной помощи
                </p>
            </div>

            {/* Обращение к родителям */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📝</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Уважаемые родители (законные представители)!
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Просим Вас пройти онлайн-опрос о качестве оказания психолого-педагогической и консультативной помощи.
                            Ваше мнение поможет нам стать лучше!
                        </p>
                    </div>
                </div>
            </div>

            {/* Мониторинг качества */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📊</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Мониторинг качества услуг
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                            Психолого-педагогическая, методическая и консультативная помощь
                        </p>

                        {/* Сообщение о недоступности формы */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg mb-3">
                            <div className="flex items-start gap-2">
                                <span className="text-lg">ℹ️</span>
                                <div>
                                    <p className="text-yellow-800 text-sm font-medium">
                                        В настоящее время опрос не проводится
                                    </p>
                                    <p className="text-yellow-700 text-xs mt-0.5">
                                        По всем вопросам вы можете обратиться к администрации детского сада
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={surveyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed transition-colors"
                            onClick={(e) => e.preventDefault()}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Пройти опрос (временно недоступен)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Как оставить отзыв */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💬</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Как оставить отзыв
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Вы можете оставить отзыв на оказанную консультационную помощь следующими способами:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600">
                            <li>На официальном сайте организации через форму обратной связи</li>
                            <li>В книге отзывов и предложений в учреждении</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Контакты */}
            <div className="bg-blue-50 rounded-lg p-4 text-center text-sm text-blue-700 border border-blue-200">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span>956-08-28</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>✉️</span>
                        <span>dou30samara@yandex.ru</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>г. Самара, пр. Карла Маркса, 370</span>
                    </div>
                </div>
            </div>
        </div>
    );
};