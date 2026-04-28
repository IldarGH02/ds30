export const EducationalRoutesContent = () => {
    const routeLinks = {
        victoryDay: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/Образовательный%20маршрут%20Великий%20день.Великая%20Победа!.pdf',
        spring: 'https://docs.wixstatic.com/ugd/9c6a61_536f694ddf7b4329beb232fa3541640b.pdf',
        safety: 'https://docs.wixstatic.com/ugd/9c6a61_5834f4ac91aa43ebaf0d186a0fec6a36.pdf',
        builder: 'https://docs.wixstatic.com/ugd/9c6a61_b66b7f83d34c4ba98ca3692e19e97a3e.pdf',
        cook: 'https://docs.wixstatic.com/ugd/9c6a61_a404bb59a32447a894e876008f8556a7.pdf',
        poznavatel: 'https://docs.wixstatic.com/ugd/9c6a61_1d8f7c5376b9457491b2cbeb655284c0.pdf',
        toy: '',  // недоступно, замена на заглушку
        space: '', // недоступно, замена на заглушку
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-cyan-800 text-lg">
                    Образовательные маршруты
                </h3>
                <p className="text-cyan-700 mt-1">
                    Тематические маршруты для совместных занятий родителей с детьми
                </p>
            </div>

            {/* Введение */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🗺️</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                            Что такое образовательный маршрут?
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Образовательный маршрут — это серия занятий и заданий для совместного выполнения
                            родителями и детьми. Маршруты помогают развивать познавательный интерес,
                            расширять кругозор и укреплять детско-родительские отношения.
                        </p>
                    </div>
                </div>
            </div>

            {/* Список маршрутов */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Доступные маршруты</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <a
                        href={routeLinks.victoryDay}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors border border-gray-200 text-sm"
                    >
                        <span className="text-xl">🎖️</span>
                        <span className="text-gray-700">Великий день. Великая Победа!</span>
                    </a>

                    <a
                        href={routeLinks.spring}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors border border-gray-200 text-sm"
                    >
                        <span className="text-xl">🌸</span>
                        <span className="text-gray-700">Красавица Весна (для детей 2-3 лет)</span>
                    </a>

                    <a
                        href={routeLinks.safety}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors border border-gray-200 text-sm"
                    >
                        <span className="text-xl">🛡️</span>
                        <span className="text-gray-700">Безопасность</span>
                    </a>

                    <a
                        href={routeLinks.builder}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors border border-gray-200 text-sm"
                    >
                        <span className="text-xl">🏗️</span>
                        <span className="text-gray-700">Профессия строитель</span>
                    </a>

                    <a
                        href={routeLinks.cook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors border border-gray-200 text-sm"
                    >
                        <span className="text-xl">👨‍🍳</span>
                        <span className="text-gray-700">Профессия повар</span>
                    </a>

                    <a
                        href={routeLinks.poznavatel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors border border-gray-200 text-sm"
                    >
                        <span className="text-xl">📖</span>
                        <span className="text-gray-700">Познаем мир вместе: записки из книжки</span>
                    </a>

                    {/* Маршрут "Игрушка" — ссылка недоступна */}
                    <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg border border-gray-200 text-sm opacity-60 cursor-not-allowed">
                        <span className="text-xl">🧸</span>
                        <span className="text-gray-500">Игрушка</span>
                        <span className="text-xs text-gray-400 ml-auto">(ссылка недоступна)</span>
                    </div>

                    {/* Маршрут "Космос" — ссылка недоступна */}
                    <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg border border-gray-200 text-sm opacity-60 cursor-not-allowed">
                        <span className="text-xl">🚀</span>
                        <span className="text-gray-500">Космос</span>
                        <span className="text-xs text-gray-400 ml-auto">(ссылка недоступна)</span>
                    </div>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-cyan-50 rounded-lg p-3 text-center text-sm text-cyan-700 border border-cyan-200">
                <p>
                    🗺️ Образовательные маршруты помогут сделать занятия с ребёнком увлекательными и познавательными
                </p>
            </div>
        </div>
    );
};