export function WelcomePoem() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex gap-2 text-4xl">
              <span>🎨</span>
              <span>🎵</span>
              <span>📚</span>
              <span>🎭</span>
              <span>⚽</span>
            </div>
          </div>

          <div className="text-center space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p className="font-medium text-green-600">Про наш весёлый детский сад</p>
            <p>Мы говорим с теплом:</p>
            <p>За годом год для всех ребят</p>
            <p>Открыт он, словно дом!</p>
            <p className="pt-4">Для шалунов и непосед,</p>
            <p>Хитрюг, озорников</p>
            <p>Здесь завтрак, ужин и обед,</p>
            <p>Забота и любовь!</p>
            <p className="pt-4">Здесь научили нас играть,</p>
            <p>Лепить и мастерить,</p>
            <p>И песни петь, и танцевать,</p>
            <p>Воспитанными быть!</p>
            <p className="pt-4">За нами нужен глаз да глаз</p>
            <p>Мы пошалить не прочь</p>
            <p>Но любят каждого из нас,</p>
            <p className="font-medium text-purple-600">Как сына или дочь</p>
          </div>
        </div>
      </div>
    </section>
  );
}
