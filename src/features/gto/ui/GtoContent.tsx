export const GtoContent = () => {
    // Ссылка на PDF-файл (будет заменена позже)
    const pdfLink = '#'; // План работы ГТО на июль 2025 г.

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-800 text-lg">
                    Движение ГТО
                </h3>
                <p className="text-green-700 mt-1">
                    Всероссийский физкультурно-спортивный комплекс "Готов к труду и обороне"
                </p>
            </div>

            {/* Что такое ГТО */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🏃</span>
                    </div>
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
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎯</span>
                    </div>
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
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📅</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-blue-800 mb-1">
                            План работы ГТО на июль 2025 г.
                        </h4>
                        <p className="text-blue-700 text-sm mb-2">
                            Актуальный план мероприятий по сдаче нормативов ГТО
                        </p>
                        <a
                            href={pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть план работы (PDF)</span>
                        </a>
                        <p className="text-xs text-gray-400 mt-2">
                            *PDF-файл будет доступен для скачивания после предоставления ссылки
                        </p>
                    </div>
                </div>
            </div>

            {/* Ступени ГТО */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🥇</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Ступени ГТО для дошкольников</h4>
                        <div className="grid grid-cols-3 gap-2 mt-2">
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
            <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                <p className="text-green-700 text-sm">
                    💪 Будьте здоровы! Участвуйте в движении ГТО — это отличный способ проверить свою физическую подготовку!
                </p>
            </div>
        </div>
    );
};