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
    prompt: "Ultra-realistic cinematic portrait of a powerful wizard, photographed as if in a high-end fantasy film. Elder male wizard shown waist-up, wearing richly detailed, layered robes made of heavy fabric with realistic folds and stitching. Natural skin texture, visible pores and wrinkles, highly detailed long beard and hair with individual strands. Dramatic cinematic lighting with a soft key light and deep shadows, realistic global illumination. Eyes subtly glowing with magical energy. One hand raised, casting a realistic magical effect with volumetric light and particles. Dark atmospheric background with shallow depth of field, light fog, realistic color grading, 85mm lens look, f/1.8, ultra-sharp focus, HDR, extremely high detail, professional photography quality, photorealistic fantasy character.",
    images: {
      sgx: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/sgx.jpg",
      flux2: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/flux.png",
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z.png",
      gpt15: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/gpt.png"
    }
  },
  {
    prompt: "Photorealistic portrait of a beautiful woman, mid-20s, natural elegance and confident expression. Soft sensual pose, slightly parted lips, warm inviting gaze. Wearing a minimal stylish outfit that emphasizes her figure without nudity. Golden hour lighting with warm orange and amber tones, soft sunlight wrapping around her skin. Smooth natural skin texture, realistic makeup, subtle highlights. Shallow depth of field, cinematic photography, 85mm lens look, f/1.8. Warm color grading, soft contrast, cozy and intimate mood, ultra-high detail, professional fashion photography, photorealistic.",
    images: {
      sgx: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/sgx2.jpg",
      flux2: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/flux2.png",
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z2.png",
      gpt15: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/gpt2.png"
    }
  },
  {
    prompt: "Cute small robot protagonist with a compact box-shaped body and tank-like tracks instead of legs. Large binocular-style eyes mounted on a thin mechanical neck, expressive and curious gaze. Worn industrial design with subtle scratches, dusty metal surfaces, and functional details like cables, bolts, and panels. Friendly and innocent personality conveyed through posture and eye expression. Warm sunset lighting with golden tones, soft shadows, cinematic atmosphere. Minimal post-apocalyptic environment, simple background, emotional and heartwarming mood. High-quality animated movie style, family-friendly, stylized 3D character, smooth materials, detailed but not realistic.",
    images: {
      sgx: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/sgx4.jpg",
      flux2: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/flux4.png",
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z4.png",
      gpt15: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/gpt4.png"
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
  const [fullscreenImage, setFullscreenImage] = useState<{ url: string; model: string } | null>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? comparisonData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === comparisonData.length - 1 ? 0 : prev + 1));
  };

  const currentData = comparisonData[currentIndex];

  return (
    <BackgroundPathsWrapper>
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
          >
            <Icon name="X" size={24} />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative">
            <p className="text-white/90 text-center mb-4 text-lg font-light">{fullscreenImage.model}</p>
            <img
              src={fullscreenImage.url}
              alt={fullscreenImage.model}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 max-w-7xl min-h-screen flex flex-col justify-center py-12">
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-light tracking-wide text-white/90">
            Сравнение моделей генерации
          </h1>
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
                  <div 
                    className="aspect-square rounded-xl overflow-hidden bg-white/[0.02] border border-white/5 cursor-pointer hover:border-emerald-500/50 transition-all"
                    onClick={() => setFullscreenImage({ 
                      url: currentData.images[model.key as keyof typeof currentData.images], 
                      model: model.name 
                    })}
                  >
                    <img
                      src={currentData.images[model.key as keyof typeof currentData.images]}
                      alt={`${model.name} result`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
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