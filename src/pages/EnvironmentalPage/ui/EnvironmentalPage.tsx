// pages/environmental-page/ui/EnvironmentalPage.tsx
export const EnvironmentalPage = () => {
    const pdfLinks = {
      // Консультации для родителей
      parentAttitudes: 'https://yadi.sk/i/cPVKA9Ki3EJD5t',
      natureWalk: 'https://yadi.sk/i/0N7557nI3EJD7t',
      familyEcology: 'https://yadi.sk/i/S6vR5TV83EJD9L',
      loveToNature: 'https://yadi.sk/i/B3OAntkL3EJCdn',
      ecologyConsult1: 'https://cloud.mail.ru/public/Af1d/aXf18P5j8',
      natureWalkMemo: 'https://cloud.mail.ru/public/9vMg/VAjUdvTWA',
      ecologyConsult2: 'https://cloud.mail.ru/public/4yzZ/JjnwrWtbo',
      ecologyConsult3: 'https://cloud.mail.ru/public/LceN/i2euVRcxR',
      // Образовательные маршруты
      goldenAutumn: 'https://cloud.mail.ru/public/3Q3D/GjMVivHNN',
      insects: 'https://cloud.mail.ru/public/GuH2/RqeGWhbVj',
      seasons: 'https://cloud.mail.ru/public/MFY9/oHuJg5V2z',
      littleStrongmen: 'https://cloud.mail.ru/public/JfmN/NAp2Q2nAL',
    };
  
    // Сказки с сайта ecoedu.ru
    const fairyTales = [
      { title: 'Родник', url: 'http://www.ecoedu.ru/index.php?r=19&id=1' },
      { title: 'Дождевой червяк', url: 'http://www.ecoedu.ru/index.php?r=19&id=2' },
      { title: 'Маленькие путешественницы', url: 'http://www.ecoedu.ru/index.php?r=19&id=3' },
      { title: 'Кролик и зайчиха', url: 'http://www.ecoedu.ru/index.php?r=19&id=4' },
      { title: 'Как скворец себе дом выбирал', url: 'http://www.ecoedu.ru/index.php?r=19&id=5' },
      { title: 'Катя и божья коровка', url: 'http://www.ecoedu.ru/index.php?r=19&id=6' },
    ];
  
    return (
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Заголовок */}
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 mb-4">
              <span className="text-green-600 font-medium">🌿 Экологическая страничка</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Экологическая страничка
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Воспитание бережного отношения к природе, экологические сказки и консультации для родителей
            </p>
          </div>
  
          {/* ========== БЛОК 1: ЭКОЛОГИЧЕСКИЕ СКАЗКИ ========== */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <div className="border-l-4 border-green-500 bg-green-50 px-5 py-3">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">📖</span>
                <span>Экологические сказки</span>
              </h2>
            </div>
            <div className="p-5 space-y-4">
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="text-green-600">📌</span>
                  <span>Эко-сказки — это уникальный метод воспитания. Вам не придётся заставлять ребёнка раскаяться в содеянном поступке. Все знания, полученные ребёнком во время чтения эко-сказок, воспринимаются как естественные и понятные.</span>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {fairyTales.map((tale, idx) => (
                  <a
                    key={idx}
                    href={tale.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors text-gray-700 text-sm"
                  >
                    <span className="text-lg">📗</span>
                    <span>{tale.title}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-2 pt-2 border-t border-gray-100 text-right text-xs text-gray-400">
                Подготовила: воспитатель С.С. Клюшина
              </div>
  
              <a
                href="https://cloud.mail.ru/public/3ZYb/SudXxmZVs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-green-600 hover:text-green-700 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Скачать сборник экологических сказок</span>
              </a>
            </div>
          </div>
  
          {/* ========== БЛОК 2: КОНСУЛЬТАЦИИ ДЛЯ РОДИТЕЛЕЙ ========== */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <div className="border-l-4 border-blue-500 bg-blue-50 px-5 py-3">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                <span>Консультации для родителей</span>
              </h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <DocumentLink title="Влияние родительских установок на развитие личности ребенка" url={pdfLinks.parentAttitudes} />
                <DocumentLink title="Прогулка в природу" url={pdfLinks.natureWalk} />
                <DocumentLink title="Экологическое воспитание детей в семье" url={pdfLinks.familyEcology} />
                <DocumentLink title="Воспитание любви к природе" url={pdfLinks.loveToNature} />
                <DocumentLink title="Консультация по экологическому воспитанию" url={pdfLinks.ecologyConsult1} />
                <DocumentLink title="Памятка: Прогулки с детьми в природу" url={pdfLinks.natureWalkMemo} />
                <DocumentLink title="Консультация по экологии (1)" url={pdfLinks.ecologyConsult2} />
                <DocumentLink title="Консультация по экологии (2)" url={pdfLinks.ecologyConsult3} />
              </div>
            </div>
          </div>
  
          {/* ========== БЛОК 3: ОБРАЗОВАТЕЛЬНЫЕ МАРШРУТЫ ========== */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <div className="border-l-4 border-amber-500 bg-amber-50 px-5 py-3">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">🗺️</span>
                <span>Образовательные маршруты</span>
              </h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <DocumentLink title="Золотая осень" url={pdfLinks.goldenAutumn} />
                <DocumentLink title="Насекомые" url={pdfLinks.insects} />
                <DocumentLink title="По временам года" url={pdfLinks.seasons} />
                <DocumentLink title="Маленькие силачи" url={pdfLinks.littleStrongmen} />
              </div>
            </div>
          </div>
  
          {/* Контактная информация */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl text-center">
            <p className="text-gray-600 text-sm">
              🌍 Берегите природу! Воспитывайте у детей любовь к окружающему миру
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  
  // Вспомогательный компонент для ссылки на документ
  const DocumentLink = ({ title, url }: { title: string; url: string }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 py-1.5 px-2 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors text-gray-700 text-sm hover:text-green-600"
    >
      <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>{title}</span>
    </a>
  );