import logopedImg from '@/shared/assets/metodicCase/logoped/Sosnova.jpg'

export const SpeechTherapistContent = () => {
    // Ссылки на документы
    const pdfLinks = {
        difficulties: 'https://yadi.sk/i/gMkaSUbPqFi6d',
        games: 'https://yadi.sk/i/eiR_ofOzqFi6j',
        poet: 'https://yadi.sk/i/_1dsesxCqFi6n',
        sandGames: 'https://yadi.sk/i/WEOv8q4uqFi6o',
        phonemic: 'https://yadi.sk/i/30OCyX32qFi6p',
        writingPrevention: 'https://yadi.sk/i/zhOtrQ9PqFi6r',
        speech2_3: 'https://docs.wixstatic.com/ugd/9c6a61_6b59486762c7439f8b05d2312f871eea.pdf',
        speech3_4: 'https://docs.wixstatic.com/ugd/9c6a61_abf17a9b87ff454ea59adf059657cf58.pdf',
        speech4_5: 'https://docs.wixstatic.com/ugd/9c6a61_39863f2704964a9c956fa84af75b623b.pdf',
        speech5_6: 'https://docs.wixstatic.com/ugd/9c6a61_a010096bc70245489fba84a24523410c.pdf',
        speech6_7: 'https://docs.wixstatic.com/ugd/9c6a61_e5aafffe17c14ea18ba4c4ab74dac59e.pdf',
        schemes: 'https://cf529e00-8950-4517-b50a-c67b79f84ba8.usrfiles.com/ugd/cf529e_5717e53f289a414488a427cb8525784b.pdf',
    };
    const photoUrl = logopedImg;

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Учитель-логопед
                </h3>
                <p className="text-blue-700 mt-1">
                    Сосова Надежда Васильевна
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
                                alt="Сосова Надежда Васильевна"
                                className="w-28 h-28 rounded-full object-cover border-3 border-blue-200 shadow-md"
                            />
                        ) : (
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center border-3 border-blue-200">
                                <span className="text-3xl text-blue-400">🗣️</span>
                            </div>
                        )}
                    </div>

                    {/* Информация */}
                    <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">Учитель-логопед</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Высшая категория</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Помогает детям справиться с речевыми трудностями, развивает фонематический слух,
                            формирует правильное произношение и готовит к обучению грамоте.
                        </p>
                    </div>
                </div>
            </div>

            {/* Консультации и материалы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Консультации и материалы для родителей</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.difficulties}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Детские и взрослые трудности: звук «Р»</span>
                    </a>

                    <a
                        href={pdfLinks.games}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Игры по дороге домой</span>
                    </a>

                    <a
                        href={pdfLinks.poet}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">К нам поэт приходит в гости</span>
                    </a>

                    <a
                        href={pdfLinks.sandGames}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Логопедические игры в песочной стране</span>
                    </a>

                    <a
                        href={pdfLinks.phonemic}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Развитие фонематического восприятия как базового условия овладения грамотой</span>
                    </a>

                    <a
                        href={pdfLinks.writingPrevention}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Рекомендации по предупреждению нарушений письменной речи у детей</span>
                    </a>

                    <a
                        href={pdfLinks.schemes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
                    >
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Использование опорных схем-символов при составлении описательных рассказов</span>
                    </a>
                </div>
            </div>

            {/* Особенности речевого развития по возрастам */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    <span>Особенности речевого развития дошкольников</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a href={pdfLinks.speech2_3} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>👶</span> 2-3 года
                    </a>
                    <a href={pdfLinks.speech3_4} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>🧒</span> 3-4 года
                    </a>
                    <a href={pdfLinks.speech4_5} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>👧</span> 4-5 лет
                    </a>
                    <a href={pdfLinks.speech5_6} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>🧒</span> 5-6 лет
                    </a>
                    <a href={pdfLinks.speech6_7} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                        <span>📖</span> 6-7 лет (подробно)
                    </a>
                </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-blue-50 rounded-lg p-3 text-center text-sm text-blue-700 border border-blue-200">
                <p>
                    📞 По вопросам речевого развития детей можно обратиться к учителю-логопеду
                </p>
            </div>
        </div>
    );
};