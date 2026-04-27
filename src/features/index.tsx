import { ReactNode } from "react"

import { ImportantContent } from './important-info/ui/ImportantContent';
import { QualityAssessmentContent } from "@/features/quality-assessment";
import { QualitySurveyContent } from "@/features/quality-assessment";
import { FluPreventionContent } from "@/features/flu-prevention";
import { ProtectionServicesContent } from "@/features/protection-services/ui/ProtectionServicesContent.tsx";
import { EightRulesContent } from "@/features/eight-rules";
import { DistrictParentMeetingContent } from "@/features/district-parent-meeting/ui/DistrictParentMeetingContent.tsx";
import { GtoContent } from "@/features/gto";
import { ParentEducationContent } from "@/features/parent-education";
import { NationalProjectsContent } from "@/features/national-projects";
import { PublicInformingContent } from "@/features/public-informing";
import { OnlineSurveyContent } from "@/features/online-survey/ui/OnlineSurveyContent.tsx";
import { ConsultingCenterContent } from "@/features/consulting-center/ui/ConsultingCenterContent.tsx";
import { UsefulLibraryContent } from "@/features/useful-library";
import { VideoCollectionContent } from "@/features/video-collection";
import { PsychologistConsultationsContent } from "@/features/psychologist-consultations";
import { PersonalizedFinancingContent } from "@/features/personalized-financing";
import { QueueInfoContent } from "@/features/queue-info";
import { ElectronicResourcesContent } from "@/features/electronic-resources";
import { FamilyGroupsContent } from "@/features/family-groups";

export const contentMap: Record<string, ReactNode> = {
    'Это важно': <ImportantContent />,
    'Независимая оценка качества': <QualityAssessmentContent />,
    'Независимая оценка качества условий образовательной деятельности': <QualityAssessmentContent />,
    'Опрос о качестве образовательных услуг': <QualitySurveyContent />,
    'Профилактика гриппа': <FluPreventionContent />,
    'Национальный проект': <NationalProjectsContent />,
    'О национальных проектах': <NationalProjectsContent />,
    'Информирование родительской и педагогической общественности': <PublicInformingContent />,
    'План мероприятий по реализации национальных проектов': <NationalProjectsContent />,
    'Персонифицированное финансирование дополнительного образования': <PersonalizedFinancingContent />,
    'Консультативный пункт': <ConsultingCenterContent />,
    'Онлайн-опрос': <OnlineSurveyContent />,
    'О консультационном пункте': <ConsultingCenterContent />,
    'Консультационный пункт': <ConsultingCenterContent />,
    'Полезная библиотека для родителей': <UsefulLibraryContent />,
    'Коллекция фильмов и роликов': <VideoCollectionContent />,
    'Консультации педагога-психолога': <PsychologistConsultationsContent />,
    'Службы защиты': <ProtectionServicesContent />,
    '8 правил для родителей': <EightRulesContent />,
    '8 правил для родителей (памятка)': <EightRulesContent />,
    'Окружное родительское собрание': <DistrictParentMeetingContent />,
    'Движение ГТО': <GtoContent />,
    'Просвещение родителей': <ParentEducationContent />,
    'Просвещение родителей (памятка)': <ParentEducationContent />,
    'Мониторинг качества услуг': <OnlineSurveyContent />,
    'Коллекция фильмов и роликов для родителей о воспитании детей': <VideoCollectionContent />,
    'Узнай очередь в детский сад': <QueueInfoContent />,
    'Проверить очередь в детский сад': <QueueInfoContent />,
    'Электронные ресурсы для родителей': <ElectronicResourcesContent />,
    'Семейные воспитательные группы': <FamilyGroupsContent />,
};

// Функция для получения контента по заголовку
export const getContentByTitle = (title: string): ReactNode => {
    return contentMap[title] || (
        <div className="text-center py-8">
        <p className="text-gray-600">Содержимое раздела "{title}" скоро появится</p>
    </div>
);
};