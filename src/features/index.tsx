import { ReactNode } from "react"

import { ElectronicResourcesContent } from "@/features/electronic-resources";

export const contentMap: Record<string, ReactNode> = {
    'Электронные ресурсы для родителей': <ElectronicResourcesContent />
};

// Функция для получения контента по заголовку
export const getContentByTitle = (title: string): ReactNode => {
    return contentMap[title] || (
        <div className="text-center py-8">
        <p className="text-gray-600">Содержимое раздела "{title}" скоро появится</p>
    </div>
);
};