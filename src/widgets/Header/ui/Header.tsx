import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'История', href: '/history' },
    { name: 'Достижения', href: '#achievements' },
    { name: 'Родителям', href: '/for-parents' },
    { name: 'Новости', href: '#news' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🏫</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-xl">Детский сад № 30</h1>
              <p className="text-sm opacity-90">г. Самара</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>956-08-28</span>
              </div>
            </div>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
