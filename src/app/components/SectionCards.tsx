import { Book, Users, Award, FileText, Calendar, Phone, GraduationCap, Heart, Shield } from 'lucide-react';

export function SectionCards() {
  const sections = [
    {
      icon: Book,
      title: 'Сведения об организации',
      description: 'Основные сведения, структура, документы, образовательные стандарты',
      color: 'from-blue-400 to-blue-600',
      href: '#info',
    },
    {
      icon: Users,
      title: 'Родителям',
      description: 'Важная информация, консультативный пункт, электронные ресурсы',
      color: 'from-purple-400 to-purple-600',
      href: '#parents',
    },
    {
      icon: Award,
      title: 'Достижения',
      description: 'Награды, успехи воспитанников и педагогов',
      color: 'from-pink-400 to-pink-600',
      href: '#achievements',
    },
    {
      icon: FileText,
      title: 'Новости',
      description: 'Последние события и мероприятия детского сада',
      color: 'from-green-400 to-green-600',
      href: '#news',
    },
    {
      icon: GraduationCap,
      title: 'Методическая копилка',
      description: 'Материалы специалистов, советы и рекомендации',
      color: 'from-orange-400 to-orange-600',
      href: '#methodology',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Детская безопасность, дорожная безопасность',
      color: 'from-red-400 to-red-600',
      href: '#safety',
    },
    {
      icon: Heart,
      title: 'Наши группы',
      description: 'Информация о группах детского сада',
      color: 'from-teal-400 to-teal-600',
      href: '#groups',
    },
    {
      icon: Calendar,
      title: 'Проектные площадки',
      description: 'Проектная деятельность и стажировочная площадка',
      color: 'from-indigo-400 to-indigo-600',
      href: '#projects',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Разделы сайта</h2>
          <p className="text-xl text-gray-600">
            Вся необходимая информация о нашем детском саде
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <a
                key={index}
                href={section.href}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>

                <p className="text-gray-600">
                  {section.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
