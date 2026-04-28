export const DocumentsContent = () => {
    const documentLinks = {
        // Федеральные документы
        childRights: 'https://normativ.kontur.ru/document?moduleId=1&documentId=18162',
        educationLaw: 'https://normativ.kontur.ru/document?moduleId=1&documentId=502289',
        charityLaw: 'https://legalacts.ru/doc/federalnyi-zakon-ot-11081995-n-135-fz-o/',
        accessLaw: 'https://legalacts.ru/doc/federalnyi-zakon-ot-09022009-n-8-fz-ob/',
        personalDataLaw: 'https://normativ.kontur.ru/document?moduleId=1&documentId=501173',
        fgos: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ФГОС.pdf',
        fgosPlan: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ФГОС%20ДО.pdf',
        teacherStandard: 'https://normativ.kontur.ru/document?moduleId=1&documentId=281205',

        // Документы ДОУ
        charter: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2019%20УСТАВ.pdf',
        licenseObr: 'https://detsad30sam.ru/wa-data/public/site/docs/30/LicObr.pdf',
        licenseRegistry: 'https://detsad401sam.ru/wa-data/public/site/docs/30/Реестровая%20выписка.pdf',
        licenseMed: 'https://detsad30sam.ru/wa-data/public/site/docs/30/LicMed.pdf',
        selfInspection2025: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Самообследование%20за%202025%20год.pdf',
        selfInspection2024: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/Самообследование2024.pdf',
        developmentProgram: 'https://detsad30sam.ru/wa-data/public/site/docs/30/программа%20развития%20МБДОУ%2030.pdf',

        // Государственный контроль
        control2025: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/результаты%20проф.визитов%202025г..pdf',
        control2024: 'https://detsad30sam.ru/wa-data/public/site/docs/30/информация%20по%20предписаниям.pdf',
        control2023: 'https://detsad30sam.ru/wa-data/public/site/docs/30/инф.%20о%20поверках.pdf',
    };

    // Локальные акты (отдельный объект, так как их много)
    const localActs = [
        { title: 'Коллективный договор', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/КД.pdf' },
        { title: 'Порядок приема на обучение в ДОУ', url: 'https://detsad30sam.ru/wa-data/public/site/docs/58/2526/26-Положение%20о%20порядке%20%20приеме%20регламент%20931%202024%20(1).pdf' },
        { title: 'Положение о порядке возникновения, приостановления и прекращения образовательных отношений', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/Положение%20о%20порядке%20возникновения,%20приостановления%20и%20прекращения%20образовательных%20отношений%20(1)%20(2).pdf' },
        { title: 'Порядок и основания перевода и отчисления воспитанников', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/порядок%20перевода%20и%20отчисления.pdf' },
        { title: 'Положение о режиме занятий воспитанников', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/режим%20занятий.pdf' },
        { title: 'Положение о текущем контроле успеваемости и промежуточной аттестации', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/Положение%20о%20формах,%20периодичности%20и%20порядка%20текущего%20контроля%20успеваемости%20и%20промежуточной%20аттестации%20обучающихся%20(воспитанников).pdf' },
        { title: 'Правила внутреннего распорядка воспитанников', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/правила%20внутр.%20распорядка.pdf' },
        { title: 'Правила внутреннего трудового распорядка', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Правила%20внутреннего%202024%20%20%20%20%20%20%20%20%20ДОУ%2030.pdf' },
        { title: 'Положение об официальном сайте', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Офсайт.pdf' },
        { title: 'Положение о самообследовании', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/пол.%20о%20самообследовании.pdf' },
        { title: 'Положение о профессиональной переподготовке', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Профпереподготовка.pdf' },
        { title: 'Положение о Педагогическом Совете', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Педсовет.pdf' },
        { title: 'Положение о Родительском собрании', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Родсобр.pdf' },
        { title: 'Положение о Совете учреждения', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Совет.pdf' },
        { title: 'Положение об Общем Собрании работников', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ОСР.pdf' },
        { title: 'Положение о ППк', url: 'https://detsad30sam.ru/wa-data/public/site/docs/58/2526/Положение%20о%20ППк.pdf' },
        { title: 'Положение о дистанционном обучении', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Дистант.pdf' },
        { title: 'Положение о нормах профессиональной этики', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Этика.pdf' },
        { title: 'Положение о библиотечном фонде', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Библиотека.pdf' },
        { title: 'Положение о рабочей программе педагога', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Рабочая%20программа.pdf' },
        { title: 'Положение о пропускном режиме', url: 'https://detsad30sam.ru/wa-data/public/site/docs/58/2526/Положение%20о%20пропускном%20и%20внутриобъектовом%20режимах%20в%20ДОУ.pdf' },
        { title: 'Положение о расследовании несчастных случаев', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/НС.pdf' },
        { title: 'Положение о контроле качества питания', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Контроль%20качества%20питания.pdf' },
        { title: 'Положение о квотировании', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/квотироание.pdf' },
        { title: 'Положение об адаптивной программе для детей с ОВЗ', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Положение%20об%20адаптивной%20программе%20для%20детей%20с%20ОВЗ.pdf' },
        { title: 'Положение о языке обучения', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/Положение%20о%20языке%20(2).pdf' },
        { title: 'Положение о производственном контроле (ХАССП)', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/хассп.pdf' },
        { title: 'Положение об оплате труда', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/наше%20Положение%20об%20оплате%20труда%20с%201%20июля.2023.pdf' },
        { title: 'Положение о символике', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/положение%20о%20символике.pdf' },
        { title: 'Положение о наставничестве', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/наставничество.pdf' },
        { title: 'Положение о комиссии по урегулированию споров', url: 'https://detsad30sam.ru/wa-data/public/site/docs/58/2526/положение%20о%20кои%20по%20ур.споров%20(1).pdf' },
        { title: 'Положение о ВСОКО', url: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/всоко.pdf' },
    ];

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Документы
                </h3>
                <p className="text-blue-700 mt-1">
                    Нормативно-правовая база образовательной организации
                </p>
            </div>

            {/* Федеральные документы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📜</span>
                    <span>Документы федерального значения</span>
                </h4>
                <div className="grid grid-cols-1 gap-1 text-sm">
                    <DocumentLink title="Конвенция о правах ребенка" url={documentLinks.childRights} />
                    <DocumentLink title="Федеральный закон «Об образовании в РФ»" url={documentLinks.educationLaw} />
                    <DocumentLink title="Федеральный закон № 135-ФЗ «О благотворительной деятельности»" url={documentLinks.charityLaw} />
                    <DocumentLink title="Федеральный закон № 8-ФЗ «Об обеспечении доступа к информации…»" url={documentLinks.accessLaw} />
                    <DocumentLink title="Федеральный закон «О персональных данных»" url={documentLinks.personalDataLaw} />
                    <DocumentLink title="ФГОС дошкольного образования" url={documentLinks.fgos} />
                    <DocumentLink title="План действий по обеспечению введения ФГОС ДО" url={documentLinks.fgosPlan} />
                    <DocumentLink title="Приказ об утверждении профессионального стандарта педагога" url={documentLinks.teacherStandard} />
                </div>
            </div>

            {/* Документы ДОУ */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">🏫</span>
                    <span>Документы ДОУ</span>
                </h4>
                <div className="grid grid-cols-1 gap-1 text-sm">
                    <DocumentLink title="Устав" url={documentLinks.charter} />
                    <DocumentLink title="Лицензия на образовательную деятельность" url={documentLinks.licenseObr} />
                    <DocumentLink title="Выписка из реестра лицензий" url={documentLinks.licenseRegistry} />
                    <DocumentLink title="Лицензия на медицинскую деятельность" url={documentLinks.licenseMed} />
                    <DocumentLink title="Самообследование за 2025 год" url={documentLinks.selfInspection2025} />
                    <DocumentLink title="Самообследование за 2024 год" url={documentLinks.selfInspection2024} />
                    <DocumentLink title="Программа развития" url={documentLinks.developmentProgram} />
                </div>
            </div>

            {/* Локальные акты */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Локальные акты</span>
                </h4>
                <div className="max-h-64 overflow-y-auto pr-2 space-y-1">
                    {localActs.map((act, idx) => (
                        <DocumentLink key={idx} title={act.title} url={act.url} />
                    ))}
                </div>
            </div>

            {/* Государственный контроль */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">🔍</span>
                    <span>Государственный контроль (надзор)</span>
                </h4>
                <div className="grid grid-cols-1 gap-1 text-sm">
                    <DocumentLink title="Результаты контрольных мероприятий за 2025 год" url={documentLinks.control2025} />
                    <DocumentLink title="Результаты контрольных мероприятий за 2024 год" url={documentLinks.control2024} />
                    <DocumentLink title="Результаты контрольных мероприятий за 2023 год" url={documentLinks.control2023} />
                </div>
            </div>
        </div>
    );
};

// Вспомогательный компонент для ссылки на документ
const DocumentLink = ({ title, url }: { title: string; url: string }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1.5 px-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 text-sm hover:text-blue-600"
    >
        <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>{title}</span>
    </a>
);