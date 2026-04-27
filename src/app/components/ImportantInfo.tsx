import { Bell, Shield, Users, BookOpen } from 'lucide-react';

export function ImportantInfo() {
  const infoCards = [
    {
      icon: Bell,
      title: 'Консультативный пункт',
      description: 'Для родителей, дети которых не посещают дошкольную организацию',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Независимая оценка',
      description: 'Независимая оценка качества условий образовательной деятельности',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Users,
      title: 'Национальный проект',
      description: 'Информирование о национальных проектах "Образование" и "Демография"',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Персонифицированное финансирование',
      description: 'Дополнительное образование детей с персонифицированным финансированием',
      color: 'from-green-400 to-teal-500',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Важная информация</h2>
          <p className="text-xl text-gray-600">
            Для родителей и участников образовательного процесса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Уважаемые посетители!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Мы рады ежедневному виртуальному общению с Вами. Наш сайт в первую очередь адресован тем,
                кто заинтересован в гармоничном и всестороннем развитии своего ребенка, кто желает
                сотрудничать с квалифицированными специалистами.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900">На нашем сайте Вы можете узнать:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Последние новости детского сада</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>О жизни детей в группе</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Информацию о реализуемых программах</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900">А также найти:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Советы специалистов детского сада</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Фотогалерею мероприятий</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Ответы на интересующие вопросы</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
