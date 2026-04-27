export const FamilyGroupsContent = () => {
    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-800 text-lg">
                    Семейные воспитательные группы
                </h3>
                <p className="text-green-700 mt-1">
                    Поддержка семей с детьми дошкольного возраста
                </p>
            </div>

            {/* Что это */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🏠</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Что такое семейная воспитательная группа?</h4>
                        <p className="text-gray-600 text-sm mt-1">
                            Это структурное подразделение детского сада. Воспитатель осуществляет присмотр и уход
                            за 3 и более детьми от 2 до 7 лет в условиях своей семьи.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Основание: Постановление Администрации г.о. Самара от 21.04.2011 № 308
                        </p>
                    </div>
                </div>
            </div>

            {/* Для кого */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">👪</span>
                    <span>Кто может стать воспитателем?</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Мама одного из детей</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Бабушка</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Бывшие педагоги и воспитатели</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Многодетные мамы</div>
                    <div className="flex items-center gap-2"><span className="text-green-600">✓</span> Матери-одиночки</div>
                </div>
            </div>

            {/* Условия */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Основные условия</span>
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Жилое помещение от 30 кв. м в радиусе до 500 м от детского сада</li>
                    <li>• Питание детей обеспечивает детский сад (готовые блюда)</li>
                    <li>• Занятия проводятся в детском саду, воспитатель сопровождает детей</li>
                    <li>• Пребывание в группе оплачивается как в обычном детском саду</li>
                    <li>• Дети остаются в очереди на поступление в детский сад</li>
                </ul>
            </div>

            {/* Трудоустройство */}
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">💼</span>
                    <span>Трудоустройство и оплата</span>
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Официальное трудоустройство в детском саду</li>
                    <li>• Зарплата воспитателя — как у штатного сотрудника ДОУ (от квалификации)</li>
                    <li>• Помощник воспитателя — 0,5 ставки</li>
                </ul>
            </div>

            {/* Контакты */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <span>Куда обратиться?</span>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                    В ближайшее дошкольное образовательное учреждение или в:
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span>🏛️</span>
                        <span>Управление развития дошкольного образования</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>ул. Ленинградская, 92, г. Самара</span>
                    </div>
                    <a href="tel:8463407393" className="flex items-center gap-2 text-blue-600 hover:underline">
                        📞 340-73-93
                    </a>
                    <a href="http://www.depsamobr.ru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                        🌐 depsamobr.ru
                    </a>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-green-50 rounded-lg p-4 text-center text-sm text-green-700 border border-green-200">
                <p>
                    💡 Подробнее — на сайте Департамента образования в разделе «Для родителей»
                </p>
            </div>
        </div>
    );
};