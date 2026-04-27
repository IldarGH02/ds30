
export const ConsultingCenterContent = () => {
    const pdfLinks = {
        schedule: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_f96dbc8e87bf4d65b7fba3f2828f9a49.pdf',
        regulation: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_3c8b4aaef9374ba59d2cdd40d968c0b9.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-800 text-lg">
                    Консультационный пункт
                </h3>
                <p className="text-purple-700 mt-1">
                    Помощь семьям, чьи дети не посещают детский сад
                </p>
            </div>

            {/* Обращение к родителям */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">👋</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Уважаемые мамы, папы, бабушки и дедушки!
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Ваш малыш не посещает детский сад? Тогда для Вас на базе нашего ДОУ работает консультационный пункт!
                        </p>
                    </div>
                </div>
            </div>

            {/* Что можно получить */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎯</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-blue-800 mb-1">Вы получите помощь специалистов:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['заведующий', 'старший воспитатель', 'педагог-психолог', 'инструктор по физкультуре', 'медицинский работник', 'музыкальный руководитель'].map((spec, idx) => (
                                <span key={idx} className="inline-block bg-white rounded-full px-3 py-1 text-xs text-gray-700 border border-blue-200">
                  {spec}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Виды помощи */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    <span>Что мы предлагаем?</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Методическая помощь</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Психолого-педагогическая помощь</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Диагностическая помощь</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Консультативная помощь</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Подбор литературы и игр</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Обучение развивающим технологиям</li>
                </ul>
            </div>

            {/* Популярные вопросы */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">❓</span>
                    <span>Наши специалисты ответят на вопросы:</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Как подготовить ребёнка к детскому саду?</li>
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Какую литературу читать ребёнку?</li>
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Чем руководствоваться при выборе игры и игрушки?</li>
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Как сохранить и укрепить здоровье ребёнка?</li>
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Как помочь ребёнку справиться с трудностями в общении?</li>
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Как выявить и развивать творческие способности?</li>
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Как помочь тревожному ребёнку?</li>
                    <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Готов ли Ваш ребёнок к школе?</li>
                </div>
            </div>

            {/* Контакты */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <span>Как получить консультацию?</span>
                </h4>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-200">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><span className="text-sm">📞</span></div>
                        <div><p className="font-medium text-gray-800">По телефону</p><p className="text-sm text-gray-600">956-08-28 (предварительная запись)</p></div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><span className="text-sm">✉️</span></div>
                        <div><p className="font-medium text-gray-800">По электронной почте</p><p className="text-sm text-gray-600">ds30sam@mail.ru</p></div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-200">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"><span className="text-sm">🌐</span></div>
                        <div><p className="font-medium text-gray-800">На сайте</p><p className="text-sm text-gray-600">Информация размещается на официальном сайте ДОУ</p></div>
                    </div>
                </div>
            </div>

            {/* Документы */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    <span>Документы</span>
                </h4>
                <div className="space-y-2">
                    <a href={pdfLinks.schedule} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span>График работы консультационного пункта</span>
                    </a>
                    <a href={pdfLinks.regulation} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span>Положение о консультационном пункте</span>
                    </a>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-purple-50 rounded-lg p-4 text-center text-sm text-purple-700 border border-purple-200">
                <p>Консультации предоставляются <strong>бесплатно</strong> для семей, чьи дети не посещают детский сад</p>
            </div>
        </div>
    );
};