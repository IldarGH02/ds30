import {OrgStructureContent} from "@/features/org-structure";
import {DocumentsContent} from "@/features/documents";
import {EducationContent} from "@/features/education/ui/EducationContent.tsx";
import {EducationalStandardsContent} from "@/features/educational-standards";
import {TeachingStaffContent} from "@/features/teaching-staff";
import {FinancialActivitiesContent} from "@/features/financial-activities";
import {VacanciesContent} from "@/features/vacancies";

export const sections = [
    { title: 'Структура и органы управления', content: <OrgStructureContent />, icon: '🏛️' },
    { title: 'Документы', content: <DocumentsContent />, icon: '📄' },
    { title: 'Образование', content: <EducationContent />, icon: '🎓' },
    { title: 'Образовательные стандарты и требования', content: <EducationalStandardsContent />, icon: '📖' },
    { title: 'Педагогический состав', content: <TeachingStaffContent />, icon: '👩‍🏫' },
    { title: 'Финансово-хозяйственная деятельность', content: <FinancialActivitiesContent />, icon: '📊' },
    { title: 'Вакантные места для приема (перевода) обучающихся', content: <VacanciesContent />, icon: '📢' },
];