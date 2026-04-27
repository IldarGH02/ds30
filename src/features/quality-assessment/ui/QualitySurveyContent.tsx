// features/quality-survey/ui/QualitySurveyContent.tsx
export const QualitySurveyContent = () => {
    // Замените на актуальную ссылку, когда она появится
    const surveyUrl = "https://docs.google.com/forms/d/e/1FAIpQLScT3C8jIFpAcebff9TpQm6gk7OUHKuOzZLH5J54T-G5HFO38A/closedform";

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-800 text-lg">
                    Опрос о качестве образовательных услуг
                </h3>
                <p className="text-green-700 mt-1">
                    Уважаемые родители! Оцените качество образовательных услуг
                </p>
            </div>

            {/* Сообщение о недоступности опроса */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">ℹ️</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">
                            В настоящее время опрос не проводится
                        </h4>
                        <p className="text-yellow-700 text-sm">
                            По всем вопросам вы можете обратиться к администрации детского сада
                            по телефону <strong>956-08-28</strong> или по электронной почте{' '}
                            <strong>dou30samara@yandex.ru</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* Ссылка на форму (все равно можно показать, но пометить как неактивную) */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📝</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">Анкета для родителей</h4>
                        <p className="text-gray-600 text-sm mb-2">
                            К сожалению, форма для заполнения временно недоступна
                        </p>
                        <a
                            href={surveyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed opacity-60"
                            onClick={(e) => e.preventDefault()}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Опрос временно недоступен</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};