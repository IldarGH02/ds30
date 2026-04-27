export const UsefulLibraryContent = () => {
    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-amber-800 text-lg">
                    Полезная библиотека для родителей
                </h3>
                <p className="text-amber-700 mt-1">
                    Аудиосказки и книги для решения распространённых проблем воспитания
                </p>
            </div>

            {/* Аудиосборник "Антикапризин" */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🎧</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-blue-800 text-lg">«Антикапризин. Сказки для исцеления от капризов»</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
                            <span>✍️ Гурина И.В., Холкина Т.А., Андрианов М.А.</span>
                            <span>📅 2008 г.</span>
                            <span>🎙️ Исполнитель: Зенцова Е.Н.</span>
                        </div>
                        <p className="text-gray-700 text-sm mt-2">
                            В каждой сказке с тем или иным капризом борется девочка или мальчик.
                            Такой прием дает ребенку возможность посмотреть на решение проблемы со стороны,
                            не испытывая стресса. Аудио-версия сказок для занятых родителей.
                        </p>
                    </div>
                </div>
            </div>

            {/* Список сказок */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <span>Каждая сказка исцеляет один конкретный каприз:</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">1.</span> <span>Сказка про смелого Алёшу — <em className="text-gray-500">Боится темноты</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">2.</span> <span>Прилипчивый телевизор — <em className="text-gray-500">Много смотрит ТВ</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">3.</span> <span>Тема и сон — <em className="text-gray-500">Не хочет засыпать</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">4.</span> <span>Дворец врулей — <em className="text-gray-500">Обманывает родителей</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">5.</span> <span>Как Андрюша гостей встречал — <em className="text-gray-500">Стесняется</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">6.</span> <span>Поцелуй Хотелки — <em className="text-gray-500">Требует покупок в магазине</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">7.</span> <span>Сказка про маленькую тучку — <em className="text-gray-500">Не хочет ходить на горшок</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">8.</span> <span>Как Костя стал умываться — <em className="text-gray-500">Не хочет умываться</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">9.</span> <span>Как Ильюша животик кормил — <em className="text-gray-500">Не хочет есть</em></span></div>
                    <div className="flex items-start gap-2"><span className="text-blue-500 font-bold">10.</span> <span>Сказка про страну Нерях — <em className="text-gray-500">Не убирает игрушки</em></span></div>
                </div>
            </div>

            {/* Книга "Как организовать детский праздник" */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📚</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-green-800 text-lg">«Как организовать детский праздник. 1000 идей для ваших детей»</h4>
                        <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                            <span>✍️ Берсеньева Катерина</span>
                            <span>📅 2007 г.</span>
                            <span>📄 416 страниц</span>
                        </div>
                        <p className="text-gray-700 text-sm mt-2">
                            Книга предназначена для использования на протяжении многих лет — от 3 до 13–14 лет ребенка.
                            В ней вы найдете: как легче и занимательнее организовать праздник, какие игры использовать
                            в зависимости от возраста, как подготовить тематический день рождения своими силами,
                            как занять гостей и какие блюда поставить на стол.
                        </p>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-amber-50 rounded-lg p-4 text-center text-sm text-amber-700 border border-amber-200">
                <p>
                    📚 Больше книг и материалов по воспитанию можно найти в методическом кабинете детского сада
                </p>
            </div>
        </div>
    );
};