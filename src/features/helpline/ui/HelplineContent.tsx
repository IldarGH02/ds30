import { Phone as PhoneIcon } from 'lucide-react';

export const HelplineContent = () => {
    return (
      <div className="space-y-5">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h3 className="font-semibold text-blue-800 text-lg">
            Телефоны доверия
          </h3>
          <p className="text-blue-700 text-sm mt-1">
            Круглосуточная экстренная психологическая помощь
          </p>
        </div>
  
        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Всероссийский детский телефон доверия</div>
                <a href="tel:88002000122" className="text-blue-600 text-lg font-bold hover:underline">8-800-2000-122</a>
                <p className="text-xs text-gray-500">Круглосуточно, анонимно, бесплатно</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Телефон доверия для детей и подростков</div>
                <a href="tel:88002000122" className="text-green-600 text-lg font-bold hover:underline">8-800-2000-122</a>
                <p className="text-xs text-gray-500">Экстренная помощь в трудных ситуациях</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Единый общероссийский телефон доверия</div>
                <a href="tel:8800200122" className="text-purple-600 text-lg font-bold hover:underline">8-800-200-0122</a>
                <p className="text-xs text-gray-500">Помощь в кризисных ситуациях</p>
              </div>
            </div>
          </div>
  
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg text-sm">
            <p className="text-yellow-800">
              📞 Звонок бесплатный и анонимный с любого телефона
            </p>
          </div>
        </div>
      </div>
    );
  };