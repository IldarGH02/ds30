import {SEO} from "@/entites/SEO";

export const ConsultingCenterPage = () => {
    const pdfLinks = {
        schedule: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_f96dbc8e87bf4d65b7fba3f2828f9a49.pdf',
        regulation: 'https://481e1da9-3d91-4383-9c44-692779d50dbb.filesusr.com/ugd/9c6a61_3c8b4aaef9374ba59d2cdd40d968c0b9.pdf',
    };

    return (
        <>
            <SEO
                title="Консультационный центр"
                description='Помощь семьям, чьи дети не посещают детский сад'
                url="https://ds30.vercel.app/consulting-center"
            />
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок страницы */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-purple-600 font-medium">💬 Помощь семьям</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Консультационный пункт
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Помощь семьям, чьи дети не посещают детский сад
                        </p>
                    </div>

                    {/* Обращение к родителям */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="p-5">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl">👋</span>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-gray-800 text-lg mb-1">
                                        Уважаемые мамы, папы, бабушки и дедушки!
                                    </h2>
                                    <p className="text-gray-600">
                                        Ваш малыш не посещает детский сад? Тогда для Вас на базе нашего ДОУ работает консультационный пункт!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Кто поможет */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-blue-500 bg-blue-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">🎯</span>
                                <span>Вы получите помощь специалистов:</span>
                            </h2>
                        </div>
                        <div className="p-5">
                            <div className="flex flex-wrap gap-2">
                                {['заведующий', 'старший воспитатель', 'педагог-психолог', 'инструктор по физкультуре', 'медицинский работник', 'музыкальный руководитель'].map((spec, idx) => (
                                    <span key={idx} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                  {spec}
                </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Что предлагаем */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-green-500 bg-green-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">✨</span>
                                <span>Что мы предлагаем?</span>
                            </h2>
                        </div>
                        <div className="p-5">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Методическая помощь</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Психолого-педагогическая помощь</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Диагностическая помощь</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Консультативная помощь</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Подбор литературы и игр</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Обучение развивающим технологиям</li>
                            </ul>
                        </div>
                    </div>

                    {/* Популярные вопросы */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-amber-500 bg-amber-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">❓</span>
                                <span>Наши специалисты ответят на вопросы:</span>
                            </h2>
                        </div>
                        <div className="p-5">
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
                    </div>

                    {/* Как получить консультацию */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-gray-600 bg-gray-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">📞</span>
                                <span>Как получить консультацию?</span>
                            </h2>
                        </div>
                        <div className="p-5 space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"><span className="text-lg">📞</span></div>
                                <div><p className="font-medium text-gray-800">По телефону</p><p className="text-sm text-gray-600">956-08-28 (предварительная запись)</p></div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"><span className="text-lg">✉️</span></div>
                                <div><p className="font-medium text-gray-800">По электронной почте</p><p className="text-sm text-gray-600">ds30sam@mail.ru</p></div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"><span className="text-lg">🌐</span></div>
                                <div><p className="font-medium text-gray-800">На сайте</p><p className="text-sm text-gray-600">Информация размещается на официальном сайте ДОУ</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Документы */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-indigo-500 bg-indigo-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">📄</span>
                                <span>Документы</span>
                            </h2>
                        </div>
                        <div className="p-5 space-y-2">
                            <a href={pdfLinks.schedule} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <span>График работы консультационного пункта</span>
                            </a>
                            <a href={pdfLinks.regulation} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <span>Положение о консультационном пункте</span>
                            </a>
                        </div>
                    </div>

                    {/* Бесплатно */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl text-center">
                        <p className="text-purple-700">
                            💬 Консультации предоставляются <strong>бесплатно</strong> для семей, чьи дети не посещают детский сад
                        </p>
                    </div>

                </div>
            </section>
        </>

    );
};