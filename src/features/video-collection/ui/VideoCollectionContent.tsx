export const VideoCollectionContent = () => {
    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-800 text-lg">
                    Коллекция фильмов и роликов для родителей
                </h3>
                <p className="text-purple-700 mt-1">
                    Видеоматериалы по воспитанию и развитию детей
                </p>
            </div>

            {/* Предупреждение о недоступности сайта masik.tv */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">ℹ️</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Временная недоступность</h4>
                        <p className="text-yellow-700 text-sm">
                            Некоторые видеоматериалы временно недоступны. Пожалуйста, попробуйте зайти позже.
                        </p>
                    </div>
                </div>
            </div>

            {/* Список видео */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🎬</span>
                    <span>Доступные видео</span>
                </h4>
                <div className="space-y-3">
                    {/* Пальчиковые игры */}
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-lg">✋</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-medium text-gray-800">Пальчиковые игры для детей</span>
                                <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">видео</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Развитие мелкой моторики и речи через игровые упражнения</p>
                        </div>
                    </div>

                    {/* Песенки-инсценировки */}
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-lg">🎵</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-medium text-gray-800">Песенки-инсценировки</span>
                                <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">видео</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Музыкальные занятия для развития творческих способностей</p>
                        </div>
                    </div>

                    {/* Детские истерики */}
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-lg">😢</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-medium text-gray-800">Детские истерики</span>
                                <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">видео</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Как понять причины и помочь ребёнку справиться с эмоциями</p>
                        </div>
                    </div>

                    {/* Причины задержки речи */}
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-lg">🗣️</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-medium text-gray-800">Причины задержки развития речи у детей</span>
                                <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">видео</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Что нужно знать родителям о речевом развитии</p>
                        </div>
                    </div>

                    {/* Документальный фильм "Урок на всю жизнь" */}
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
                        <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-lg">🎬</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-medium text-gray-800">Документальный фильм «Урок на всю жизнь»</span>
                                <span className="text-xs text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">фильм</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                Фильм, посвященный учителям и воспитателям, чей ежедневный труд является основой будущего нации
                            </p>
                            <a
                                href="https://yadi.sk/i/aJVlgn7g3ApVjR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 text-xs mt-2 font-medium"
                            >
                                <span>📺</span>
                                <span>Смотреть на Яндекс.Диске →</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-500 border border-gray-200">
                <p>
                    🎥 Видеоматериалы помогут родителям в воспитании и развитии детей
                </p>
            </div>
        </div>
    );
};