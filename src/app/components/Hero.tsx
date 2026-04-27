import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="main" className="relative bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium">2026 - Год единства народов</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Детский сад комбинированного вида № 30
            </h1>

            <p className="text-lg md:text-xl opacity-95">
              Муниципальное бюджетное дошкольное образовательное учреждение городского округа Самара
            </p>

            <div className="space-y-3 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <span>443091, г. Самара, пр. Карла Маркса, 370</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <span>956-08-28, 956-07-30, 927-07-90</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#parents"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg"
              >
                Родителям
              </a>
              <a
                href="#contacts"
                className="bg-white/20 backdrop-blur-sm border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1589856198357-4cca29e342c7?w=400"
                  alt="Дети в детском саду"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648143714234-810e3ce38cc6?w=400"
                  alt="Игровая деятельность"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1574132190990-cfd62178bb1c?w=400"
                  alt="Обучение"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763310225537-f7161d5c93e9?w=400"
                  alt="Игровая зона"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
