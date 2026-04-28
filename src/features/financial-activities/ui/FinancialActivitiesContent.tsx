export const FinancialActivitiesContent = () => {
    const pdfLinks = {
        plan2025_1: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/План%20ФХД_1.pdf',
        plan2025_2: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/План%20ФХД_3.pdf',
        explanation2024: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/Пояснит.записка%20и%20отчет%20по%20МЗ%20за%202024г.%20(3).pdf',
        report2024_9months: 'https://detsad30sam.ru/wa-data/public/site/docs/30/отчет%20о%20выполнении%20МЗ%20за%209%20месяцев%202024.pdf',
        explanation2024_9months: 'https://detsad30sam.ru/wa-data/public/site/docs/30/пояснительная%20записка%20о%20результатах%20выполнения%20МЗ%20за%209%20месяцев%202024.pdf',
        report2023: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Отчет%20МЗ%202023г.pdf',
        explanation2023: 'https://detsad30sam.ru/wa-data/public/site/docs/30/поясн.%20на%2001.01.2024.pdf',
        plan2023: 'https://detsad30sam.ru/wa-data/public/site/docs/30/ПФХД%2011.01.2023.pdf',
        plan2022: 'https://cf529e00-8950-4517-b50a-c67b79f84ba8.usrfiles.com/ugd/cf529e_65923c459d7e41ae8904113137c6db7c.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-emerald-800 text-lg">
                    Финансово-хозяйственная деятельность
                </h3>
                <p className="text-emerald-700 mt-1">
                    Планы, отчёты и результаты выполнения муниципального задания
                </p>
            </div>

            {/* Краткая информация */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💰</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">О деятельности</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Учреждение финансируется за счёт средств бюджета городского округа Самара.
                            Основными источниками финансирования являются субсидии на выполнение муниципального задания
                            и целевые субсидии. Платные образовательные услуги не предоставляются.
                        </p>
                    </div>
                </div>
            </div>

            {/* Документы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    <span>Документы финансово-хозяйственной деятельности</span>
                </h4>

                <div className="space-y-4">
                    {/* Планы ФХД */}
                    <div className="border-l-2 border-emerald-300 pl-3">
                        <h5 className="font-medium text-emerald-700 text-sm mb-2">Планы финансово-хозяйственной деятельности</h5>
                        <div className="space-y-1">
                            <DocumentLink title="План ФХД на 2025 г. (от 16.01.2025)" url={pdfLinks.plan2025_1} />
                            <DocumentLink title="План ФХД на 2025 г. (от 28.02.2025)" url={pdfLinks.plan2025_2} />
                            <DocumentLink title="План ФХД на 2023 год" url={pdfLinks.plan2023} />
                            <DocumentLink title="План ФХД на 2022 год" url={pdfLinks.plan2022} />
                        </div>
                    </div>

                    {/* Отчёты за 2024 год */}
                    <div className="border-l-2 border-blue-300 pl-3">
                        <h5 className="font-medium text-blue-700 text-sm mb-2">Отчёты за 2024 год</h5>
                        <div className="space-y-1">
                            <DocumentLink title="Пояснительная записка о результатах выполнения муниципального задания за 2024 год" url={pdfLinks.explanation2024} />
                            <DocumentLink title="Отчёт о выполнении муниципального задания за 9 месяцев 2024 года" url={pdfLinks.report2024_9months} />
                            <DocumentLink title="Пояснительная записка о результатах выполнения МЗ за 9 месяцев 2024 года" url={pdfLinks.explanation2024_9months} />
                        </div>
                    </div>

                    {/* Отчёты за 2023 год */}
                    <div className="border-l-2 border-purple-300 pl-3">
                        <h5 className="font-medium text-purple-700 text-sm mb-2">Отчёты за 2023 год</h5>
                        <div className="space-y-1">
                            <DocumentLink title="Отчёт о выполнении муниципального задания за 2023 год" url={pdfLinks.report2023} />
                            <DocumentLink title="Пояснительная записка о результатах выполнения МЗ за 12 месяцев 2023 года" url={pdfLinks.explanation2023} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg text-sm">
                <p className="text-yellow-800">
                    📌 Платные образовательные услуги в 2025-2026 учебном году не предоставляются
                </p>
            </div>
        </div>
    );
};

const DocumentLink = ({ title, url }: { title: string; url: string }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1.5 px-2 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors text-gray-700 text-sm hover:text-emerald-600"
    >
        <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>{title}</span>
    </a>
);