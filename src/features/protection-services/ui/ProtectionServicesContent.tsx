// features/protection-services/index.ts/ProtectionServicesContent.tsx
export const ProtectionServicesContent = () => {
    // Ссылки на PDF-файлы (позже будут заменены на реальные)
    const pdfLinks = {
        municipal: '#',      // Муниципальные службы социальной защиты.pdf
        regional: '#',       // Региональные службы защиты.pdf
        social: '#',         // Служба социальной защиты.pdf
        childRights: '#',    // Телефоны по правам ребенка.pdf
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-800 text-lg">
                    Службы защиты
                </h3>
                <p className="text-red-700 mt-1">
                    Важная информация о службах, куда можно обратиться за помощью и защитой
                </p>
            </div>

            {/* Документы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    <span>Информационные материалы</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.municipal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Муниципальные службы социальной защиты</span>
                    </a>

                    <a
                        href={pdfLinks.regional}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Региональные службы защиты</span>
                    </a>

                    <a
                        href={pdfLinks.social}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Служба социальной защиты</span>
                    </a>

                    <a
                        href={pdfLinks.childRights}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 hover:text-blue-600">Телефоны по правам ребенка</span>
                    </a>
                </div>
            </div>

            {/* Контакты экстренных служб */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <span>Контактные телефоны</span>
                </h4>

                <div className="space-y-3">
                    {/* Управление наркоконтроля */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">⚠️</span>
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-800">
                                    УПРАВЛЕНИЕ НАРКОКОНТРОЛЯ ГУ МВД РОССИИ ПО САМАРСКОЙ ОБЛАСТИ
                                </h5>
                                <a
                                    href="tel:3356688"
                                    className="inline-flex items-center gap-2 mt-2 text-red-600 font-bold text-lg hover:text-red-800 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>335-66-88</span>
                                </a>
                                <p className="text-sm text-gray-500 mt-1">КРУГЛОСУТОЧНО</p>
                            </div>
                        </div>
                    </div>

                    {/* Департамент общественной безопасности */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">🏛️</span>
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-800">
                                    ДЕПАРТАМЕНТ ПО ВОПРОСАМ ОБЩЕСТВЕННОЙ БЕЗОПАСНОСТИ И КОНТРОЛЯ АДМИНИСТРАЦИИ ГОРОДСКОГО ОКРУГА САМАРА
                                </h5>
                                <a
                                    href="tel:3373626"
                                    className="inline-flex items-center gap-2 mt-2 text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>337-36-26</span>
                                </a>
                                <p className="text-sm text-gray-500 mt-1">В РАБОЧЕЕ ВРЕМЯ с 8.30 до 17.30</p>
                            </div>
                        </div>
                    </div>

                    {/* Прокуратура города Самара */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">⚖️</span>
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-800">
                                    ПРОКУРАТУРА ГОРОДА САМАРА
                                </h5>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <a
                                        href="tel:3397490"
                                        className="inline-flex items-center gap-2 text-purple-600 font-bold text-lg hover:text-purple-800 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>339-74-90</span>
                                    </a>
                                    <a
                                        href="tel:3397473"
                                        className="inline-flex items-center gap-2 text-purple-600 font-bold text-lg hover:text-purple-800 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>339-74-73</span>
                                    </a>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                    В РАБОЧЕЕ ВРЕМЯ: 339-74-90<br />
                                    В НЕРАБОЧЕЕ ВРЕМЯ И ПРАЗДНИЧНЫЕ ДНИ: 339-74-73
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">ℹ️</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-amber-800 mb-1">Важно помнить</h4>
                        <p className="text-amber-700 text-sm">
                            В экстренных ситуациях, угрожающих жизни и здоровью, всегда можно позвонить
                            по номеру <strong>112</strong> (служба спасения)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};