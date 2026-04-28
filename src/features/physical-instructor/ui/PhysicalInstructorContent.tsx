export const PhysicalInstructorContent = () => {
    // Ссылки на документы
    const pdfLinks = {
        sportswear: 'https://yadi.sk/i/59uydYPVrrDwi',
        winterClothes: 'https://yadi.sk/i/VXyb45BCrrDwj',
        afterIllness: 'https://yadi.sk/i/MjOqVdkxrrDwm',
        outdoorComfort: 'https://yadi.sk/i/Mh5iU9X6rrDwo',
    };

    // Ссылка на фото (если будет)
    const photoUrl = ''; // 👈 СЮДА ВСТАВИТЬ ССЫЛКУ НА ФОТО (если есть)

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-orange-800 text-lg">
                    Инструктор по физическому воспитанию
                </h3>
                <p className="text-orange-700 mt-1">
                    «Движение – жизнь»
                </p>
            </div>

            {/* Блок с информацией о специалисте */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Фото (если есть) */}
                    {photoUrl && (
                        <div className="flex justify-center">
                            <img
                                src={photoUrl}
                                alt="Инструктор по физическому воспитанию"
                                className="w-24 h-24 rounded-full object-cover border-3 border-orange-200 shadow-md"
                            />
                        </div>
                    )}
                    <div className="flex-1">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Этому девизу следуют многие люди. Сегодня модно быть здоровым, активным и жизнерадостным.
                            Моя профессия требует развития именно этих качеств, так как инструктор по физической культуре
                            ДОУ является примером для своих воспитанников и их родителей.
                        </p>
                    </div>
                </div>
            </div>

            {/* Материалы для родителей */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Рекомендации для родителей</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.sportswear}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Физкультурная форма для занятий</span>
                    </a>

                    <a
                        href={pdfLinks.winterClothes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Как одевать ребенка зимой</span>
                    </a>

                    <a
                        href={pdfLinks.afterIllness}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Физкультура после болезни</span>
                    </a>

                    <a
                        href={pdfLinks.outdoorComfort}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Комфортно ли ребенку на улице?</span>
                    </a>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-orange-50 rounded-lg p-3 text-center text-sm text-orange-700 border border-orange-200">
                <p>
                    💪 Здоровый образ жизни начинается с детства!
                </p>
            </div>
        </div>
    );
};