import { useState } from "react";

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { HeadmasterFullInfo } from "@/features/handmaster-info";
import { GenericModal } from "@/entites/Parents/Modal/GenericModal.tsx";

const kindergartenCoordinates = [53.242552, 50.237210];

export const InfoPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок */}
                <div className="text-center mb-10">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-2 mb-4">
                        <span className="text-blue-600 font-medium">📋 Основные сведения</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Сведения об образовательной организации
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Основная информация о муниципальном бюджетном дошкольном образовательном учреждении
                    </p>
                </div>

                {/* ========== БЛОК: РУКОВОДСТВО ДЕТСКОГО САДА (ТОЛЬКО КРАТКАЯ ИНФОРМАЦИЯ) ========== */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-purple-500 bg-purple-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">👩‍🏫</span>
                            <span>Руководство детского сада</span>
                        </h2>
                    </div>
                    <div className="p-5">
                        <div className="flex flex-col sm:flex-row gap-5 items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800">Варенникова Ирина Николаевна</h3>
                                <p className="text-purple-600 font-medium mt-1">Заведующий МБДОУ «Детский сад №30» г.о. Самара</p>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">Высшее образование</span>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Педагогический стаж: 36 лет</span>
                                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs">Руководитель: 6 лет</span>
                                </div>
                                <div className="mt-3">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Подробнее о руководителе
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========== БЛОК 1: ОСНОВНЫЕ СВЕДЕНИЯ ========== */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-blue-500 bg-blue-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">🏛️</span>
                            <span>Основные сведения</span>
                        </h2>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Полное наименование:</h3>
                            <p className="text-gray-800 text-sm">муниципальное бюджетное дошкольное образовательное учреждение "Детский сад комбинированного вида № 30" городского округа Самара</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Сокращённое наименование:</h3>
                            <p className="text-gray-800 text-sm">МБДОУ "Детский сад № 30" г.о. Самара</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Дата основания:</h3>
                            <p className="text-gray-800 text-sm">1976 год (восстановлен и обновлён в 2012 году)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Язык обучения:</h3>
                            <p className="text-gray-800 text-sm">русский</p>
                            <a href="https://detsad30sam.ru/wa-data/public/site/docs/30/2425/Положение%20о%20языке%20(2).pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1 mt-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <span>Ознакомиться с положением</span>
                            </a>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Аккредитация:</h3>
                            <p className="text-gray-800 text-sm">Государственная аккредитация образовательной деятельности по образовательным программам дошкольного образования не проводится</p>
                        </div>
                    </div>
                </div>

                {/* ========== БЛОК 2: ЛИЦЕНЗИЯ ========== */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-green-500 bg-green-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">📜</span>
                            <span>Лицензия</span>
                        </h2>
                    </div>
                    <div className="p-5 space-y-3">
                        <a href="https://detsad30sam.ru/wa-data/public/site/docs/30/LicObr.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            <span className="text-gray-700">Лицензия на образовательную деятельность</span>
                        </a>
                        <a href="https://detsad401sam.ru/wa-data/public/site/docs/30/Реестровая%20выписка.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            <span className="text-gray-700">Выписка из реестра лицензий</span>
                        </a>
                    </div>
                </div>

                {/* ========== БЛОК 3: УЧРЕДИТЕЛЬ ========== */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-purple-500 bg-purple-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">🏢</span>
                            <span>Учредитель</span>
                        </h2>
                    </div>
                    <div className="p-5 space-y-3">
                        <p className="text-gray-800 text-sm">Учредителем является <strong>муниципальное образование городской округ Самара</strong>.</p>
                        <p className="text-gray-800 text-sm">Функции и полномочия учредителя осуществляет <strong>Администрация городского округа Самара</strong>.</p>
                        <div className="bg-gray-50 p-3 rounded-lg mt-2">
                            <p className="text-sm"><span className="font-semibold">Адрес:</span> 443010, г. Самара, ул. Куйбышева, 137</p>
                            <p className="text-sm mt-1"><span className="font-semibold">Глава городского округа Самара:</span> Носков Иван Николаевич</p>
                            <a href="https://www.samadm.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1 mt-2">
                                <span>www.samadm.ru</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ========== БЛОК 4: ДЕПАРТАМЕНТ ОБРАЗОВАНИЯ ========== */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-amber-500 bg-amber-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">🏫</span>
                            <span>Департамент образования Администрации г.о. Самара</span>
                        </h2>
                    </div>
                    <div className="p-5 space-y-3">
                        <p className="text-gray-800 text-sm"><span className="font-semibold">Руководитель:</span> заместитель Главы городского округа Самара - руководитель Департамента образования - Коковина Ирина Николаевна</p>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm font-semibold">График приёма граждан:</p>
                            <p className="text-sm">второй понедельник месяца, с 14:00 до 17:00, по предварительной записи</p>
                        </div>
                        <div>
                            <p className="text-sm"><span className="font-semibold">Адрес:</span> 443010, Самарская область, г. Самара, ул. Льва Толстого, 26 / Фрунзе, 118</p>
                            <p className="text-sm mt-1"><span className="font-semibold">Телефон:</span> (846) 332-32-50 (приёмная)</p>
                            <p className="text-sm"><span className="font-semibold">Факс:</span> (846) 333-58-02</p>
                            <p className="text-sm"><span className="font-semibold">E-mail:</span> dosamadm@yandex.ru</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm font-semibold">Время работы Департамента:</p>
                            <p className="text-sm">Понедельник – четверг: 8:30 - 17:30, обед: 12:30 - 13:18</p>
                            <p className="text-sm">Пятница: 8:30 - 16:30, обед: 12:30 - 13:18</p>
                        </div>
                    </div>
                </div>

                {/* ========== БЛОК 5: МИНИСТЕРСТВО ОБРАЗОВАНИЯ ========== */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-indigo-500 bg-indigo-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">📘</span>
                            <span>Министерство образования Самарской области</span>
                        </h2>
                    </div>
                    <div className="p-5 space-y-2">
                        <p className="text-gray-800 text-sm"><span className="font-semibold">Министр образования:</span> Акопьян Виктор Альбертович</p>
                        <a href="https://www.educat.samregion.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1">
                            <span>www.educat.samregion.ru</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                </div>

                {/* ========== БЛОК 6: РЕЖИМ РАБОТЫ И КОНТАКТЫ ========== */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-teal-500 bg-teal-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">⏰</span>
                            <span>Режим работы и контакты</span>
                        </h2>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Режим работы учреждения:</h3>
                            <p className="text-gray-800 text-sm">с 7:00 до 19:00 (понедельник – пятница)</p>
                            <p className="text-gray-800 text-sm">Выходные дни: суббота, воскресенье, праздничные дни</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Фактический и юридический адрес:</h3>
                            <p className="text-gray-800 text-sm">443091, г. Самара, проспект Карла Маркса, 370</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm mb-1">Контакты:</h3>
                            <p className="text-gray-800 text-sm">📞 8 (846) 956-08-28</p>
                            <p className="text-gray-800 text-sm">📞 8 (846) 927-07-90</p>
                            <p className="text-gray-800 text-sm">✉️ sdo.ds30@63edu.ru</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600">⚠️ Представительств и филиалов не имеется.</p>
                            <p className="text-sm text-gray-600 mt-1">Мест осуществления образовательной деятельности при использовании сетевой формы, проведения практики, государственной итоговой аттестации, по дополнительным образовательным программам, по основным программам профессионального обучения — нет.</p>
                        </div>
                    </div>
                </div>

                {/* Контактная информация */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl text-center">
                    <p className="text-gray-700 text-sm">
                        📞 По всем вопросам можно обратиться к администрации детского сада: <strong className="text-gray-800">956-08-28</strong>
                    </p>
                </div>
                {/* Карта */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="border-l-4 border-blue-500 bg-blue-50 px-5 py-3">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-2xl">🗺️</span>
                            <span>Расположение на карте</span>
                        </h2>
                    </div>
                    <div className="p-0">
                        <YMaps query={{ apikey: '03c95ed9-8405-4886-9e26-351d94475cf7' }}> {/* API-ключ можно получить в кабинете разработчика Яндекса */}
                            <Map
                                defaultState={{
                                    center: kindergartenCoordinates,
                                    zoom: 16,
                                    controls: ['zoomControl', 'fullscreenControl']
                                }}
                                width="100%"
                                height="400px"
                                modules={['control.ZoomControl', 'control.FullscreenControl']}
                            >
                                <Placemark
                                    geometry={kindergartenCoordinates}
                                    options={{
                                        preset: 'islands#redDotIcon',
                                        iconColor: '#3B82F6'
                                    }}
                                    properties={{
                                        balloonContentBody: `
                      <strong>МБДОУ «Детский сад №30»</strong><br/>
                      г. Самара, пр. Карла Маркса, 370<br/>
                      📞 956-08-28
                    `
                                    }}
                                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                />
                            </Map>
                        </YMaps>
                        <div className="p-3 bg-gray-50 text-center text-xs text-gray-500 border-t">
                            <span>📍 443091, г. Самара, проспект Карла Маркса, 370</span>
                        </div>
                    </div>
                </div>
            </div>
            <GenericModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Заведующий МБДОУ «Детский сад №30» г.о. Самара"
            >
                <HeadmasterFullInfo />
            </GenericModal>
        </section>
    );
};