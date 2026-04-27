export const PublicInformingContent = () => {
    const pdfLinks = {
        report2019: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_a05f559785654ad6a6d66dea2e697da5.pdf',
        youngProfessionals: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_533e8de6f5c54278b1ddc1acda4cc8a9.pdf',
        goalsResults: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_5fd4cbf55dd84b749d0a4202c1b82160.pdf',
        womenEmployment: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_a983333904a3480cb67380b6e816c6dc.pdf',
        modernSchool: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_7924a865592d46cbb51bf5068d480344.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Информирование родительской и педагогической общественности
                </h3>
                <p className="text-blue-700 mt-1">
                    О реализации национальных проектов "Образование" и "Демография" в Самарской области
                </p>
            </div>

            {/* Информация о собрании */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📢</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Родительское собрание в МБДОУ «Детский сад № 30» г.о. Самара
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                            В октябре 2019 года проведено собрание, на котором родители ознакомились с целями,
                            задачами и основными мероприятиями национальных проектов РФ
                        </p>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-700 mb-2">Отчётные документы:</p>
                            <div className="space-y-2">
                                <a
                                    href={pdfLinks.report2019}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Отчёт о выполнении мероприятий по реализации национальных проектов Образование и Демография 2019</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Материалы по региональным проектам */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Материалы по региональным проектам</span>
                </h4>
                <div className="space-y-3">
                    <a
                        href={pdfLinks.youngProfessionals}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">«Молодые профессионалы», «Учитель будущего», «Новые возможности каждого»</div>
                            <div className="text-xs text-gray-500">Основные задачи и перспективы реализации в Самарской области</div>
                        </div>
                    </a>
                    <a
                        href={pdfLinks.goalsResults}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">Основные цели и промежуточные результаты</div>
                            <div className="text-xs text-gray-500">Реализация национальных проектов в сфере образования в Самарской области</div>
                        </div>
                    </a>
                    <a
                        href={pdfLinks.womenEmployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">«Содействие занятости женщин – создание условий дошкольного образования для детей в возрасте 3 лет»</div>
                            <div className="text-xs text-gray-500">Основные задачи и перспективы реализации в Самарской области</div>
                        </div>
                    </a>
                    <a
                        href={pdfLinks.modernSchool}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">«Современная школа», «Поддержка семей, имеющих детей», «Успех каждого ребёнка»</div>
                            <div className="text-xs text-gray-500">О реализации региональных проектов в Самарской области</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">ℹ️</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-amber-800 mb-1">Историческая справка</h4>
                        <p className="text-amber-700 text-sm">
                            Материалы относятся к 2019-2020 годам — начальному этапу реализации национальных проектов в России
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};