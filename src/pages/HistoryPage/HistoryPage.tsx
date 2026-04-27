export const HistoryPage = () => {
    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-2 mb-4">
                        <span className="text-amber-600 font-medium">📖 Наша история</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        История детского сада
                    </h1>
                    <p className="text-xl text-gray-600">
                        Как рождался детский сад №30 «Классики»
                    </p>
                </div>

                {/* Рождение сада */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-amber-500 bg-amber-50 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-3xl">🏗️</span>
                            <span>Рождение сада</span>
                        </h2>
                    </div>
                    <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Как любой малыш долгое время до своего появления на свет и даже до зарождения
                            живет в фантазиях своей мамы, так и детский сад появляется не сразу. Можно сказать,
                            что идея сада и его концепция рождаются на основе, заложенной проектной организацией.
                        </p>
                        <p>
                            Проектированием детского сада №30 занимался <strong>«Самарагорпроект»</strong> —
                            организация, имеющая огромный опыт подобной работы. Проект сада формируется в соответствии
                            с техническим заданием заказчика: администрация города формулирует те требования,
                            которые позволят саду функционировать как дошкольное заведение.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg italic text-gray-600">
                            «В истории детского сада №30 роль проектировщиков была особенно сложна —
                            необходимостью вписать новый современный сад в границы старой формы.»
                        </div>
                    </div>
                </div>

                {/* Реконструкция */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-blue-500 bg-blue-50 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-3xl">🔨</span>
                            <span>Реконструкция здания</span>
                        </h2>
                    </div>
                    <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Здание сада — постройки 1980-х годов, заброшенное и разрушенное,
                            требовало полного восстановления коммуникаций, техподполья, крыши.
                            Именно в результате такого труда сад перестал быть абстрактной фантазией родителей,
                            а превратился в список запланированных к производству работ, имеющих свои сроки исполнения.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div className="bg-gray-100 rounded-xl p-4 text-center">
                                <div className="text-2xl mb-1">🏚️</div>
                                <p className="text-sm text-gray-600">Здание до реконструкции</p>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4 text-center">
                                <div className="text-2xl mb-1">📐</div>
                                <p className="text-sm text-gray-600">План нового сада</p>
                            </div>
                        </div>
                        <p>
                            <strong>1 июня 2011 года</strong> на объект зашли рабочие «Волгоспецстроя»,
                            которые в течение месяца ежедневно выполняли подготовительные работы,
                            освобождая здание от старых, полуразрушенных перегородок, прогнивших полов,
                            разбитой плитки, исковерканных оконных конструкций.
                        </p>
                    </div>
                </div>

                {/* Ход работ */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-green-500 bg-green-50 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-3xl">👷</span>
                            <span>Ход работ</span>
                        </h2>
                    </div>
                    <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Уже к наступлению холодов был закрыт тепловой контур здания, что сделало возможным
                            проведение работ по внутренней отделке помещений. Одновременно на объекте находилось
                            более <strong>ста пятидесяти человек</strong>: рабочих, плиточников, штукатуров,
                            маляров, сантехников, инженеров.
                        </p>
                        <p>
                            Работы одновременно шли на территории более <strong>трёх тысяч квадратных метров</strong>.
                            К окончанию отопительного сезона была выполнена внутренняя отделка
                            <strong>116 помещений</strong> детского сада.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg">
                            <p className="text-amber-800 text-sm">
                                📅 Еженедельные контрольные совещания на объекте проходили под руководством
                                Руководителей и представителей Департамента строительства и архитектуры
                                и Департамента образования.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Завершение и название */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-purple-500 bg-purple-50 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-3xl">🎯</span>
                            <span>Завершение и имя сада</span>
                        </h2>
                    </div>
                    <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Работы по благоустройству территории детского сада запланированы на весну 2012 года.
                            Именно они позволили говорить о том, что сад готов к приёму детей.
                        </p>
                        <p>
                            Одновременно с укладкой асфальта, посадкой деревьев и кустарников,
                            обустройством детских площадок проходили работы по оснащению сада:
                            собиралась и расставлялась изготовленная детская мебель, подключалось оборудование
                            пищеблока и прачечной, подготавливался необходимый мягкий инвентарь.
                        </p>
                        <div className="bg-purple-50 p-5 rounded-xl text-center">
                            <p className="text-purple-800 font-medium mb-2">Заключительный аккорд</p>
                            <p className="text-gray-700">
                                С одобрения Руководителя Департамента образования <strong>Надежды Борисовны Колесниковой</strong>
                                новый детский сад стал называться <strong className="text-purple-700">«Классики»</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Символика названия */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🎨</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 text-lg mb-2">Почему «Классики»?</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Образ ребенка, играющего в классики, аккумулирует в себе всё содержание
                                здорового и счастливого детского развития. В нём есть и вера в то, что
                                ребёнку свойственно стремиться к развитию, каждый день двигаться дальше,
                                открывая себя нового. И в нём же есть современная педагогическая аксиома
                                о том, что основной деятельностью ребёнка дошкольного возраста является игра.
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed mt-3">
                                «Классик», «классический» — как знак преданности нового сада старой традиции
                                заботливого, умного внимания к личности ребёнка, уже от рождения звучащей
                                на своей, только ей подаренной ноте.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Подпись */}
                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>© 2011-2012 — история создания детского сада №30 «Классики»</p>
                </div>
            </div>
        </section>
    );
};