export const PsychologistContent = () => {
    // Ссылки на документы
    const pdfLinks = {
        adaptation: 'https://yadi.sk/i/ijdLaJicqyyiL',
        authority: 'https://yadi.sk/i/EWEk-yTjqyygs',
        childLearns: 'https://yadi.sk/i/PQY-FZSJqyyjP',
        helper: 'https://yadi.sk/i/0lokzCAhqyyko',
        gadgets: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Дошкольники%20и%20гаджеты.pdf',
        books100: 'https://yadi.sk/i/Ws6iV7ieqz2bV',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-800 text-lg">
                    Педагог-психолог
                </h3>
                <p className="text-green-700 mt-1">
                    Полезные материалы и консультации для родителей
                </p>
            </div>

            {/* Блок: Первый раз в детский сад */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🏠➡️🏫</span>
                    <span>Первый раз в детский сад: проблемы, адаптация</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.adaptation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Адаптация детей к детскому саду</span>
                    </a>
                </div>
            </div>

            {/* Блок: Вопросы воспитания */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">👨‍👩‍👧</span>
                    <span>Вопросы воспитания</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.authority}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Авторитет родителей в воспитании детей</span>
                    </a>

                    <a
                        href={pdfLinks.childLearns}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Чему ребенок учится у своих родителей</span>
                    </a>

                    <a
                        href={pdfLinks.helper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Как воспитать в ребенке помощника</span>
                    </a>

                    <a
                        href={pdfLinks.gadgets}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Дошкольники и гаджеты</span>
                    </a>
                </div>
            </div>

            {/* Блок: Развиваем ребенка вместе */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <span>Развиваем ребенка вместе</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.books100}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">100 книг, которые стоит прочитать ребенку до 7 лет</span>
                    </a>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-green-50 rounded-lg p-3 text-center text-sm text-green-700 border border-green-200">
                <p>
                    📞 По вопросам воспитания и развития детей можно обратиться к педагогу-психологу
                </p>
            </div>
        </div>
    );
};