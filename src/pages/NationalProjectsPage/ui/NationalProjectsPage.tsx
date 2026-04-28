export const NationalProjectsPage = () => {
    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
                        <span className="text-blue-600 font-medium">🇷🇺 Национальные проекты России</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Национальные проекты «Образование» и «Демография»
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ключевые инициативы государства для развития образования и поддержки семей с детьми
                    </p>
                </div>

                {/* Навигация по странице */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <a href="#education" className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                        Образование
                    </a>
                    <a href="#demography" className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
                        Демография
                    </a>
                    <a href="#legal-framework" className="px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                        Нормативная база
                    </a>
                </div>

                {/* ========== БЛОК 1: ОБРАЗОВАНИЕ ========== */}
                <div id="education" className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="border-l-4 border-blue-500 bg-blue-50 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-3xl">📚</span>
                            <span>Национальный проект «Образование»</span>
                        </h2>
                    </div>
                    <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Национальный проект «Образование» призван обеспечить глобальную конкурентоспособность
                            российского образования и воспитание гармонично развитой личности.
                        </p>

                        <h3 className="font-bold text-gray-800 text-lg mt-4 mb-2">Ключевые направления:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Обеспечение доступности качественного дошкольного образования для детей в возрасте до 3 лет</li>
                            <li>Модернизация школьной инфраструктуры и строительство новых школ</li>
                            <li>Создание цифровой образовательной среды</li>
                            <li>Профессиональное развитие педагогов через систему непрерывного образования</li>
                            <li>Развитие системы дополнительного образования детей</li>
                            <li>Внедрение целевой модели развития региональных систем дополнительного образования</li>
                        </ul>

                        <div className="bg-gray-50 p-4 rounded-lg mt-4">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Финансирование:</span> В 2026 году на реализацию государственной
                                программы «Развитие образования» предусмотрено <span className="font-bold">669,1 млрд рублей</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ========== БЛОК 2: ДЕМОГРАФИЯ ========== */}
                <div id="demography" className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="border-l-4 border-purple-500 bg-purple-50 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            <span>Национальный проект «Демография»</span>
                        </h2>
                    </div>
                    <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Национальный проект «Демография» направлен на поддержку семей с детьми, улучшение
                            качества жизни и создание условий для повышения рождаемости в России.
                        </p>

                        <h3 className="font-bold text-gray-800 text-lg mt-4 mb-2">Ключевые результаты:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Создано <span className="font-semibold">246 тыс. новых мест в яслях</span> для детей до 3 лет</li>
                            <li>Введено в эксплуатацию почти <span className="font-semibold">1,7 тыс. детских садов</span></li>
                            <li>Построено <span className="font-semibold">1,4 тыс. школ</span>, в которых учатся 850 тыс. детей</li>
                        </ul>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-5 rounded-xl mt-4">
                            <h3 className="font-bold text-gray-800 mb-2">🎯 Приоритеты на 2026 год:</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600">▪️</span>
                                    <span>Поддержка многодетных семей — увеличение выплаты работодателем при рождении ребенка с 50 тыс. до 1 млн руб.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600">▪️</span>
                                    <span>Программа «Молодая семья» — жилищная субсидия для семей с детьми до 35 лет</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600">▪️</span>
                                    <span>Семейные налоговые выплаты для семей с невысокими доходами (где растут двое и более детей)</span>
                                </li>
                            </ul>
                        </div>

                        <h3 className="font-bold text-gray-800 text-lg mt-4 mb-2">Поддержка семей с детьми:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Материнский (семейный) капитал</li>
                            <li>Ежемесячные выплаты на детей для семей с доходом ниже прожиточного минимума</li>
                            <li>Цифровизация услуг — подача заявлений через портал «Госуслуги»</li>
                            <li>Социальные контракты для выхода семей из трудной жизненной ситуации</li>
                        </ul>
                    </div>
                </div>

                {/* ========== БЛОК 3: НОРМАТИВНО-ПРАВОВАЯ БАЗА ========== */}
                <div id="legal-framework" className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="border-l-4 border-gray-600 bg-gray-50 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-3xl">⚖️</span>
                            <span>Нормативно-правовая база</span>
                        </h2>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-700 mb-4">
                            Реализация национальных проектов осуществляется на основании следующих ключевых документов:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Документы по образованию */}
                            <div className="border border-blue-200 rounded-xl p-4 bg-blue-50/30">
                                <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                                    <span>📘</span> По проекту «Образование»
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a
                                            href="https://base.garant.ru/57032623/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Постановление Правительства № 1642 «Об утверждении госпрограммы «Развитие образования»
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Документы по демографии */}
                            <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/30">
                                <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                                    <span>📙</span> По проекту «Демография»
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a
                                            href="https://legalacts.ru/doc/pasport-natsionalnogo-proekta-natsionalnyi-proekt-demografija-utv-mintrudom-rossii/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-600 hover:underline"
                                        >
                                            Паспорт национального проекта «Демография» (утв. Минтрудом России)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-5 p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
                            <p className="flex items-start gap-2">
                                <span className="text-lg">📌</span>
                                <span>
                  Все документы представлены в актуальных редакциях. С полным перечнем нормативных актов
                  можно ознакомиться в разделах сайта «Нормативные документы» и «Сведения об образовательной организации».
                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Контактная информация */}
                <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-center">
                    <p className="text-gray-700 text-sm">
                        📞 По вопросам реализации национальных проектов в детском саду обращаться к администрации:
                        <strong className="text-blue-600 ml-1">956-08-28</strong>
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        С подробной информацией о национальных проектах можно ознакомиться на официальном портале:
                        <a
                            href="https://национальныепроекты.рф"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline ml-1"
                        >
                            национальныепроекты.рф
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
};