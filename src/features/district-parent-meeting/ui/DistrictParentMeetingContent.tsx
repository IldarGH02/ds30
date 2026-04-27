export const DistrictParentMeetingContent = () => {
    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Окружное родительское собрание
                </h3>
                <p className="text-blue-700 mt-1">
                    Информация о проведении окружных родительских собраний
                </p>
            </div>

            {/* Ссылка на сайт Департамента образования */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🏛️</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Окружное родительское собрание
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                            Подробная информация на официальном сайте Департамента образования
                        </p>
                        <a
                            href="https://samadm.ru/authority/the_department_of_education/okruzhnoe-roditelskoe-sobranie/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Перейти на сайт Департамента образования →</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Положение о конфликтной комиссии */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⚖️</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-amber-800 mb-1">
                            Положение о конфликтной комиссии
                        </h4>
                        <p className="text-amber-700 text-sm mb-2">
                            от 17.11.2021 № 1574-од
                        </p>
                        <a
                            href="https://samadm.ru/upload/iblock/20b/1574_od.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть документ (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">📅</span>
                    <span>Информация о датах и времени проведения собраний обновляется на сайте Департамента</span>
                </div>
            </div>
        </div>
    );
};