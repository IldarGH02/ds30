export const NurseContent = () => {
    // Ссылки на документы
    const pdfLinks = {
        flu: 'https://yadi.sk/i/c4Os5948rrDyd',
    };

    // Ссылка на фото (если будет)
    const photoUrl = ''; // 👈 СЮДА ВСТАВИТЬ ССЫЛКУ НА ФОТО (если есть)

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-teal-800 text-lg">
                    Советы медицинской сестры
                </h3>
                <p className="text-teal-700 mt-1">
                    Рекомендации по укреплению здоровья детей
                </p>
            </div>

            {/* Информация о медицинской сестре */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Фото (если есть) */}
                    {photoUrl && (
                        <div className="flex justify-center">
                            <img
                                src={photoUrl}
                                alt="Медицинская сестра"
                                className="w-24 h-24 rounded-full object-cover border-3 border-teal-200 shadow-md"
                            />
                        </div>
                    )}
                    <div className="flex-1">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Медицинская сестра детского сада следит за здоровьем воспитанников,
                            проводит профилактические мероприятия, консультирует родителей по вопросам
                            закаливания, питания, профилактики заболеваний и соблюдения санитарных норм.
                        </p>
                    </div>
                </div>
            </div>

            {/* Памятки и рекомендации */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Памятки для родителей</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.flu}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Памятка для родителей: профилактика гриппа</span>
                    </a>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-teal-50 rounded-lg p-3 text-center text-sm text-teal-700 border border-teal-200">
                <p>
                    🏥 По вопросам здоровья детей можно обратиться к медицинской сестре детского сада
                </p>
            </div>
        </div>
    );
};