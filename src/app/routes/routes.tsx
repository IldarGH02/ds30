import { Routes, Route } from "react-router-dom";
import { Layout } from "@/pages/LayoutPage";
import {ForParentsPage, HistoryPage, MainPage} from "@/pages";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/for-parents" element={<ForParentsPage />} />
                <Route path='/history' element={ <HistoryPage/> } />
                {/* Добавляйте другие страницы сюда */}
                {/* <Route path="/info" element={<InfoPage />} /> */}
                {/* <Route path="/news" element={<NewsPage />} /> */}
            </Route>
        </Routes>
    );
};