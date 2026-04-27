export const PersonalizedFinancingContent = () => {
    const pdfLinks = {
        article: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_a44400d8cfca4194a81a8dde54baeed8.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Персонифицированное финансирование дополнительного образования детей
                </h3>
                <p className="text-blue-700 mt-1">
                    Как получить дополнительное образование ребёнка за счёт государства
                </p>
            </div>

            {/* Что такое ПФДО */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">❓</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Что такое персонифицированное финансирование?</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Это модель, при которой за ребёнком «закрепляются» бюджетные денежные средства, необходимые для
                            посещения выбранной дополнительной общеобразовательной программы, с последующей передачей этих
                            средств организации дополнительного образования (как государственной, так и частной).
                        </p>
                    </div>
                </div>
            </div>

            {/* Что такое сертификат */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🎫</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-green-800">Что такое сертификат дополнительного образования?</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Это электронная запись в единой по всей Самарской области базе, которая позволяет получить
                            ребёнку дополнительное образование за счёт государства, как в муниципальном, так и в частном
                            образовательном учреждении. Деньги, закреплённые за сертификатом, обналичить нельзя.
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            Возраст получения: от 3 до 18 лет. Сертификат прекращает действие по достижении 18 лет.
                        </p>
                    </div>
                </div>
            </div>

            {/* Навигатор дополнительного образования */}
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🗺️</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-purple-800">Навигатор дополнительного образования</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Единая электронная база всех творческих объединений. Здесь дети и родители могут найти интересующие
                            их детские объединения, ознакомиться с программой, определиться с выбором и записаться в объединения
                            дополнительного образования в режиме онлайн.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            <a
                                href="https://navigator.asurso.ru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>navigator.asurso.ru</span>
                            </a>
                            <a
                                href="https://pfdo.ru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>pfdo.ru</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Как получить сертификат */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Как получить сертификат?</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">1️⃣ <span>При входе в личный кабинет АСУ РСО необходимо зайти в персональные настройки (правый верхний угол)</span></li>
                    <li className="flex items-start gap-2">2️⃣ <span>Внизу страницы предоставлена возможность получения сертификата дополнительного образования</span></li>
                    <li className="flex items-start gap-2">✅ <span>Получение сертификата производится автоматически при зачислении ребенка или при смене способа финансирования</span></li>
                </ul>
            </div>

            {/* Статья для скачивания */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">📄</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Подробная статья о ПФДО</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Официальный информационный материал министерства образования и науки Самарской области
                        </p>
                        <a
                            href={pdfLinks.article}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть статью (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Контакты */}
            <div className="bg-blue-50 rounded-lg p-4 text-center text-sm text-blue-700 border border-blue-200">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                        <span>🏛️</span>
                        <span>Региональный модельный центр дополнительного образования Самарской области</span>
                    </div>
                    <a href="tel:8468323780" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                        📞 846-832-37-80
                    </a>
                </div>
            </div>
        </div>
    );
};