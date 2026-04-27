export const NationalProjectsContent = () => {
    const pdfLinks = {
        akopyan: 'https://docs.wixstatic.com/ugd/9c6a61_29ea8501a55f4062b9128d6d16670d18.pdf',
        pikalev: 'https://docs.wixstatic.com/ugd/9c6a61_3816d3c88d5740f6ba9f95fe19db675f.pdf',
        pinskaya: 'https://docs.wixstatic.com/ugd/9c6a61_6cc39789c6614e819832a6fcab1f0636.pdf',
        lysikova: 'https://docs.wixstatic.com/ugd/9c6a61_02a14d6710d8441d8f8aa5127848ebeb.pdf',
        nationalProjects12: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_faeaaf6352294f89b4f803030b3cfe69.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    О национальных проектах
                </h3>
                <p className="text-blue-700 mt-1">
                    Информация о реализации национальных проектов в Самарской области
                </p>
            </div>

            {/* Ссылка на региональный сайт */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🌐</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Региональные составляющие нацпроектов
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                            Информация на официальном сайте министерства экономического развития Самарской области
                        </p>
                        <a
                            href="https://economy.samregion.ru/activity/proektnyy-ofis/aktualnye-proekty/natsionalnye-proekty/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Перейти на сайт →</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 12 нацпроектов России */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🇷🇺</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-amber-800 mb-1">
                            12 национальных проектов России
                        </h4>
                        <p className="text-amber-700 text-sm mb-2">
                            Презентация с официального сайта Правительства РФ
                        </p>
                        <a
                            href={pdfLinks.nationalProjects12}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть презентацию (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Презентации спикеров */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    <span>Презентации с выступлений</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.akopyan}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">Акопьян В.А.</div>
                            <div className="text-xs text-gray-500">Министр образования и науки Самарской области</div>
                        </div>
                    </a>
                    <a
                        href={pdfLinks.pikalev}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">Пикалов А.В.</div>
                            <div className="text-xs text-gray-500">Заместитель министра образования и науки Самарской области</div>
                        </div>
                    </a>
                    <a
                        href={pdfLinks.pinskaya}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">Пинская Е.О.</div>
                            <div className="text-xs text-gray-500">Заместитель министра – руководитель департамента общего образования</div>
                        </div>
                    </a>
                    <a
                        href={pdfLinks.lysikova}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                            <div className="font-medium text-gray-800">Лысикова О.Г.</div>
                            <div className="text-xs text-gray-500">Заместитель министра образования и науки Самарской области</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Список национальных проектов */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Национальные проекты России</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Демография</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Здравоохранение</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Образование</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Жильё и городская среда</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Экология</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Безопасные качественные дороги</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Производительность труда</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Наука и университеты</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Цифровая экономика</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Культура</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Малое и среднее предпринимательство</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">•</span> Международная кооперация и экспорт</div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-blue-50 rounded-lg p-4 text-center text-sm text-blue-700 border border-blue-200">
                <p>
                    Национальные проекты реализуются в России с 2019 года по инициативе Президента РФ
                </p>
            </div>
        </div>
    );
};