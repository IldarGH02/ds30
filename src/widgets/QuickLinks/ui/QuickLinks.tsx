import { ExternalLink, FileText, Phone as PhoneIcon, Users, Award } from 'lucide-react';

export function QuickLinks() {
  const links = [
    {
      icon: FileText,
      title: 'План работы ГТО',
      description: 'Центры тестирования комплекса ГТО на 2026 год',
      color: 'bg-blue-500',
      href: '#',
    },
    {
      icon: Users,
      title: 'Комплектование',
      description: 'Порядок зачисления ребенка в ДОУ',
      color: 'bg-green-500',
      href: '/enrollment',
    },
    {
      icon: Award,
      title: 'Платные услуги',
      description: 'Информация о платных образовательных услугах',
      color: 'bg-orange-500',
      href: '#',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Быстрые ссылки</h2>
          <p className="text-xl text-gray-600">
            Часто используемые разделы и документы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>

                <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {link.description}
                </p>

                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Подробнее
                  <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-900">Телефон доверия</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Помощь детям и родителям в трудных ситуациях
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🏃</span>
              </div>
              <h4 className="font-bold text-gray-900">Движение ГТО</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Физическое развитие и здоровый образ жизни
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
              <h4 className="font-bold text-gray-900">Экологическая страничка</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Воспитание бережного отношения к природе
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
