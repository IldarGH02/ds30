import { Routes, Route } from "react-router-dom";
import { Layout } from "@/pages/LayoutPage";
import { ForParentsPage, HistoryPage, MainPage } from "@/pages";
import { EnrollmentPage } from "@/pages/EnrollmentPage/ui/EnrollmentPage.tsx";
import { NationalProjectsPage } from "@/pages/NationalProjectsPage/ui/NationalProjectsPage.tsx";
import { QualityAssessmentPage } from "@/pages/QualitiAssessment";
import { ConsultingCenterPage } from "@/pages/ConsultingCenterPage";
import { MethodologyPage } from "@/pages/MethodologyPage";
import { SafetyPage } from "@/pages/SafetyPage";
import { InfoPage } from "@/pages/InfoPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { GroupsPage } from "@/pages/GroupsPage";
import { NewsPage } from "@/pages/NewsPage";
import { AchievementsPage } from "@/pages/AchievementsPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import {OrgInfoPage} from "@/pages/OrgInfoPage/ui/OrgInfoPage.tsx";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/for-parents" element={<ForParentsPage />} />
                <Route path='/history' element={ <HistoryPage/> } />
                <Route path='/enrollment' element={ <EnrollmentPage/> } />
                <Route path='/national-projects' element={ <NationalProjectsPage/> } />
                <Route path='/quality-assessment' element={ <QualityAssessmentPage/> } />
                <Route path='/consulting-center' element={ <ConsultingCenterPage/> } />
                <Route path='/methodology' element={ <MethodologyPage/> } />
                <Route path='/safety' element={ <SafetyPage/> } />
                <Route path='/info' element={ <InfoPage/> } />
                <Route path='/projects' element={ <ProjectsPage/> } />
                <Route path='/groups' element={ <GroupsPage/> } />
                <Route path='/news' element={ <NewsPage/> } />
                <Route path='/achievements' element={ <AchievementsPage/> } />
                <Route path='/privacy-policy' element={ <PrivacyPolicyPage/> } />
                <Route path='/org-info' element={ <OrgInfoPage/> } />
            </Route>
        </Routes>
    );
};