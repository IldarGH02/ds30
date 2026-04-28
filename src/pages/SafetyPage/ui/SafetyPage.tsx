import {SEO} from "@/entites/SEO";

export const SafetyPage = () => {
    // Ссылки на документы и видео
    const safetyLinks = {
        childSafety: 'https://9c6a61ca-e0f7-4dbf-b657-e20bf093d98e.usrfiles.com/ugd/9c6a61_820ce72ee30f47448df54f8bf4065042.pdf',
        railwayDiscipline: 'https://cloud.mail.ru/public/5hjm/1wNqcX1gq',
        railwayLesson1: 'https://cloud.mail.ru/public/bPfh/9c1QHpA29',
        railwayLesson2: 'https://cloud.mail.ru/public/J8nw/c7JnFK1dk',
        railwayVideo1: 'https://video.wixstatic.com/video/cf529e_c78ed061e113407691fd2b1e2eb852ad/360p/mp4/file.mp4',
        railwayVideo2: 'https://video.wixstatic.com/video/cf529e_8222df74fa634183b86427536ac6358a/360p/mp4/file.mp4',
        railwayVideo3: 'https://video.wixstatic.com/video/cf529e_06d38de628ea46f3adf5cb050e6e558a/360p/mp4/file.mp4',
        railwayVideo4: 'https://video.wixstatic.com/video/cf529e_4384a60791db41729d36a40423518f4b/360p/mp4/file.mp4',
        railwayVideo5: 'https://video.wixstatic.com/video/cf529e_af347df8bd2e4f2e8e73c335b1118c00/360p/mp4/file.mp4',
        pddGames: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Игры%20для%20дошкольников%20по%20ПДД.pdf',
        pddCardFile: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Картотека%20игр%20и%20физминуток%20по%20ПДД.pdf',
        pddColoring: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Детские%20раскраски%20по%20ПДД.pdf',
        pddRiddles: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Загадки%20о%20ПДД.pdf',
        pddWeather: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Памятка%20по%20безопасности%20на%20дорогах,%20при%20различной%20погоде.pdf',
        pddPedestrian: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Памятка%20юного%20пешахода.pdf',
        pddCarTransport: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Правила%20перевозки%20детей%20в%20автомобиле.pdf',
        pddPoems: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Стихи%20по%20ПДД%20детям.pdf',
    };

    return (
        <>
            <SEO
                title="Безопасность"
                description="Правила безопасного поведения на дорогах, объектах железнодорожного транспорта и в быту"
                url="https://ds30.vercel.app/safety"
            />
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Заголовок страницы */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 rounded-full px-6 py-2 mb-4">
                            <span className="text-red-600 font-medium">🛡️ Безопасность детей</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Безопасность
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Правила безопасного поведения на дорогах, объектах железнодорожного транспорта и в быту
                        </p>
                    </div>

                    {/* ========== БЛОК 1: ДЕТСКАЯ БЕЗОПАСНОСТЬ ========== */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-red-500 bg-red-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">🏠</span>
                                <span>Детская безопасность</span>
                            </h2>
                        </div>
                        <div className="p-5 space-y-3">
                            <a
                                href={safetyLinks.childSafety}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                            >
                                <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="text-gray-700">Памятка для родителей «Не оставляйте детей без присмотра»</span>
                            </a>
                        </div>
                    </div>

                    {/* ========== БЛОК 2: БЕЗОПАСНОСТЬ НА Ж/Д ТРАНСПОРТЕ ========== */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-blue-500 bg-blue-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">🚂</span>
                                <span>Безопасное поведение на объектах железнодорожного транспорта</span>
                            </h2>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg">🎥</span>
                                        <span className="font-medium text-gray-700 text-sm">Железная дорога — Железная Дисциплина</span>
                                    </div>
                                    <a href={safetyLinks.railwayDiscipline} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline break-all">Смотреть видео</a>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg">🎥</span>
                                        <span className="font-medium text-gray-700 text-sm">1 Урок безопасности на ЖД транспорте</span>
                                    </div>
                                    <a href={safetyLinks.railwayLesson1} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline break-all">Смотреть видео</a>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg">🎥</span>
                                        <span className="font-medium text-gray-700 text-sm">2 Урок безопасности на ЖД транспорте</span>
                                    </div>
                                    <a href={safetyLinks.railwayLesson2} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline break-all">Смотреть видео</a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <h4 className="font-medium text-gray-700 mb-2 text-sm">Короткие видеоролики о безопасности на ЖД транспорте:</h4>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                                    <a href={safetyLinks.railwayVideo1} target="_blank" rel="noopener noreferrer" className="text-center p-2 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors">
                                        <span className="text-xl">🎬</span>
                                        <p className="text-xs text-gray-600 mt-1">Видео 1</p>
                                    </a>
                                    <a href={safetyLinks.railwayVideo2} target="_blank" rel="noopener noreferrer" className="text-center p-2 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors">
                                        <span className="text-xl">🎬</span>
                                        <p className="text-xs text-gray-600 mt-1">Видео 2</p>
                                    </a>
                                    <a href={safetyLinks.railwayVideo3} target="_blank" rel="noopener noreferrer" className="text-center p-2 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors">
                                        <span className="text-xl">🎬</span>
                                        <p className="text-xs text-gray-600 mt-1">Видео 3</p>
                                    </a>
                                    <a href={safetyLinks.railwayVideo4} target="_blank" rel="noopener noreferrer" className="text-center p-2 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors">
                                        <span className="text-xl">🎬</span>
                                        <p className="text-xs text-gray-600 mt-1">Видео 4</p>
                                    </a>
                                    <a href={safetyLinks.railwayVideo5} target="_blank" rel="noopener noreferrer" className="text-center p-2 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors">
                                        <span className="text-xl">🎬</span>
                                        <p className="text-xs text-gray-600 mt-1">Видео 5</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========== БЛОК 3: ДОРОЖНАЯ БЕЗОПАСНОСТЬ ========== */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="border-l-4 border-green-500 bg-green-50 px-5 py-3">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl">🚦</span>
                                <span>Дорожная безопасность (ПДД)</span>
                            </h2>
                        </div>
                        <div className="p-5 space-y-4">
                            {/* Методические рекомендации */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                                    <span>📖</span> Методические рекомендации
                                </h3>
                                <div className="space-y-2">
                                    <a href={safetyLinks.pddGames} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Игры для дошкольников по ПДД</span>
                                    </a>
                                    <a href={safetyLinks.pddCardFile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Картотека игр и физминуток по ПДД</span>
                                    </a>
                                </div>
                            </div>

                            {/* Познавательная информация */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                                    <span>🎨</span> Познавательная информация
                                </h3>
                                <div className="space-y-2">
                                    <a href={safetyLinks.pddColoring} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Детские раскраски по ПДД</span>
                                    </a>
                                    <a href={safetyLinks.pddRiddles} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Загадки о ПДД</span>
                                    </a>
                                    <a href={safetyLinks.pddWeather} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Памятка по безопасности на дорогах при различной погоде</span>
                                    </a>
                                    <a href={safetyLinks.pddPedestrian} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Памятка юного пешехода</span>
                                    </a>
                                    <a href={safetyLinks.pddCarTransport} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Правила перевозки детей в автомобиле</span>
                                    </a>
                                    <a href={safetyLinks.pddPoems} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="text-gray-700">Стихи по ПДД детям</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Контактная информация */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl text-center">
                        <p className="text-gray-700 text-sm">
                            📞 По вопросам безопасности можно обратиться к администрации детского сада: <strong className="text-gray-800">956-08-28</strong>
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};