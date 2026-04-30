export const ContactsBlock = () => {
    return(
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Контакты</h3>
                <p className="text-sm text-gray-600 mt-0.5">Как с нами связаться</p>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">📞</span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Телефон</p>
                        <p className="font-semibold text-gray-800">956-08-28, 956-07-30, 927-07-90</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">✉️</span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Электронная почта</p>
                        <p className="font-semibold text-gray-800">dou30samara@yandex.ru</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">📍</span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Адрес</p>
                        <p className="font-semibold text-gray-800">г. Самара, пр. Карла Маркса, 370</p>
                    </div>
                </div>
            </div>
        </div>
    )
}