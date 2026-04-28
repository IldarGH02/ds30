export const AdaptationContent = () => {
    // Ссылки на документы
    const pdfLinks = {
        riskFactors: 'https://yadi.sk/i/rL3N-TpLrrEXw',
        tantrums: 'https://yadi.sk/i/C2ejL3MErrEXu',
        soonToKindergarten: 'https://yadi.sk/i/slWQiG8-rrEXs',
        adaptationMemo: 'https://yadi.sk/i/2TbCp-YsrrEWS',
        preparation: 'https://yadi.sk/i/CSutEWXHrrEWK',
        firstTime: 'https://yadi.sk/i/c9AGeV6srrEWM',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Адаптация ребёнка в детском саду
                </h3>
                <p className="text-blue-700 mt-1">
                    Как помочь ребёнку привыкнуть к детскому саду без стресса
                </p>
            </div>

            {/* Введение */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🏠➡️🏫</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Период адаптации
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Адаптация к детскому саду — важный этап в жизни ребёнка и всей семьи.
                            Чтобы этот период прошёл максимально комфортно, мы подготовили полезные
                            рекомендации и памятки для родителей.
                        </p>
                    </div>
                </div>
            </div>

            {/* Памятки и рекомендации */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Памятки и рекомендации для родителей</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.riskFactors}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Анамнестические факторы риска адаптации</span>
                    </a>

                    <a
                        href={pdfLinks.tantrums}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Как справиться с капризами ребенка при расставании</span>
                    </a>

                    <a
                        href={pdfLinks.soonToKindergarten}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Памятка для родителей «Скоро в детсад»</span>
                    </a>

                    <a
                        href={pdfLinks.adaptationMemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Памятка родителям «Адаптация к ДОУ»</span>
                    </a>

                    <a
                        href={pdfLinks.preparation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Рекомендации по подготовке ребенка к детскому саду</span>
                    </a>

                    <a
                        href={pdfLinks.firstTime}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">«Первый раз в детский сад»</span>
                    </a>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-blue-50 rounded-lg p-3 text-center text-sm text-blue-700 border border-blue-200">
                <p>
                    👨‍👩‍👧 По вопросам адаптации можно обратиться к воспитателям или педагогу-психологу детского сада
                </p>
            </div>
        </div>
    );
};