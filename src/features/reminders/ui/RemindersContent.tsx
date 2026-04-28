export const RemindersContent = () => {
    // Ссылки на документы
    const pdfLinks = {
        booksList: 'https://cloud.mail.ru/public/HsNB/1T4hGeD66',
        crisis3Years: 'https://cloud.mail.ru/public/57uA/WkR755VX6',
        gamesAtHome: 'https://cloud.mail.ru/public/K23s/PbwN5QFmo',
        whatToPlay: 'https://cloud.mail.ru/public/Ggx8/QrgmqqUsj',
        speechDevelopment: 'https://yadi.sk/i/qOrpvI0TrrEjr',
        winterRoad: 'https://yadi.sk/i/JpKyT8xDrrEm6',
        natureSafety: 'https://yadi.sk/i/0LIITMyirrEjM',
        incompleteFamily: 'https://yadi.sk/i/qLDyurKwrrEnm',
        tvChild: 'https://yadi.sk/i/PDnq71BrrrEig',
        trafficRules: 'https://yadi.sk/i/cDB2uEsqrrEkM',
        safeToy: 'https://yadi.sk/i/zmhhZS95rrEmg',
        musicHelps: 'https://yadi.sk/i/Iq9JQHiorrEnK',
        patriot: 'http://media.wix.com/ugd/9c6a61_37c1d1c766cb4b0cab09411b295a683b.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-indigo-800 text-lg">
                    Памятки для родителей
                </h3>
                <p className="text-indigo-700 mt-1">
                    Полезные материалы по воспитанию, развитию и безопасности детей
                </p>
            </div>

            {/* Блок 1: Воспитание и развитие */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <span>Воспитание и развитие</span>
                </h4>
                <div className="space-y-2">
                    <a href={pdfLinks.booksList} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span className="text-gray-700">Список литературы для чтения дома</span>
                    </a>
                    <a href={pdfLinks.crisis3Years} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Кризис 3 лет</span>
                    </a>
                    <a href={pdfLinks.gamesAtHome} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Игры с детьми дома</span>
                    </a>
                    <a href={pdfLinks.whatToPlay} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Во что играть с ребенком дома</span>
                    </a>
                    <a href={pdfLinks.speechDevelopment} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Развитие речи ребёнка</span>
                    </a>
                    <a href={pdfLinks.musicHelps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Нам поможет музыка</span>
                    </a>
                    <a href={pdfLinks.patriot} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Мы растим патриотов</span>
                    </a>
                </div>
            </div>

            {/* Блок 2: Безопасность */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🛡️</span>
                    <span>Безопасность</span>
                </h4>
                <div className="space-y-2">
                    <a href={pdfLinks.winterRoad} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Поведение на зимней дороге</span>
                    </a>
                    <a href={pdfLinks.natureSafety} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Правила безопасности для выезда на природу с детьми</span>
                    </a>
                    <a href={pdfLinks.trafficRules} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Памятка о правилах ПДД</span>
                    </a>
                    <a href={pdfLinks.safeToy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Безопасная игрушка для малыша</span>
                    </a>
                </div>
            </div>

            {/* Блок 3: Семейные отношения */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🏠</span>
                    <span>Семейные отношения</span>
                </h4>
                <div className="space-y-2">
                    <a href={pdfLinks.incompleteFamily} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Психологические приемы «достраивания» неполной семьи</span>
                    </a>
                    <a href={pdfLinks.tvChild} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-gray-700">Телевизор — друг или враг для малыша?</span>
                    </a>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-indigo-50 rounded-lg p-3 text-center text-sm text-indigo-700 border border-indigo-200">
                <p>
                    📋 Больше памяток и рекомендаций — в методическом кабинете детского сада
                </p>
            </div>
        </div>
    );
};