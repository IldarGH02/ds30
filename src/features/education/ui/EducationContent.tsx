export const EducationContent = () => {
    const pdfLinks = {
        oop: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/ООП1.pdf',
        aoopZpr: 'https://detsad30sam.ru/wa-data/public/site/docs/30/АООП%20для%20детей%20с%20ЗПР.pdf',
        aoopTnr: 'https://detsad30sam.ru/wa-data/public/site/docs/30/АООП%20для%20детей%20с%20ТНР.pdf',
        expertList: 'https://detsad30sam.ru/wa-data/public/site/docs/30/Лист%20экспертной%20оценки.pdf',
        briefDescription: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/краткое.pdf',
        adaptiveProgram: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Адаптиндивид.pdf',
        individualProgram: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ИндивидОП.pdf',
        curriculum: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/УП2526.pdf',
        annualPlan: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ГП2526.pdf',
        victoryPlan: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2425/План%20посвященный%2080%20%20-%20летию%20Победы%20советского%20народа%20в%20ВОВ.pdf',
        thematicPlanning: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/КТП2526.pdf',
        scheduleOod: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ОД2526.pdf',
        dailyRoutine: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Режим2526.pdf',
        dailySchedule: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/распорядок.pdf',
        annotationBirth: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ОТ%20рождения.pdf',
        annotationSafety: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Безопасность.pdf',
        annotationConstruction: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Конструирование.pdf',
        annotationMusic: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Муз.pdf',
        annotationColors: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Ладошки.pdf',
        annotationEcologist: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Эколог.pdf',
        programPhysical: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/ООПфиз.pdf',
        programEducation: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/Воспитания.pdf',
        annotationLogoped: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/лого.pdf',
        annotationTeacher: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/воспитатель.pdf',
        annotationPhysical: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/физ.pdf',
        annotationMusicTeacher: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/музрук.pdf',
        annotationPsychologist: 'https://detsad30sam.ru/wa-data/public/site/docs/30/2526/психолог.pdf',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-800 text-lg">
                    Образование
                </h3>
                <p className="text-green-700 mt-1">
                    Основная информация об образовательной деятельности
                </p>
            </div>

            {/* Основные сведения */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Уровень образования:</span>
                    <p className="text-gray-600">Дошкольное образование</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Форма обучения:</span>
                    <p className="text-gray-600">Очная</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Нормативный срок:</span>
                    <p className="text-gray-600">До 5 лет</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Язык обучения:</span>
                    <p className="text-gray-600">Русский</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Численность обучающихся:</span>
                    <p className="text-gray-600">212 человек</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Групп в ДОУ:</span>
                    <p className="text-gray-600">9 групп</p>
                </div>
            </div>

            {/* Программы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📘</span>
                    <span>Образовательные программы</span>
                </h4>
                <div className="grid grid-cols-1 gap-1">
                    <DocumentLink title="Основная образовательная программа" url={pdfLinks.oop} />
                    <DocumentLink title="Адаптированная программа для детей с ЗПР" url={pdfLinks.aoopZpr} />
                    <DocumentLink title="Адаптированная программа для детей с ТНР" url={pdfLinks.aoopTnr} />
                    <DocumentLink title="Краткое описание программы" url={pdfLinks.briefDescription} />
                    <DocumentLink title="Индивидуальная образовательная программа" url={pdfLinks.individualProgram} />
                </div>
            </div>

            {/* Планирование */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    <span>Планирование</span>
                </h4>
                <div className="grid grid-cols-1 gap-1">
                    <DocumentLink title="Учебный план на 2025-2026 учебный год" url={pdfLinks.curriculum} />
                    <DocumentLink title="Годовой план работы на 2025-2026 учебный год" url={pdfLinks.annualPlan} />
                    <DocumentLink title="План к 80-летию Победы" url={pdfLinks.victoryPlan} />
                    <DocumentLink title="Рабочая программа воспитания" url={pdfLinks.programEducation} />
                </div>
            </div>

            {/* Режим и расписание */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">⏰</span>
                    <span>Режим и расписание</span>
                </h4>
                <div className="grid grid-cols-1 gap-1">
                    <DocumentLink title="Расписание образовательной деятельности" url={pdfLinks.scheduleOod} />
                    <DocumentLink title="Режим дня по группам" url={pdfLinks.dailyRoutine} />
                    <DocumentLink title="Распорядок дня" url={pdfLinks.dailySchedule} />
                    <DocumentLink title="Комплексно-тематическое планирование" url={pdfLinks.thematicPlanning} />
                </div>
            </div>

            {/* Аннотации */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Аннотации к программам</span>
                </h4>
                <div className="grid grid-cols-1 gap-1">
                    <DocumentLink title="«От рождения до школы»" url={pdfLinks.annotationBirth} />
                    <DocumentLink title="«Безопасность»" url={pdfLinks.annotationSafety} />
                    <DocumentLink title="«Конструирование и ручной труд»" url={pdfLinks.annotationConstruction} />
                    <DocumentLink title="«Музыкальные шедевры»" url={pdfLinks.annotationMusic} />
                    <DocumentLink title="«Цветные ладошки»" url={pdfLinks.annotationColors} />
                    <DocumentLink title="«Юный эколог»" url={pdfLinks.annotationEcologist} />
                </div>
            </div>

            {/* Рабочие программы специалистов */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">👩‍🏫</span>
                    <span>Рабочие программы специалистов</span>
                </h4>
                <div className="grid grid-cols-1 gap-1">
                    <DocumentLink title="Учитель-логопед" url={pdfLinks.annotationLogoped} />
                    <DocumentLink title="Воспитатель" url={pdfLinks.annotationTeacher} />
                    <DocumentLink title="Инструктор по физической культуре" url={pdfLinks.annotationPhysical} />
                    <DocumentLink title="Музыкальный руководитель" url={pdfLinks.annotationMusicTeacher} />
                    <DocumentLink title="Педагог-психолог" url={pdfLinks.annotationPsychologist} />
                    <DocumentLink title="Программа по физическому развитию" url={pdfLinks.programPhysical} />
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg text-sm">
                <p className="text-yellow-800">
                    📌 Аккредитация: государственная аккредитация для дошкольного образования не предусмотрена
                </p>
                <p className="text-yellow-700 text-xs mt-1">
                    Практика, электронное обучение и дистанционные технологии не предусмотрены
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
        className="flex items-center gap-2 py-1.5 px-2 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors text-gray-700 text-sm hover:text-green-600"
    >
        <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>{title}</span>
    </a>
);