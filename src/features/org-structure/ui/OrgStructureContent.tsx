// features/org-structure/ui-elements/OrgStructureContent.tsx
export const OrgStructureContent = () => {
    const pdfLinks = {
        generalMeeting: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ОСР.pdf',
        council: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Совет.pdf',
        teachersCouncil: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Педсовет.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Структура и органы управления
                </h3>
                <p className="text-blue-700 mt-1">
                    Управление осуществляется на принципах единоначалия и самоуправления
                </p>
            </div>

            {/* Органы самоуправления */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🏛️</span>
                    <span>Органы самоуправления</span>
                </h4>
                <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h5 className="font-semibold text-blue-700">Общее собрание работников</h5>
                                <p className="text-gray-600 text-sm mt-1">Коллегиальный орган, включает всех работников. Заседания не реже 1 раза в год.</p>
                            </div>
                            <a href={pdfLinks.generalMeeting} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h5 className="font-semibold text-green-700">Совет учреждения</h5>
                                <p className="text-gray-600 text-sm mt-1">Состав: 2 педагога, 2 родителя, заведующий. Срок полномочий — 2 года.</p>
                            </div>
                            <a href={pdfLinks.council} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h5 className="font-semibold text-purple-700">Педагогический совет</h5>
                                <p className="text-gray-600 text-sm mt-1">Постоянно действующий орган. Заседания не реже 1 раза в квартал.</p>
                            </div>
                            <a href={pdfLinks.teachersCouncil} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Схема управления — исправленное выравнивание */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    <span>Схема управления</span>
                </h4>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-1">
                    {/* Заведующий */}
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-center min-w-[120px]">
                        <div className="font-semibold text-gray-800">Заведующий</div>
                    </div>

                    {/* Стрелка → */}
                    <div className="text-gray-400 text-xl md:rotate-0 rotate-90">→</div>

                    {/* Педагогический совет */}
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-center min-w-[140px]">
                        <div className="font-semibold text-gray-800">Педагогический совет</div>
                    </div>

                    {/* Стрелка → */}
                    <div className="text-gray-400 text-xl md:rotate-0 rotate-90">→</div>

                    {/* Совет учреждения */}
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-center min-w-[140px]">
                        <div className="font-semibold text-gray-800">Совет учреждения</div>
                    </div>

                    {/* Стрелка → */}
                    <div className="text-gray-400 text-xl md:rotate-0 rotate-90">→</div>

                    {/* Общее собрание */}
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-center min-w-[150px]">
                        <div className="font-semibold text-gray-800">Общее собрание работников</div>
                    </div>
                </div>
            </div>

            {/* Структурные подразделения */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                <p className="text-yellow-800 text-sm">
                    📌 Структурных подразделений, филиалов и представительств не имеется.
                </p>
            </div>

            {/* Контакты для справок */}
            <div className="bg-gray-100 rounded-lg p-3 text-center text-sm text-gray-600">
                <p>
                    📞 Дополнительная информация:<br />
                    методический кабинет (с 8:00 до 17:00) или по телефону <strong className="text-gray-800">8 (846) 956-08-28</strong>
                </p>
            </div>
        </div>
    );
};