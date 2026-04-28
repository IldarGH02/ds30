import rukovodImg from '@/shared/assets/rukovoditel/Varennikova.jpg'

export const HeadmasterFullInfo = () => {
    const photoUrl = rukovodImg; // 👈 СЮДА ВСТАВИТЬ ССЫЛКУ НА ФОТО

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Фото */}
                {photoUrl ? (
                    <img
                        src={photoUrl}
                        alt="Варенникова Ирина Николаевна"
                        className="w-25 h-45 rounded-full object-cover border-4 border-purple-200 shadow-md flex-shrink-0"
                    />
                ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center border-4 border-purple-200 flex-shrink-0">
                        <span className="text-4xl text-purple-400">👩‍🏫</span>
                    </div>
                )}

                {/* Информация */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">Варенникова Ирина Николаевна</h3>
                    <p className="text-purple-600 font-medium mt-1">Заведующий МБДОУ «Детский сад №30» г.о. Самара</p>
                    <p className="text-gray-600 text-sm mt-2">высшее профессиональное, аттестована на соответствие занимаемой должности</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 text-sm">
                        <p><span className="font-semibold">Стаж работы:</span> 36 лет</p>
                        <p><span className="font-semibold">Педагогический стаж:</span> 36 лет</p>
                        <p><span className="font-semibold">В должности руководителя:</span> 6 лет</p>
                        <p><span className="font-semibold">Телефон/факс:</span> 8 (846) 956-08-28</p>
                        <p><span className="font-semibold">Email:</span> Ds30sam@mail.ru</p>
                        <p><span className="font-semibold">Режим работы:</span> пн-пт, 8:30-17:15</p>
                    </div>
                </div>
            </div>

            {/* Образование */}
            <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Образование</h4>
                <p className="text-gray-700 text-sm">Высшее, Елабужский государственный педагогический институт, 1988 г.</p>
            </div>

            {/* Квалификация */}
            <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Квалификационная категория</h4>
                <p className="text-gray-700 text-sm">Аттестована на соответствие занимаемой должности руководителя муниципальной образовательной организации, 2017 г.</p>
            </div>

            {/* Награды */}
            <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Награды</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Почетная грамота Министерства образования и науки РФ — 2006 г.</li>
                    <li>Диплом Самарской Губернской Думы — 2009 г.</li>
                    <li>Благодарственное письмо Самарской Губернской Думы — 2010 г.</li>
                    <li>Благодарность Министерства образования и науки Самарской области — 2013 г.</li>
                </ul>
            </div>

            {/* Приём граждан */}
            <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Приём граждан по личным вопросам</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                    <li><span className="font-medium">понедельник:</span> 14:00 — 17:00</li>
                    <li><span className="font-medium">четверг:</span> 9:00 — 14:00</li>
                </ul>
            </div>

            {/* Адрес */}
            <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Адрес</h4>
                <p className="text-gray-700 text-sm">443091, г. Самара, проспект Карла Маркса, 370</p>
            </div>
        </div>
    );
};