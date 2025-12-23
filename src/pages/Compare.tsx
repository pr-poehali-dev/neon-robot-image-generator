import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ComparisonData {
  prompt: string;
  images: {
    sgx: string;
    flux2: string;
    zimage: string;
    gpt15: string;
  };
}

const comparisonData: ComparisonData[] = [
  {
    prompt: "Промпт 1 - будет добавлен позже",
    images: {
      sgx: "https://via.placeholder.com/512x512/10b981/ffffff?text=SGX",
      flux2: "https://via.placeholder.com/512x512/3b82f6/ffffff?text=FLUX-2",
      zimage: "https://via.placeholder.com/512x512/8b5cf6/ffffff?text=Z-IMAGE",
      gpt15: "https://via.placeholder.com/512x512/ef4444/ffffff?text=GPT-1.5"
    }
  },
  {
    prompt: "Промпт 2 - будет добавлен позже",
    images: {
      sgx: "https://via.placeholder.com/512x512/10b981/ffffff?text=SGX",
      flux2: "https://via.placeholder.com/512x512/3b82f6/ffffff?text=FLUX-2",
      zimage: "https://via.placeholder.com/512x512/8b5cf6/ffffff?text=Z-IMAGE",
      gpt15: "https://via.placeholder.com/512x512/ef4444/ffffff?text=GPT-1.5"
    }
  },
  {
    prompt: "Промпт 3 - будет добавлен позже",
    images: {
      sgx: "https://via.placeholder.com/512x512/10b981/ffffff?text=SGX",
      flux2: "https://via.placeholder.com/512x512/3b82f6/ffffff?text=FLUX-2",
      zimage: "https://via.placeholder.com/512x512/8b5cf6/ffffff?text=Z-IMAGE",
      gpt15: "https://via.placeholder.com/512x512/ef4444/ffffff?text=GPT-1.5"
    }
  },
  {
    prompt: "Промпт 4 - будет добавлен позже",
    images: {
      sgx: "https://via.placeholder.com/512x512/10b981/ffffff?text=SGX",
      flux2: "https://via.placeholder.com/512x512/3b82f6/ffffff?text=FLUX-2",
      zimage: "https://via.placeholder.com/512x512/8b5cf6/ffffff?text=Z-IMAGE",
      gpt15: "https://via.placeholder.com/512x512/ef4444/ffffff?text=GPT-1.5"
    }
  }
];

const models = [
  { key: 'sgx', name: 'SGX', color: 'from-emerald-500 to-emerald-600' },
  { key: 'flux2', name: 'FLUX-2', color: 'from-blue-500 to-blue-600' },
  { key: 'zimage', name: 'Z-IMAGE', color: 'from-purple-500 to-purple-600' },
  { key: 'gpt15', name: 'GPT-1.5', color: 'from-red-500 to-red-600' }
];

export default function Compare() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? comparisonData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === comparisonData.length - 1 ? 0 : prev + 1));
  };

  const currentData = comparisonData[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Сравнение моделей генерации
          </h1>
          <p className="text-gray-400 text-lg">
            Честное сравнение результатов от разных моделей ИИ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {models.map((model) => (
            <Card key={model.key} className="bg-gray-900/50 backdrop-blur border-gray-800 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${model.color}`} />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center mb-4">{model.name}</h3>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-800/50">
                  <img
                    src={currentData.images[model.key as keyof typeof currentData.images]}
                    alt={`${model.name} result`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-900/50 backdrop-blur border-gray-800 p-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="lg"
              className="bg-gray-800 hover:bg-gray-700 border-gray-700"
            >
              <Icon name="ChevronLeft" size={20} />
              <span className="ml-2">Предыдущий</span>
            </Button>

            <div className="flex gap-2">
              {comparisonData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-emerald-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Промпт ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="lg"
              className="bg-gray-800 hover:bg-gray-700 border-gray-700"
            >
              <span className="mr-2">Следующий</span>
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              Промпт {currentIndex + 1} из {comparisonData.length}
            </p>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              "{currentData.prompt}"
            </p>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg"
            onClick={() => window.location.href = '/'}
          >
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
}
