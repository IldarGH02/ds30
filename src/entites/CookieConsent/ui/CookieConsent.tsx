import { useState, useEffect } from 'react';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Проверяем, давал ли пользователь согласие ранее
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 p-4 md:p-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="font-semibold text-white">Мы используем cookies</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента.
                                Продолжая использовать наш сайт, вы соглашаетесь с использованием cookies.
                                <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 ml-1 underline">
                                    Подробнее о политике конфиденциальности
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                            <button
                                onClick={acceptCookies}
                                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
                            >
                                Принять
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-xl transition-colors"
                            >
                                Отклонить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};