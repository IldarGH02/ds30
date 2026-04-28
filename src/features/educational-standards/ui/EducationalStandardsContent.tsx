export const EducationalStandardsContent = () => {
    const pdfLinks = {
        fgosInfo: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/о%20фгос.pdf',
        rpps: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/РППС.pdf',
        comments: 'https://normativ.kontur.ru/document?moduleId=8&documentId=230512',
        fgosAmendment: 'https://normativ.kontur.ru/document?moduleId=1&documentId=329896',
        order373: 'https://normativ.kontur.ru/document?moduleId=1&documentId=475872',
        fgosOrder: 'https://normativ.kontur.ru/document?moduleId=1&documentId=442993',
        teacherStandard: 'https://normativ.kontur.ru/document?moduleId=1&documentId=281205',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-indigo-800 text-lg">
                    Образовательные стандарты и требования
                </h3>
                <p className="text-indigo-700 mt-1">
                    Федеральные государственные образовательные стандарты (ФГОС)
                </p>
            </div>

            {/* Основная информация */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📖</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Что такое ФГОС дошкольного образования?</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            ФГОС ДО — это совокупность обязательных требований к дошкольному образованию,
                            утверждённых Министерством просвещения РФ. Стандарт направлен на обеспечение
                            государственных гарантий уровня и качества образования на основе единства
                            обязательных требований к условиям реализации образовательных программ.
                        </p>
                    </div>
                </div>
            </div>

            {/* Ключевые документы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📜</span>
                    <span>Ключевые документы</span>
                </h4>
                <div className="grid grid-cols-1 gap-1">
                    <DocumentLink title="О федеральном государственном образовательном стандарте дошкольного образования" url={pdfLinks.fgosInfo} />
                    <DocumentLink title="Приказ №1155 «Об утверждении ФГОС ДО»" url={pdfLinks.fgosOrder} />
                    <DocumentLink title="Приказ №31 от 21.01.2019 «О внесении изменений в ФГОС ДО»" url={pdfLinks.fgosAmendment} />
                    <DocumentLink title="Приказ №373 от 31.07.2020 «Об утверждении Порядка организации образовательной деятельности по ООП»" url={pdfLinks.order373} />
                    <DocumentLink title="Приказ Минтруда №544н «Об утверждении профессионального стандарта «Педагог»" url={pdfLinks.teacherStandard} />
                    <DocumentLink title="Письмо Минобрнауки №08-249 от 28.02.2014 «Комментарии к ФГОС ДО»" url={pdfLinks.comments} />
                </div>
            </div>

            {/* Организация развивающей среды */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">🖥️</span>
                    <span>Организация развивающей среды</span>
                </h4>
                <div className="grid grid-cols-1 gap-1">
                    <DocumentLink title="Организация развивающей предметно-пространственной среды в соответствии с ФГОС ДО" url={pdfLinks.rpps} />
                </div>
            </div>

            {/* Краткая информация о стандарте */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-sm text-gray-600">
                <p className="font-semibold text-gray-700 mb-1">Основные положения ФГОС ДО:</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Поддержка разнообразия детства, сохранение уникальности и самоценности дошкольного детства</li>
                    <li>Личностно-развивающий и гуманистический характер взаимодействия взрослых и детей</li>
                    <li>Уважение личности ребёнка, создание благоприятной социальной ситуации развития</li>
                    <li>Обеспечение государственных гарантий качества дошкольного образования</li>
                </ul>
            </div>
        </div>
    );
};

const DocumentLink = ({ title, url }: { title: string; url: string }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1.5 px-2 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors text-gray-700 text-sm hover:text-indigo-600"
    >
        <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>{title}</span>
    </a>
);