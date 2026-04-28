import musicDirector from '@/shared/assets/metodicCase/music/Zvereva.jpg'

export const MusicDirectorContent = () => {
    // Ссылки на документы
    const pdfLinks = {
        familyEducation: 'https://yadi.sk/i/DK_4bh4F3EJEEy',
        recommendations: 'https://yadi.sk/i/faYv2Gf2rrDuv',
        musicInfluence: 'https://yadi.sk/i/6bsF52ferrDuw',
        instruments: 'https://yadi.sk/i/OAVfeLyprrDus',
        samara: 'https://yadi.sk/i/QWl30huizqWF7',
        moroz: 'https://yadi.sk/i/vOuN2w2QzqWDD',
        musicTherapy: 'https://docs.google.com/presentation/d/1WFx_QZ4cHXcGEQrt5MwcA4LhnddEn4F3/edit?usp=sharing',
    };

    // Ссылка на фото (вставьте свою ссылку в src)
    const photoUrl = musicDirector; // 👈 СЮДА ВСТАВИТЬ ССЫЛКУ НА ФОТО

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-800 text-lg">
                    Музыкальный руководитель
                </h3>
                <p className="text-purple-700 mt-1">
                    Зверева Маргарита Николаевна
                </p>
            </div>

            {/* Блок с фото и информацией */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Фото */}
                    <div className="flex justify-center">
                        {photoUrl ? (
                            <img
                                src={photoUrl}
                                alt="Зверева Маргарита Николаевна"
                                className="w-28 h-28 rounded-full object-cover border-3 border-purple-200 shadow-md"
                            />
                        ) : (
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center border-3 border-purple-200">
                                <span className="text-3xl text-purple-400">🎵</span>
                            </div>
                        )}
                    </div>

                    {/* Информация */}
                    <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">Высшая категория</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">Педагогический стаж: 15 лет</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Создаёт условия для развития музыкальных способностей детей,
                            приобщает их к миру прекрасного через музыку, пение и танец.
                        </p>
                    </div>
                </div>
            </div>

            {/* Материалы для родителей */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Консультации и материалы для родителей</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.familyEducation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Консультация: музыкальное воспитание в семье</span>
                    </a>

                    <a
                        href={pdfLinks.recommendations}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Рекомендации для родителей</span>
                    </a>

                    <a
                        href={pdfLinks.musicInfluence}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Влияние музыки на развитие ребёнка</span>
                    </a>

                    <a
                        href={pdfLinks.instruments}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Игра на музыкальных инструментах на праздниках (из опыта работы)</span>
                    </a>

                    <a
                        href={pdfLinks.samara}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Самара — моя малая Родина</span>
                    </a>

                    <a
                        href={pdfLinks.moroz}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Волшебный сундучок Деда Мороза</span>
                    </a>

                    <a
                        href={pdfLinks.musicTherapy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Музыкотерапия для сохранения здоровья детей (презентация)</span>
                    </a>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-purple-50 rounded-lg p-3 text-center text-sm text-purple-700 border border-purple-200">
                <p>
                    📞 По вопросам музыкального развития детей можно обратиться к музыкальному руководителю
                </p>
            </div>
        </div>
    );
};