export const FluPreventionContent = () => {
    // Ссылки на PDF-файлы (позже будут заменены на реальные)
    const pdfLinks = {
        gripp: '#',           // Грипп.pdf
        grippChildren: '#',   // Грипп у детей.pdf
        whyVaccine: '#',      // Почему вам необходима прививка против гриппа.pdf
        prevention: '#',      // Профилактика гриппа.pdf
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Профилактика гриппа
                </h3>
                <p className="text-blue-700 mt-1">
                    Управление Роспотребнадзора по Самарской области рекомендует
                </p>
            </div>

            {/* Рекомендация о прививке */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💉</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-1">
                            Позаботьтесь о своём здоровье и здоровье своих близких
                        </h4>
                        <p className="text-red-700">
                            Сделайте прививку от гриппа!
                        </p>
                    </div>
                </div>
            </div>

            {/* Документы по теме */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    <span>Полезные материалы</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.gripp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Грипп</span>
                    </a>

                    <a
                        href={pdfLinks.grippChildren}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Грипп у детей</span>
                    </a>

                    <a
                        href={pdfLinks.whyVaccine}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Почему вам необходима прививка против гриппа</span>
                    </a>

                    <a
                        href={pdfLinks.prevention}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Профилактика гриппа</span>
                    </a>
                </div>
            </div>

            {/* Полезный ресурс */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🏥</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-teal-800 mb-1">
                            ФБУЗ "Центр гигиенического образования населения" Роспотребнадзора
                        </h4>
                        <p className="text-teal-700 text-sm mb-2">
                            Официальный сайт с информацией о здоровом образе жизни и профилактике заболеваний
                        </p>
                        <a
                            href="https://cgon.rospotrebnadzor.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Перейти на сайт →</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-500">
                <p>
                    Берегите себя и своих близких! Своевременная вакцинация — лучшая защита от гриппа.
                </p>
            </div>
        </div>
    );
};