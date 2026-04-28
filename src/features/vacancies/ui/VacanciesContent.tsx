export const VacanciesContent = () => {
    // Данные о вакантных местах по группам
    const groupsData = [
        { name: 'Первая младшая группа №2', age: 'от 1.6 до 2 лет', vacancies: 26, type: 'общеразвивающая' },
        { name: 'Первая младшая группа №4', age: 'от 2 до 3 лет', vacancies: 18, type: 'общеразвивающая' },
        { name: 'Вторая младшая группа №5', age: 'от 3 до 4 лет', vacancies: 6, type: 'общеразвивающая' },
        { name: 'Средняя группа №3 (ТНР)', age: 'от 4 до 5 лет', vacancies: 0, type: 'компенсирующая' },
        { name: 'Средняя группа №7', age: 'от 4 до 5 лет', vacancies: 5, type: 'общеразвивающая' },
        { name: 'Старшая группа №8', age: 'от 5 до 6 лет', vacancies: 0, type: 'общеразвивающая' },
        { name: 'Подготовительная группа №6', age: 'от 6 до 7 лет', vacancies: 0, type: 'общеразвивающая' },
        { name: 'Подготовительная группа №1 (ТНР)', age: 'от 6 до 7 лет', vacancies: 0, type: 'компенсирующая' },
    ];

    const totalVacancies = groupsData.reduce((sum, group) => sum + group.vacancies, 0);

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Вакантные места для приема (перевода) обучающихся
                </h3>
                <p className="text-blue-700 mt-1">
                    Информация о свободных местах в группах на 2026–2027 учебный год
                </p>
            </div>

            {/* Вакансии сотрудников */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">👥</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-800 mb-1">Вакансии среди сотрудников ДОУ</h4>
                        <p className="text-green-700 font-medium">Вакансий — нет</p>
                    </div>
                </div>
            </div>

            {/* Таблица вакантных мест для воспитанников */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">👧🧒</span>
                    <span>Вакантные места для воспитанников</span>
                </h4>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Группа</th>
                            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Возраст</th>
                            <th className="px-3 py-2 text-center text-sm font-semibold text-gray-700">Вакантных мест</th>
                            <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Направленность</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {groupsData.map((group, idx) => (
                            <tr key={idx} className={group.vacancies === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="px-3 py-2 text-sm text-gray-800">{group.name}</td>
                                <td className="px-3 py-2 text-sm text-gray-500">{group.age}</td>
                                <td className="px-3 py-2 text-center text-sm font-medium">
                                    {group.vacancies === 0 ? (
                                        <span className="text-red-500">нет</span>
                                    ) : (
                                        <span className="text-green-600 font-bold">{group.vacancies}</span>
                                    )}
                                </td>
                                <td className="px-3 py-2 text-sm">
                                    {group.type === 'компенсирующая' ? (
                                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">компенсирующая (ТНР)</span>
                                    ) : (
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">общеразвивающая</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot className="bg-gray-100">
                        <tr>
                            <td colSpan={2} className="px-3 py-2 text-sm font-semibold text-gray-800">ИТОГО:</td>
                            <td className="px-3 py-2 text-center text-sm font-bold text-blue-600">{totalVacancies}</td>
                            <td className="px-3 py-2"></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>

                <p className="text-sm text-gray-500 mt-3">
                    * ТНР — тяжелые нарушения речи (группа компенсирующей направленности)
                </p>
            </div>

            {/* Итоговая информация */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                <p className="text-yellow-800 text-sm font-medium">
                    Вакансий воспитанников в детском саду на 2026–2027 учебный год — {totalVacancies}
                </p>
            </div>

            {/* Контакты для справок */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <span>По вопросам обращаться</span>
                </h5>
                <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Заведующий МБДОУ №30:</span> Варенникова Ирина Николаевна</p>
                    <p><span className="font-medium">Адрес:</span> 443091, г. Самара, проспект Карла Маркса, 370</p>
                    <p><span className="font-medium">Телефон/факс:</span> <a href="tel:+78469560828" className="text-blue-600 hover:underline">8 (846) 956-08-28</a></p>
                    <p><span className="font-medium">E-mail:</span> <a href="mailto:ds30sam@mail.ru" className="text-blue-600 hover:underline">ds30sam@mail.ru</a></p>
                </div>
            </div>
        </div>
    );
};