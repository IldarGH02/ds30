import { Phone, MapPin, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const links = [
    {
      title: 'Официальные ресурсы',
      items: [
        { name: 'Министерство науки и высшего образования РФ', href: 'https://minobrnauki.gov.ru/' },
        { name: 'Министерство просвещения РФ', href: 'https://edu.gov.ru/' },
      ],
    },
    {
      title: 'Полезные ссылки',
      items: [
        { name: 'Госуслуги', href: 'https://gosuslugi.ru/' },
        { name: 'Персональные данные.Дети', href: 'http://xn--80aefibex1d.xn--d1acj3b/' },
      ],
    },
  ];

  return (
      <footer id="contacts" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏫</span>
                </div>
                <div>
                  <h3 className="font-bold">Детский сад № 30</h3>
                  <p className="text-sm text-gray-400">г. Самара</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                МБДОУ "Детский сад комбинированного вида № 30" городского округа Самара
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 group">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">443091, г. Самара, пр. Карла Маркса, 370</span>
                </div>

                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a
                      href="tel:+78469560828"
                      className="text-gray-300 hover:text-white transition-colors"
                  >
                    8 (846) 956-08-28
                  </a>
                </div>

                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a
                      href="tel:+78469560730"
                      className="text-gray-300 hover:text-white transition-colors"
                  >
                    8 (846) 956-07-30
                  </a>
                </div>

                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a
                      href="tel:+78469270790"
                      className="text-gray-300 hover:text-white transition-colors"
                  >
                    8 (846) 927-07-90
                  </a>
                </div>
              </div>
            </div>

            {links.map((section, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-4">{section.title}</h4>
                  <ul className="space-y-2 text-sm">
                    {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                          >
                            {item.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          {/* Блок с политикой конфиденциальности */}
          <div className="border-t border-gray-700 pt-6 mb-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <Link
                    to="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  Политика конфиденциальности
                </Link>
              </div>
              <div className="text-xs text-gray-500">
                <span>Мы используем cookies для улучшения работы сайта</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>© 2026 МБДОУ "Детский сад № 30" г. Самара. Все права защищены.</p>
            <p className="mt-2">
              Для работы с сайтом рекомендуются браузеры: Google Chrome, Mozilla Firefox, Microsoft Edge
            </p>
          </div>
        </div>
      </footer>
  );
}