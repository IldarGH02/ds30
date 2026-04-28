import { useState } from 'react';

interface NewsItem {
    id: number;
    title: string;
    date: string;
    content: string;
    files?: { title: string; url: string }[];
}

// Данные новостей (в будущем можно вынести в отдельный файл или подключать через API)
const initialNews: NewsItem[] = [
    {
        id: 1,
        title: 'Изменения в деятельности ПМПк с 1 марта 2025 года',
        date: '01.03.2025',
        content: `С 1 марта 2025 года в Самарской области функционируют 1 Центральная ПМПК и 16 ТПМПК.

Основные направления деятельности ПМПК:
• Проведение обследования детей в возрасте от 0 до 18 лет;
• Выявление особенностей в физическом и (или) психическом развитии;
• Определение специальных условий для получения образования;
• Подготовка рекомендаций по оказанию психолого-медико-педагогической помощи.

Порядок деятельности центральной и территориальных психолого-медико-педагогических комиссий на территории Самарской области регламентируется Приказом Министерства Просвещения РФ от 01.11.2024 г. №763 «Об утверждении положения о психолого-медико-педагогической комиссии».

Комиссии самостоятельно разрабатывают график работы, в том числе выездных заседаний, и самостоятельны в выборе диагностических методик, форм и методов обследования, с учетом индивидуальных, возрастных и типологических особенностей детей.

Для проведения обследования в комиссию одновременно с заявлением предоставляются следующие документы.`,
        files: [
            { title: 'Список психолого-медико-педагогических комиссий Самарской области', url: 'http://csoso.ru/wp-content/uploads/2025/03/Список-ПМПК-на-сайт-ОО.pdf' },
            { title: 'Основные направления деятельности ПМПК', url: 'http://csoso.ru/wp-content/uploads/2025/03/Осн.напр.деят.-ПМПК-на-сайт-ОО.pdf' },
            { title: 'Приказ Минпросвещения РФ №763 от 01.11.2024', url: 'http://publication.pravo.gov.ru/document/0001202411200013' },
            { title: 'Документы для проведения обследования в ПМПК', url: 'http://csoso.ru/wp-content/uploads/2025/03/Документы-ПМПК-на-сайт-ОО-1.pdf' },
        ],
    },
];

export const NewsPage = () => {
    const [news] = useState<NewsItem[]>(initialNews);
    const [expandedNewsId, setExpandedNewsId] = useState<number | null>(null);

    const toggleNews = (id: number) => {
        setExpandedNewsId(expandedNewsId === id ? null : id);
    };

    // Форматирование текста с переносами строк
    const formatContent = (content: string) => {
        return content.split('\n').map((line, idx) => {
            if (line.trim().startsWith('•')) {
                return <li key={idx} className="ml-4 text-gray-700">{line.trim()}</li>;
            }
            if (line.trim() === '') return <br key={idx} />;
            return <p key={idx} className="text-gray-700 mb-2">{line}</p>;
        });
    };

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок */}
                <div className="text-center mb-10">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-6 py-2 mb-4">
                        <span className="text-blue-600 font-medium">📰 Последние новости</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Новости детского сада
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Актуальная информация о жизни детского сада и изменениях в образовательном процессе
                    </p>
                </div>

                {/* Список новостей */}
                <div className="space-y-6">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            {/* Заголовок новости (кликабельный) */}
                            <button
                                onClick={() => toggleNews(item.id)}
                                className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors flex justify-between items-center"
                            >
                                <div>
                                    <div className="text-sm text-blue-600 mb-1">{item.date}</div>
                                    <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                                </div>
                                <svg
                                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${expandedNewsId === item.id ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Содержимое новости (раскрывается) */}
                            {expandedNewsId === item.id && (
                                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                    <div className="prose max-w-none">
                                        {formatContent(item.content)}
                                    </div>

                                    {/* Прикреплённые файлы */}
                                    {item.files && item.files.length > 0 && (
                                        <div className="mt-4 pt-3 border-t border-gray-100">
                                            <h4 className="font-semibold text-gray-700 mb-2 text-sm">📎 Прикреплённые документы:</h4>
                                            <ul className="space-y-1">
                                                {item.files.map((file, idx) => (
                                                    <li key={idx}>
                                                        <a
                                                            href={file.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:underline text-sm flex items-center gap-2"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            <span>{file.title}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Если новостей нет */}
                {news.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-12 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <p className="text-gray-500">В данный момент новостей нет.</p>
                        </div>
                    </div>
                )}

                {/* Контактная информация */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl text-center">
                    <p className="text-gray-600 text-sm">
                        📞 По вопросам можно обратиться к администрации детского сада: <strong className="text-gray-800">956-08-28</strong>
                    </p>
                </div>

                {/* Для администратора: кнопка добавления новости (пока скрыта/закомментирована) */}
                {/*
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
            + Добавить новость
          </button>
        </div>
        */}

            </div>
        </section>
    );
};