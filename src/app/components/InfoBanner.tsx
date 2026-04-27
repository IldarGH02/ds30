import { QrCode, ExternalLink } from 'lucide-react';

export function InfoBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <QrCode className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Оставьте отзыв о нашей организации
                </h3>
                <p className="mb-4 opacity-90">
                  Ваше мнение важно для нас! Отсканируйте QR код или перейдите по ссылке
                </p>
                <a
                  href="https://forms.yandex.ru/u/69c2493e90fa7b2137574257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Пройти опрос
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Оценка качества образования
                </h3>
                <p className="mb-4 opacity-90">
                  В 2026 году проводится опрос граждан о качестве образовательных услуг
                </p>
                <a
                  href="https://forms.yandex.ru/u/69c2493e90fa7b2137574257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                >
                  Принять участие
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 border-2 border-orange-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎖️</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Поддержка участников специальной военной операции
              </h3>
              <p className="text-gray-700 mb-4">
                Народный фронт Самарской области ведёт сбор для поддержки ребят из подразделений специального назначения, мотострелковой бригады и танкового батальона
              </p>
              <a
                href="https://pobeda.onf.ru/requirements/samarskaya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
              >
                Подробнее по ссылке
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
