// Общий стиль для карточек-блоков
const cardClass = "bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300";
const cardHeaderClass = "px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50";
const cardTitleClass = "text-xl font-bold text-gray-900";
const cardSubtitleClass = "text-sm text-gray-600 mt-0.5";
const cardContentClass = "p-6";

// Стиль для ссылок-документов
const docLinkClass = "flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-gray-200 hover:border-blue-300 hover:shadow-sm";
const docIconClass = "w-5 h-5 text-blue-500 flex-shrink-0";
const docTextClass = "text-gray-700 hover:text-blue-600 font-medium";

// Стиль для информационных блоков (семейные группы и т.д.)
const infoBlockVariants = {
    green: "bg-green-50 border-l-4 border-green-500",
    blue: "bg-blue-50 border border-blue-200",
    amber: "bg-amber-50 border border-amber-200",
    purple: "bg-purple-50 border border-purple-200",
    gray: "bg-gray-50 border border-gray-200",
};

export {
    cardClass,
    cardHeaderClass,
    cardTitleClass,
    cardSubtitleClass,
    cardContentClass,
    docIconClass,
    docTextClass,
    docLinkClass,
    infoBlockVariants,
}