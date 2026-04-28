export const TeachingStaffContent = () => {
    const pdfLinks = {
        staffInfo: 'https://detsad30sam.ru/wa-data/public/site/docs/30/сведения%20о%20педагогических%20кадрах.pdf',
        advancedTraining: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ПК.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-teal-800 text-lg">
                    Педагогический состав
                </h3>
                <p className="text-teal-700 mt-1">
                    Информация о педагогических работниках детского сада
                </p>
            </div>

            {/* Краткая информация */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">👩‍🏫</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Педагогический коллектив</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            В детском саду работают квалифицированные специалисты:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
                            <li>Старший воспитатель</li>
                            <li>Музыкальные руководители</li>
                            <li>Инструктор по физической культуре</li>
                            <li>Учитель-логопед</li>
                            <li>Педагог-психолог</li>
                            <li>Воспитатели групп</li>
                            <li>Старшая медицинская сестра</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Документы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    <span>Документы</span>
                </h4>
                <div className="grid grid-cols-1 gap-2">
                    <a
                        href={pdfLinks.staffInfo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">Сведения о педагогических кадрах</div>
                            <div className="text-xs text-gray-500">Квалификация, должности, образование</div>
                        </div>
                    </a>

                    <a
                        href={pdfLinks.advancedTraining}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">Данные о повышении квалификации</div>
                            <div className="text-xs text-gray-500">Курсы, семинары, профессиональное развитие</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Категории педагогов */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-2xl block mb-1">👩‍🏫</span>
                    <span className="font-semibold">Воспитатели</span>
                    <p className="text-gray-500 text-xs">Работают в 9 группах</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-2xl block mb-1">🎵</span>
                    <span className="font-semibold">Музыкальные руководители</span>
                    <p className="text-gray-500 text-xs">Развитие творческих способностей</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-2xl block mb-1">🗣️</span>
                    <span className="font-semibold">Учитель-логопед</span>
                    <p className="text-gray-500 text-xs">Коррекция речи</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-2xl block mb-1">🧠</span>
                    <span className="font-semibold">Педагог-психолог</span>
                    <p className="text-gray-500 text-xs">Психологическое сопровождение</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-2xl block mb-1">🏃</span>
                    <span className="font-semibold">Инструктор по физкультуре</span>
                    <p className="text-gray-500 text-xs">Физическое развитие</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-2xl block mb-1">💊</span>
                    <span className="font-semibold">Медицинская сестра</span>
                    <p className="text-gray-500 text-xs">Здоровье детей</p>
                </div>
            </div>
        </div>
    );
};