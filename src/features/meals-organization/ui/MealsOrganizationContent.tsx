import { DocumentLink, pdfLinks } from "@/features/meals-organization";

export const MealsOrganizationContent = () => {

    return (
        <div className="space-y-6">
            {/* Заголовок */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-orange-800 text-lg">
                    Организация питания в ДОУ
                </h3>
                <p className="text-orange-700 mt-1">
                    Информация о питании воспитанников детского сада
                </p>
            </div>

            {/* Нормативные документы */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">⚖️</span>
                    <span>Нормативные документы</span>
                </h4>
                <div className="space-y-1">
                    <DocumentLink
                        title="Постановление Администрации г.о. Самара от 27.03.2025 №276 (О плате за присмотр и уход)"
                        url="#"
                    />
                </div>
            </div>

            {/* Контакты горячих линий */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <span>Телефоны горячих линий по вопросам питания</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Министерство образования Самарской области:</span>
                        <a href="tel:88463335001" className="block text-blue-600 hover:underline">8 (846) 333-50-01</a>
                        <span className="text-xs text-gray-500">ПН-ЧТ 9:00–18:00, ПТ 9:00–17:00</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Сектор контроля питания Департамента образования:</span>
                        <a href="tel:+79370796717" className="block text-blue-600 hover:underline">8 (937) 079-67-17</a>
                        <a href="tel:+79370797146" className="block text-blue-600 hover:underline">8 (937) 079-71-46</a>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">ФБУЗ «Центр гигиены и эпидемиологии»:</span>
                        <a href="tel:88463734922" className="block text-blue-600 hover:underline">8 (846) 373-49-22</a>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Отдел гигиены и эпидемиологии в г. Самара:</span>
                        <a href="tel:88463377393" className="block text-blue-600 hover:underline">8 (846) 337-73-93</a>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Роспотребнадзор:</span>
                        <a href="tel:88005554943" className="block text-blue-600 hover:underline">8 (800) 555-49-43</a>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Минпросвещения России:</span>
                        <a href="tel:88002009185" className="block text-blue-600 hover:underline">8 (800) 200-91-85</a>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Департамент образования (Румянцева Н.В.):</span>
                        <a href="tel:+79370797084" className="block text-blue-600 hover:underline">8 (937) 079-70-84</a>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">ОНФ:</span>
                        <a href="tel:88002003411" className="block text-blue-600 hover:underline">8 (800) 200-34-11</a>
                    </div>
                </div>
            </div>

            {/* Ответственные за питание */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">👥</span>
                    <span>Ответственные за организацию питания</span>
                </h4>
                <div className="space-y-2 text-sm">
                    <div>
                        <p className="font-medium">Заведующий:</p>
                        <p>Варенникова Ирина Николаевна</p>
                        <a href="tel:88469560828" className="text-blue-600 hover:underline">8 (846) 956-08-28</a>
                        <p className="text-gray-600">sdo.ds30@63edu.ru</p>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                        <p className="font-medium">Медицинские сёстры:</p>
                        <p>Ардюкова Наталия Васильевна</p>
                        <p>Потапова Оксана Михайловна</p>
                        <a href="tel:88469560730" className="text-blue-600 hover:underline">8 (846) 956-07-30</a>
                        <p className="text-gray-600">sdo.ds30@63edu.ru</p>
                    </div>
                </div>
            </div>

            {/* Меню */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">🍽️</span>
                    <span>Меню</span>
                </h4>
                <div className="space-y-1">
                    <DocumentLink title="Примерное десятидневное меню (3-7 лет, осень-зима)" url={pdfLinks.menuAutumnWinter_3_7} />
                    <DocumentLink title="Примерное десятидневное меню (2-3 года, осень-зима)" url={pdfLinks.menuAutumnWinter_2_3} />
                    <DocumentLink title="Примерное десятидневное меню (3-7 лет, лето)" url={pdfLinks.menuSummer_3_7} />
                    <DocumentLink title="Примерное десятидневное меню (2-3 года, лето)" url={pdfLinks.menuSummer_2_3} />
                    <DocumentLink title="Актуальное ежедневное меню (Google Drive)" url={pdfLinks.dailyMenu} />
                </div>
            </div>

            {/* Режим питания */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">⏰</span>
                    <span>Режим питания и график выдачи</span>
                </h4>
                <div className="space-y-1">
                    <DocumentLink title="График выдачи готовых блюд с пищеблока" url={pdfLinks.schedule} />
                    <DocumentLink title="Режим питания" url={pdfLinks.mealSchedule} />
                </div>
            </div>

            {/* Индивидуальное питание */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                <p className="text-yellow-800 text-sm">
                    🍽️ Специализированное меню для обучающихся, требующих индивидуального подхода, отсутствует.<br/>
                    Индивидуальное питание корректируется по медицинским показаниям на основании заявления родителей и медицинского заключения.
                </p>
            </div>

            {/* Поставщик */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-lg">🏭</span>
                    <span>Информация о поставщике</span>
                </h4>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-sm space-y-1">
                    <p className="font-medium">ООО «Кировский комбинат школьного питания»</p>
                    <p>Генеральный директор: Воробьев Владимир Юрьевич</p>
                    <p>Адрес: 443091, г. Самара, пр. Карла Маркса, д. 412</p>
                    <p>Телефон: 8 (846) 956-49-73, 956-44-77</p>
                </div>
                <div className="space-y-1 mt-2">
                    <DocumentLink title="Договор с ККШП" url={pdfLinks.contract} />
                    <DocumentLink title="Дополнительное соглашение от 30.12.2021" url={pdfLinks.additionalAgreement1} />
                    <DocumentLink title="Дополнительное соглашение от 14.09.2022" url={pdfLinks.additionalAgreement2} />
                </div>
            </div>
        </div>
    );
};