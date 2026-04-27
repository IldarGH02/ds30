export const PsychologistConsultationsContent = () => {
    const pdfLinks = {
        negativeEmotions: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_a9ba04a8aa324b78bafa560ce762fca1.pdf',
        restrictions: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_58f313da0b5a4f108b784ac0819d694e.pdf',
        gippenreiter: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_447754236ca548199f29e0170df994cf.pdf',
        fears: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_3fd21b4c8806405cbcc8ce4a787771c6.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-800 text-lg">
                    Консультации педагога-психолога
                </h3>
                <p className="text-purple-700 mt-1">
                    Полезные рекомендации для родителей по воспитанию и развитию детей
                </p>
            </div>

            {/* Справляемся с негативными эмоциями */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">😌</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-blue-800">Справляемся с сильными негативными эмоциями ребенка</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Как помочь ребёнку справиться с любыми его эмоциями, принять их, переработать и отпустить.
                            Техника «контейнирования» и пошаговый алгоритм действий.
                        </p>
                        <a
                            href={pdfLinks.negativeEmotions}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть материал (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Ограничения и запреты */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🚫</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-amber-800">Ограничения и запреты. Как правильно устанавливать границы</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            8 правил установления границ для ребёнка: учёт возраста, объяснение мотивации,
                            обоснованность запретов, единство требований и последовательность.
                        </p>
                        <a
                            href={pdfLinks.restrictions}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-amber-600 hover:text-amber-800 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть материал (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 20 подсказок от Юлии Гиппенрейтер */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">📖</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-green-800">20 подсказок от талантливого психолога Юлии Гиппенрейтер</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Классические советы по воспитанию: безусловное принятие, правильная помощь,
                            дисциплина на основе добрых отношений и уважение к личности ребенка.
                        </p>
                        <a
                            href={pdfLinks.gippenreiter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-green-600 hover:text-green-800 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть материал (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Как помочь ребенку справиться со страхами */}
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🫂</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-red-800">Как помочь ребенку справиться со страхами</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Виды детских страхов и техники их преодоления: активное слушание, создание оберега,
                            рисование страха, сказкотерапия и «дружба» со страхом.
                        </p>
                        <a
                            href={pdfLinks.fears}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть материал (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-purple-50 rounded-lg p-4 text-center text-sm text-purple-700 border border-purple-200">
                <p>
                    👨‍👩‍👧 По всем вопросам вы можете обратиться к педагогу-психологу детского сада
                </p>
            </div>
        </div>
    );
};