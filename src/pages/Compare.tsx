import { useState } from 'react';
import BackgroundPathsWrapper from '@/components/BackgroundPathsWrapper';
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
  { key: 'sgx', name: 'SGX', description: 'Наша модель' },
  { key: 'flux2', name: 'FLUX-2', description: 'Black Forest Labs' },
  { key: 'zimage', name: 'Z-IMAGE', description: 'Zhipu AI' },
  { key: 'gpt15', name: 'GPT-1.5', description: 'OpenAI' }
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
    <BackgroundPathsWrapper>
      <div className="container mx-auto px-4 max-w-7xl min-h-screen flex flex-col justify-center py-12">
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-light tracking-wide text-white/90 mb-3">
            Сравнение моделей генерации
          </h1>
          <p className="text-[13px] text-white/40 font-light tracking-wider uppercase">
            Честное сравнение результатов
          </p>
        </div>

        <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6 shadow-2xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {models.map((model) => (
              <div key={model.key} className="backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden">
                <div className="p-3">
                  <div className="text-center mb-3">
                    <h3 className="text-[15px] font-light text-white/90 tracking-wide">{model.name}</h3>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider mt-1">{model.description}</p>
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-white/[0.02] border border-white/5">
                    <img
                      src={currentData.images[model.key as keyof typeof currentData.images]}
                      alt={`${model.name} result`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/5 p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handlePrevious}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-white/60 hover:text-white/90 hover:bg-white/[0.05] transition-all"
              >
                <Icon name="ChevronLeft" size={16} />
                <span className="text-[11px] font-light tracking-wider uppercase">Пред</span>
              </button>

              <div className="flex gap-2">
                {comparisonData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-emerald-500 w-6'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Промпт ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-white/60 hover:text-white/90 hover:bg-white/[0.05] transition-all"
              >
                <span className="text-[11px] font-light tracking-wider uppercase">След</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>

            <div className="text-center">
              <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">
                Промпт {currentIndex + 1} из {comparisonData.length}
              </p>
              <p className="text-[15px] text-white/70 font-light leading-relaxed">
                "{currentData.prompt}"
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-white/60 hover:text-white/90 hover:bg-white/[0.05] transition-all"
          >
            <Icon name="ArrowLeft" size={16} />
            <span className="text-[12px] font-light tracking-wider uppercase">На главную</span>
          </button>
        </div>
      </div>
    </BackgroundPathsWrapper>
  );
}
