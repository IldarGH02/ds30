export const ParentEducationContent = () => {
    // Ссылки на документы и материалы
    const pdfLinks = {
        program: 'https://www.dou25.ru/images/programma_prosvesheniya/program_prosvyat.pdf',
        navigatorProgram: 'https://cloud.mail.ru/public/PFxC/HwtbxVQuf',
        enlightenmentContent: 'https://docs.yandex.ru/docs/view?url=ya-disk-public://2lxclpmL0QcUkCLnSIdaoMXDvb9stHhwVRLJnSgcNOyvHooxqOxgZMzzWpO/doqoiyh0ufqrE+6HoJ72QHZn3Q==:/ПРОСВЕТИТЕЛЬСКИЙ%20КОНТЕНТ%20Российского%20общества%20Знание%20для%20воспитателей.xlsx&name=ПРОСВЕТИТЕЛЬСКИЙ%20КОНТЕНТ%20Российского%20общества%20Знание%20для%20воспитателей.xlsx&nosw=1',
        webinar1: 'https://my.mts-link.ru/UPR/347651822/record-new/1883724741',
        webinar2: 'https://vk.com/video-194497181_456240066',
        webinar3: 'https://vk.com/video-194497181_456240049',
        presentationFamily: 'https://alenuhka.rnd.prosadiki.ru/media/2025/06/10/1312138658/semeynay_atmosphera.pdf',
        presentationSchool: 'https://alenuhka.rnd.prosadiki.ru/media/2025/06/10/1312138527/scoro_v_shkoly.pdf',
        presentationMoral: 'https://alenuhka.rnd.prosadiki.ru/media/2025/06/10/1312140006/nravst_vospitanie_doshkolnikov.pdf',
        presentationPlay: 'https://alenuhka.rnd.prosadiki.ru/media/2025/06/10/1312139889/igraem_vmeste.pdf',
        checklists: 'https://alenuhka.rnd.prosadiki.ru/media/2025/06/10/1312139839/chek_listy_dlya_roditeley.pdf',
        remindersImportant: 'https://crr7bor.ru/documents/12987004/0/Инфографика_Важно+помнить+(16+шт).zip/35267412-e7e0-1f09-e33d-24f41b995269?t=1765109568218',
        remindersDoDont: 'https://crr7bor.ru/documents/12987004/0/Инфографика_Делаем_не_делаем_22_шт.zip/7e8e0247-8994-c96c-cfcc-5b2d1d622952?t=1765109638868',
        navigatorTeachers: 'https://crr7bor.ru/documents/12987004/0/Памятка+для+педагогов.pdf/183096fe-6371-8861-87bb-5fa05bb609bb?t=1761048556984',
        trackerHealthyEating: 'https://crr7bor.ru/documents/12987004/0/Презентация_Здоровое_питание.pdf/66a5b2d0-48ab-1ee5-994f-9b0e0d479ed2?t=1764284433178',
        trackerMentalHealth: 'https://crr7bor.ru/documents/12987004/0/Презентация_Психологическое_здоровье.pdf/785056c2-7795-89a6-cf86-a1d035ac405a?t=1764284473396',
        trackerHealthyLifestyle: 'https://crr7bor.ru/documents/12987004/0/Трекер_ЗОЖ_для_всей_семьи.pdf/a45dd0c2-2847-bf79-0560-c2fd73fc7485?t=1764284701683',
        trackerMyWeek: 'https://crr7bor.ru/documents/12987004/0/Трекер_Моя_неделя.pdf/6730af5f-747f-14de-fbfd-896e3047c8cc?t=1764284776048',
        trackerPhysicalActivity: 'https://crr7bor.ru/documents/12987004/0/Презентация_Физическая_активность.pdf/8b426f0f-c5f8-90de-17cb-ffb58adf84e1?t=1764285128407',
        consultationDailyRoutine: 'https://crr7bor.ru/documents/12987004/0/Консультация+для+родителей+Режим+дня.pdf/080c4cdc-eb8d-a6b1-ec40-d9ffb71e68a7?t=1765069053816',
        consultationReading: 'https://crr7bor.ru/documents/12987004/0/Консультация+для+родителей+Что+читать+детям.pdf/38fc8e46-fc1f-f561-8c83-c6b75bdfc820?t=1765100787331',
        consultationAuthors: 'https://crr7bor.ru/documents/12987004/0/Консультация+для+родителей+Современные+детские+авторы.pdf/bec680a7-23e0-1c6a-1045-52fea465a5ef?t=1765100835704',
        consultationTheaterParent: 'https://crr7bor.ru/documents/12987004/0/Консультация+для+родителей+Почему+надо+участвовать++в+театрализованных+постановках.pdf/39eb6ade-1af6-f99a-1f2e-b75a98d7570f?t=1765101073568',
        consultationTheaterSpeech: 'https://crr7bor.ru/documents/12987004/0/Консультация+для+родителей+Театрализованные+постановка+и+развитие+речи.pdf/8420dc37-4f7f-7f32-766c-b3eae3b09972?t=1765101339640',
        consultationTheaterSocial: 'https://crr7bor.ru/documents/12987004/0/Консультация+для+родителей+Театральные+постановки+и+развитие+социальных+навыков+(1).pdf/237ced6b-fbf7-09dd-844c-0597a030679f?t=1765101311358',
        consultationHomeEnvironment: 'https://crr7bor.ru/documents/12987004/0/Консультация+для+родителей+Создание+образовательной+среды+в+домашних+условиях.pdf/8fb46dd8-49c1-c863-d1be-c178db70bbdb?t=1765107979316',
    };

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 text-lg">
                    Просвещение родителей
                </h3>
                <p className="text-blue-700 mt-1">
                    Программа просвещения родителей (законных представителей) детей дошкольного возраста
                </p>
            </div>

            {/* Программа просвещения */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📘</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">Программа просвещения родителей</h4>
                        <p className="text-gray-600 text-sm mb-2">
                            Официальный документ Министерства просвещения РФ, направленный на оказание помощи
                            педагогам в определении содержания и форм просвещения родителей
                        </p>
                        <a
                            href={pdfLinks.program}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Открыть документ (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Навигатор по программе */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🧭</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">Навигатор по программе просвещения родителей</h4>
                        <p className="text-gray-600 text-sm mb-2">
                            Помощь педагогам в организации просветительской деятельности
                        </p>
                        <a
                            href={pdfLinks.navigatorProgram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Открыть навигатор</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Методические материалы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span>Методические материалы</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.enlightenmentContent}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Просветительский контент Российского общества "Знание" для педагогов</span>
                    </a>
                    <a
                        href={pdfLinks.navigatorTeachers}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">Навигатор по программе просвещения родителей (для педагогов)</span>
                    </a>
                </div>
            </div>

            {/* Вебинары для педагогов */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🎥</span>
                    <span>Вебинары для педагогов</span>
                </h4>
                <div className="space-y-2">
                    <a
                        href={pdfLinks.webinar1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700">Просвещение родителей в детском саду: как помочь родителям стать осознанными и компетентными?</span>
                    </a>
                    <a
                        href={pdfLinks.webinar2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700">Методологический семинар «Когнитивное развитие детей: методологические аспекты физиологии и психиатрии»</span>
                    </a>
                    <a
                        href={pdfLinks.webinar3}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700">Всероссийская конференция по просвещению родителей детей младенческого, раннего и дошкольного возрастов в субъектах РФ</span>
                    </a>
                </div>
            </div>

            {/* Презентации */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    <span>Презентации</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a href={pdfLinks.presentationFamily} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>👨‍👩‍👧</span> Семейная атмосфера
                    </a>
                    <a href={pdfLinks.presentationSchool} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>🎓</span> Скоро в школу!
                    </a>
                    <a href={pdfLinks.presentationMoral} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>❤️</span> Нравственное воспитание
                    </a>
                    <a href={pdfLinks.presentationPlay} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        <span>🎮</span> Играем вместе
                    </a>
                </div>
            </div>

            {/* Памятки и инфографика */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Памятки и инфографика</span>
                </h4>
                <div className="space-y-2">
                    <a href={pdfLinks.checklists} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        ✅ Чек-листы и памятки для родителей
                    </a>
                    <a href={pdfLinks.remindersImportant} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        ⚠️ Памятки "Важно помнить" (16 шт, ZIP)
                    </a>
                    <a href={pdfLinks.remindersDoDont} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        👍👎 Памятки "Делаем - не делаем" (22 шт, ZIP)
                    </a>
                </div>
            </div>

            {/* Трекеры */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">📈</span>
                    <span>Трекеры здоровья</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a href={pdfLinks.trackerHealthyEating} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🍎 Здоровое питание
                    </a>
                    <a href={pdfLinks.trackerMentalHealth} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🧠 Психологическое здоровье семьи
                    </a>
                    <a href={pdfLinks.trackerHealthyLifestyle} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        💪 ЗОЖ для всей семьи
                    </a>
                    <a href={pdfLinks.trackerMyWeek} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        📅 Моя здоровая неделя с семьей
                    </a>
                    <a href={pdfLinks.trackerPhysicalActivity} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🏃 Физическая активность
                    </a>
                </div>
            </div>

            {/* Консультации для родителей */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">💬</span>
                    <span>Консультации для родителей</span>
                </h4>
                <div className="space-y-2">
                    <a href={pdfLinks.consultationDailyRoutine} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        ⏰ Режим дня дошкольника
                    </a>
                    <a href={pdfLinks.consultationReading} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        📖 Что читать детям перед сном
                    </a>
                    <a href={pdfLinks.consultationAuthors} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        ✍️ Современные детские авторы
                    </a>
                    <a href={pdfLinks.consultationTheaterParent} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🎭 Почему родителям надо участвовать в театрализованных постановках вместе с детьми?
                    </a>
                    <a href={pdfLinks.consultationTheaterSpeech} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🗣️ Театрализованные постановки и развитие речи детей
                    </a>
                    <a href={pdfLinks.consultationTheaterSocial} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🤝 Театральные постановки и развитие социальных навыков у детей
                    </a>
                    <a href={pdfLinks.consultationHomeEnvironment} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🏠 Создание образовательной среды в домашних условиях
                    </a>
                </div>
            </div>

            {/* Интернет-ресурсы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">🌐</span>
                    <span>Интернет-ресурсы для родителей</span>
                </h4>
                <div className="space-y-2">
                    <a href="https://sites.google.com/view/roditeliam/главная-страница" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🌍 Родителям о детях
                    </a>
                    <a href="https://irzar.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🏛️ ФГБНУ «Институт развития, здоровья и адаптации ребенка»
                    </a>
                    <a href="https://институтвоспитания.рф/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🧭 Навигатор для современных родителей
                    </a>
                    <a href="https://www.ya-roditel.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        👪 Портал «Я – родитель»
                    </a>
                    <a href="https://nra-russia.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🤝 Национальная родительская ассоциация
                    </a>
                    <a href="https://ruroditel.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        💻 Онлайн центр информационной поддержки родителей
                    </a>
                    <a href="https://растимдетей.рф/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        🌱 Растим детей.рф – Навигатор для современных родителей
                    </a>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-blue-50 rounded-lg p-4 text-center text-sm text-blue-700 border border-blue-200">
                <p>
                    Программа разработана во исполнение поручения Президента РФ от 14 июня 2022 года
                </p>
            </div>
        </div>
    );
};