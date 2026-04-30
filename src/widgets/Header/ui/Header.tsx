import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import logo from '@/shared/assets/logo/logo-ds.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'История', href: '/history' },
    { name: 'Достижения', href: '/achievements' },
    { name: 'Родителям', href: '/for-parents' },
    { name: 'Новости', href: '/news' },
  ];

  return (
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Логотип и название */}
            <div className="flex items-center">
              <a href='/'>
                <img
                    src={logo}
                    alt="Логотип детского сада №30"
                    className="h-18 w-auto md:h-18 object-contain"
                />
              </a>
            </div>

            {/* Навигация (десктоп) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navigation.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className="hover:bg-white/20 px-3 py-2 rounded-lg transition-colors text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.name}
                  </a>
              ))}
            </nav>

            {/* Контакты (десктоп) */}
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
                  <div>
                    <span className="text-white/60 text-xs hidden sm:inline">Телефон:</span>
                    <a
                        href="tel:+78469560828"
                        className="text-white font-medium hover:text-white/90 transition-colors text-sm md:text-base"
                    >
                      8 (846) 956-08-28
                    </a>
                  </div>
                </div>
                <div className="text-xs text-white/50 mt-0.5 hidden sm:block">
                  <span>пн-пт с 9:00 до 17:00</span>
                </div>
              </div>
            </div>

            {/* Кнопка мобильного меню */}
            <button
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>

          {/* Мобильное меню */}
          {mobileMenuOpen && (
              <div className="lg:hidden pb-4 pt-2 border-t border-white/20">
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                      <a
                          key={item.name}
                          href={item.href}
                          className="hover:bg-white/20 px-4 py-3 rounded-lg transition-colors text-base"
                          onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                  ))}
                  {/* Контакты в мобильном меню */}
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <div className="flex items-center gap-2 px-4 py-2">
                      <Phone className="w-4 h-4 text-white/80" />
                      <a href="tel:+78469560828" className="text-white font-medium">
                        8 (846) 956-08-28
                      </a>
                    </div>
                    <p className="text-xs text-white/50 px-4 pt-1">пн-пт с 9:00 до 17:00</p>
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  );
}