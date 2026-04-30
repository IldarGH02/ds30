import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import { infoCards } from "@/widgets/UnifiedInfoCards/models/InfoCards.tsx";

export function UnifiedInfoCards() {

    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-gray-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Информация и разделы сайта</h2>
                    <p className="text-xl text-gray-600">
                        Вся необходимая информация для родителей и участников образовательного процесса
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {infoCards.map((card, index) => {
                        const Icon = card.icon;
                        const isImportant = card.type === 'important';

                        return (
                            <Link
                                key={index}
                                to={card.link}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
                            >
                                <div className={`rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                                    isImportant ? 'w-14 h-14' : 'w-16 h-16'
                                }`}>
                                    <Icon className={`text-white ${
                                        isImportant ? 'w-7 h-7' : 'w-8 h-8'
                                    }`} />
                                </div>

                                <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors ${
                                    isImportant ? 'text-lg' : 'text-xl'
                                }`}>
                                    {card.title}
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    {card.description}
                                </p>

                                {isImportant && (
                                    <div className="flex items-center text-blue-600 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Подробнее
                                        <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}