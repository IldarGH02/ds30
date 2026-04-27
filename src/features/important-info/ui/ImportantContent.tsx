export const ImportantContent = () => {
    return (
        <div className="space-y-6">
            {/* Уважаемые родители */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="font-semibold text-amber-800">Уважаемые родители!</p>
                <p className="text-amber-700 mt-1">
                    Информируем вас, что в перечне льготных категорий ГИС АСУ РСО Самарской области
                    (модуль «Е-услуги. Образование») учтены дополнительные льготные категории.
                </p>
                <a href="#" className="text-amber-600 font-medium hover:underline inline-block mt-2">
                    Подробнее →
                </a>
            </div>

            {/* По зачислению в 1 класс */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-semibold text-blue-800">По зачислению в 1 класс</p>
                <p className="text-blue-700 mt-1">
                    Информация о порядке зачисления детей в первые классы
                </p>
                <div className="mt-3 space-y-2">
                    <a
                        href="https://disk.yandex.ru/i/M_4BmkeF3PWbZd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors text-sm"
                    >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>График начала приема заявлений</span>
                    </a>
                    <a
                        href="https://disk.yandex.ru/i/zzlMIDR93PWbPe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors text-sm"
                    >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>О порядке приема в школу</span>
                    </a>
                    <a
                        href="https://disk.yandex.ru/i/w5GMOsWL3PWbX8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors text-sm"
                    >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Как пройти регистрацию</span>
                    </a>
                </div>
            </div>

            {/* Это важно! */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="font-semibold text-red-800">Это важно!</p>
                <p className="text-red-700 mt-1">
                    Информация об ответственности законных представителей несовершеннолетних и иных лиц
                    за подделку, изготовление или использование заведомо подложных документов.
                </p>
                <a
                    href="https://disk.yandex.ru/i/zBfRxbC63PWbao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-red-700 hover:text-red-900 hover:underline transition-colors text-sm"
                >
                    <span>📄</span>
                    <span>Ознакомиться</span>
                </a>
            </div>

            <div className="space-y-6">
                {/* Полезная информация */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📋</span>
                        <span>Полезная информация</span>
                    </h3>
                    <div className="space-y-3">
                        {/* Департамент образования */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                            <p className="text-gray-700 mb-2">
                                Информация о Департаменте образования Администрации городского округа Самара
                            </p>
                            <a
                                href="https://disk.yandex.ru/i/QelCdoZPxd8ue"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Скачать документ</span>
                            </a>
                        </div>

                        {/* Перечень граждан */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                            <p className="text-gray-700 mb-2">
                                Перечень граждан имеющих право внеочередного и первоочередного приема детей
                            </p>
                            <a
                                href="https://disk.yandex.ru/i/mHDUv82VxdBbE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Скачать документ</span>
                            </a>
                        </div>

                        {/* Письмо Министерства */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                            <p className="text-gray-700 mb-2">
                                Письмо Министерства образования и науки Российской Федерации
                                "Об обучении детей, прибывающих с территории Украины" от 09.07.2014г. № 08859
                            </p>
                            <a
                                href="https://disk.yandex.ru/i/I1RduP52xdKHy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Скачать документ</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Защита детей - отдельный информационный блок */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xl">🛡️</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-2 text-lg">
                                Защита детей от вредной информации
                            </h3>
                            <p className="text-gray-700 mb-3">
                                В рамках мероприятий по защите детей от информации, причиняющей вред их здоровью и развитию,
                                а также популяризации темы по защите персональных данных несовершеннолетних
                                предлагаем Вам посетить специализированные сайты.
                            </p>
                            <a
                                href="https://rkn.gov.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-medium transition-colors bg-white px-4 py-2 rounded-lg border border-purple-200 hover:bg-purple-50"
                            >
                                <span>🌐</span>
                                <span>Перейти на сайт Роскомнадзора</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Памятка */}
            <div className="border-t-2 border-gray-200 pt-4">
                <p className="text-gray-800 font-medium mb-2">
                    📄 Памятка для родителей детей вновь поступающих в детский сад
                </p>
                <a
                    href="https://disk.yandex.ru/i/NE-MYP9uxdBtu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Скачать памятку</span>
                </a>
            </div>
        </div>
    );
};