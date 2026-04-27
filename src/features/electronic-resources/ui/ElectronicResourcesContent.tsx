export const ElectronicResourcesContent = () => {
    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Электронные ресурсы для родителей
                </h3>
                <p className="text-blue-700 mt-1">
                    Полезные сайты и порталы для развития и воспитания детей
                </p>
            </div>

            {/* Образовательные порталы */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🏛️</span>
                    <span>Образовательные порталы</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <a href="http://www.edu.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Федеральный портал «Российское образование»</a>
                    <a href="http://www.mon.gov.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Минобрнауки РФ</a>
                    <a href="http://www.school.edu.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Российский общеобразовательный портал</a>
                    <a href="http://www.vidod.edu.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Дополнительное образование детей</a>
                </div>
            </div>

            {/* Детские библиотеки */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Детские библиотеки и сказки</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <a href="http://lukoshko.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Лукошко сказок</a>
                    <a href="http://www.skazka.com.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Сказка.com — 7000+ сказок</a>
                    <a href="http://www.dedushka.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Детская сетевая библиотека</a>
                    <a href="http://www.rgdb.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Российская государственная детская библиотека</a>
                </div>
            </div>

            {/* Энциклопедии и словари */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <span>Энциклопедии и словари</span>
                </h4>
                <div className="space-y-1 text-sm">
                    <a href="http://potomy.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">Потому.ру — детская энциклопедия</a>
                    <a href="http://www.slovari.gramota.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">Словари русского языка (Gramota.ru)</a>
                </div>
            </div>

            {/* Для родителей и воспитателей */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">👪</span>
                    <span>Для родителей и воспитателей</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <a href="http://www.solnet.ee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Детский портал «Солнышко»</a>
                    <a href="http://www.danilova.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Сайт Лены Даниловой (раннее развитие)</a>
                    <a href="http://www.detskiysad.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Детский сад.Ру</a>
                    <a href="http://adalin.mospsy.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Психологический центр «АДАЛИН»</a>
                </div>
            </div>

            {/* Детские журналы */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📰</span>
                    <span>Известные детские журналы</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-sm">
                    <a href="http://www.murzilka.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Мурзилка</a>
                    <span className="text-gray-400">•</span>
                    <a href="http://www.merrypictures.ru/last_vk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Весёлые картинки</a>
                    <span className="text-gray-400">•</span>
                    <a href="http://www.kostyor.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Костёр</a>
                    <span className="text-gray-400">•</span>
                    <a href="http://www.klepa.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Клёпа</a>
                    <span className="text-gray-400">•</span>
                    <a href="http://www.unnaturalist.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Юный натуралист</a>
                </div>
            </div>

            {/* Сайты детских писателей */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">✍️</span>
                    <span>Сайты детских писателей</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-sm">
                    <a href="http://s-marshak.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">С.Я. Маршак</a>
                    <span className="text-gray-400">•</span>
                    <a href="http://www.uspens.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Э.Н. Успенский</a>
                    <span className="text-gray-400">•</span>
                    <a href="http://andersen.com.ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Х.К. Андерсен</a>
                    <span className="text-gray-400">•</span>
                    <a href="http://www.bazhov.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">П.П. Бажов</a>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-amber-50 rounded-lg p-4 text-center text-sm text-amber-700 border border-amber-200">
                <p>
                    🔍 Больше ресурсов можно найти в разделе «Полезные ссылки» на нашем сайте
                </p>
            </div>
        </div>
    );
};