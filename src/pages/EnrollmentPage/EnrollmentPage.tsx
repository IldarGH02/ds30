export const EnrollmentPage = () => {
    // Здесь будут ссылки на документы
    // После того, как вы предоставите ссылки, я их добавлю

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Порядок зачисления ребенка в ДОУ
                    </h1>
                    <p className="text-xl text-gray-600">
                        Нормативно-правовая база и документы для поступления
                    </p>
                </div>

                {/* Документы */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="border-l-4 border-blue-500 bg-blue-50 px-6 py-4">
                        <h2 className="text-xl font-bold text-gray-800">📄 Локальные акты ДОУ</h2>
                    </div>
                    <div className="p-4 space-y-2">
                        <DocumentLink title="Положение о возникновении, приостановлении и прекращении образовательных отношений" />
                        <DocumentLink title="Положение о личном деле воспитанников" />
                        <DocumentLink title="Положение о порядке перевода воспитанников" />
                        <DocumentLink title="Положение о порядке сохранения места за воспитанником" />
                    </div>
                </div>

                {/* Постановления Администрации */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
                    <div className="border-l-4 border-green-500 bg-green-50 px-6 py-4">
                        <h2 className="text-xl font-bold text-gray-800">⚖️ Постановления Администрации г.о. Самара</h2>
                    </div>
                    <div className="p-4 space-y-2">
                        <DocumentLink title="Постановление № 513 от 27.04.2016 (с изменениями)" />
                        <DocumentLink title="Административный регламент предоставления муниципальной услуги (Приложение к постановлению № 692 от 07.07.2015)" />
                        <DocumentLink title="Постановление № 34 от 27.01.2015 «О закреплении МОУ за территорией городского округа Самара»" />
                    </div>
                </div>

                {/* Информация для родителей */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
                    <div className="border-l-4 border-amber-500 bg-amber-50 px-6 py-4">
                        <h2 className="text-xl font-bold text-gray-800">📋 Информация для родителей</h2>
                    </div>
                    <div className="p-4 space-y-2">
                        <DocumentLink title="Письмо Департамента образования от 28.04.2016 № 158" />
                        <DocumentLink title="Информация о сроках приема документов" />
                        <DocumentLink title="Документы, предоставляемые родителями при зачислении" />
                        <DocumentLink title="Перечень граждан, имеющих право внеочередного и первоочередного приема" />
                    </div>
                </div>

                {/* Формы заявлений */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
                    <div className="border-l-4 border-purple-500 bg-purple-50 px-6 py-4">
                        <h2 className="text-xl font-bold text-gray-800">📝 Формы заявлений (Приложения к постановлению № 513)</h2>
                    </div>
                    <div className="p-4 space-y-2">
                        <DocumentLink title="Приложение № 5 — Заявление о предоставлении места" />
                        <DocumentLink title="Приложение № 6 — Заявление о снятии с учета" />
                        <DocumentLink title="Приложение № 8 — Согласие на обработку персональных данных" />
                        <DocumentLink title="Приложение № 10 — Направление для зачисления" />
                        <DocumentLink title="Приложение № 13 — Жалоба на неправомерные действия" />
                    </div>
                </div>

                {/* Контакты */}
                <div className="mt-8 bg-blue-50 rounded-xl p-4 text-center">
                    <p className="text-gray-700 text-sm">
                        📞 По всем вопросам зачисления обращаться к заведующей или в Департамент образования по телефону <strong>340-73-93</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

// Компонент для ссылки на документ
const DocumentLink = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="text-gray-700 text-sm">{title}</span>
            <span className="text-gray-400 text-xs">(ссылка будет добавлена)</span>
        </div>
    );
};