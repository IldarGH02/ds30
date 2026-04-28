import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header'; // ваш существующий компонент Header
import { Footer } from '@/widgets/Footer'; // ваш существующий компонент Footer

export const Layout = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};