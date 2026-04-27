export const QueueInfoContent = () => {
    // Ссылка на инструкцию (Яндекс.Диск)
    const instructionUrl = 'https://yadi.sk/i/Y6tE0jqOovzvM';

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Узнай очередь в детский сад
                </h3>
                <p className="text-blue-700 mt-1">
                    Как проверить позицию в очереди на получение места в детском саду
                </p>
            </div>

            {/* Информация о проверке очереди */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🔍</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-2">Проверить очередь можно через портал:</h4>
                        <div className="space-y-2">
                            <a
                                href="https://es.asurso.ru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>es.asurso.ru — АИС «Е-услуги. Образование»</span>
                            </a>
                            <a
                                href="https://www.gosuslugi.ru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>gosuslugi.ru — Портал государственных услуг</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Инструкция Яндекс.Диск */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">📖</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-amber-800 mb-1">Подробная инструкция</h4>
                        <p className="text-amber-700 text-sm mb-2">
                            Как отслеживать позицию в очереди — пошаговое руководство
                        </p>
                        <a
                            href={instructionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span>Скачать инструкцию (PDF) — Яндекс.Диск</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Важная информация */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">ℹ️</span>
                    <span>Важно знать</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">• <span>Позиция в очереди может меняться в зависимости от льготных категорий граждан</span></li>
                    <li className="flex items-start gap-2">• <span>Рекомендуется проверять очередь не реже одного раза в месяц</span></li>
                    <li className="flex items-start gap-2">• <span>При изменении документов или льгот необходимо обновить информацию в заявлении</span></li>
                </ul>
            </div>

            {/* Контакты для справок */}
            <div className="bg-green-50 rounded-lg p-4 text-center text-sm text-green-700 border border-green-200">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span>Телефон для справок: <strong className="text-green-800">956-08-28</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>✉️</span>
                        <span>dou30samara@yandex.ru</span>
                    </div>
                </div>
            </div>
        </div>
    );
};