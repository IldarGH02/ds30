import {categoryConfig, MenuItem} from "@/features/Parents/config/menuStructure.ts";
import {useState} from "react";

interface CategoryCardProps {
    category: string;
    items: MenuItem[];
    onOpenModal: (title: string, url?: string) => void;  // Добавлен пропс
}

export const CategoryCard = ({ category, items, onOpenModal }: CategoryCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const config = categoryConfig[category as keyof typeof categoryConfig];

    // Показываем все пункты, если развернуто, или первые 5 (для обычных пунктов)
    const visibleItems = isExpanded ? items : items.slice(0, 5);

    if (!config || items.length === 0) return null;

    const handleItemClick = (item: MenuItem) => {
        if (item.title) {
            onOpenModal(item.title, item.href);
        }
    };

    return (
        <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${config.borderColor} hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
            <div className={`${config.bgColor} px-6 py-4 border-b ${config.borderColor}`}>
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{config.icon}</span>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{config.title}</h2>
                        <p className={`text-sm ${config.textColor} mt-0.5`}>{items.length} материалов</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4">
                <ul className="space-y-3">
                    {visibleItems.map((item, idx) => (
                        <li key={idx}>
                            {item.children ? (
                                <div className="group">
                                    <div className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2">
                                        <span>📁</span>
                                        <span>{item.title}</span>
                                    </div>
                                    {/* Здесь показываем ВСЕ дочерние пункты, без ограничения slice */}
                                    <ul className="pl-6 space-y-2">
                                        {item.children.map((child, childIdx) => (
                                            <li key={childIdx}>
                                                <button
                                                    onClick={() => handleItemClick(child)}
                                                    className="text-gray-600 text-sm hover:text-purple-600 hover:underline transition-colors block py-1 text-left w-full"
                                                >
                                                    • {child.title.length > 55 ? child.title.slice(0, 55) + '...' : child.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleItemClick(item)}
                                    className="text-gray-700 text-sm hover:text-purple-600 hover:underline transition-colors block py-2 border-b border-gray-100 last:border-0 text-left w-full"
                                >
                                    {item.title}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Кнопка "Показать все" для основных пунктов (не для дочерних) */}
            {items.length > 5 && (
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full text-center text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors flex items-center justify-center gap-1"
                    >
                        {isExpanded ? (
                            <>Свернуть <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
                        ) : (
                            <>Показать все {items.length} материалов <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};