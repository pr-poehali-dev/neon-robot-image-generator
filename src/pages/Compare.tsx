import { useState, useEffect } from 'react';
import BackgroundPathsWrapper from '@/components/BackgroundPathsWrapper';
import Icon from '@/components/ui/icon';

interface ComparisonData {
  goal: string;
  prompt: string;
  images: {
    sgx: string;
    zimage: string;
    flux2: string;
    gpt15: string;
  };
}

const comparisonData: ComparisonData[] = [
  {
    goal: "Фотореалистичный дед",
    prompt: "Ultra-realistic cinematic portrait of a powerful wizard, photographed as if in a high-end fantasy film. Elder male wizard shown waist-up, wearing richly detailed, layered robes made of heavy fabric with realistic folds and stitching. Natural skin texture, visible pores and wrinkles, highly detailed long beard and hair with individual strands. Dramatic cinematic lighting with a soft key light and deep shadows, realistic global illumination. Eyes subtly glowing with magical energy. One hand raised, casting a realistic magical effect with volumetric light and particles. Dark atmospheric background with shallow depth of field, light fog, realistic color grading, 85mm lens look, f/1.8, ultra-sharp focus, HDR, extremely high detail, professional photography quality, photorealistic fantasy character.",
    images: {
      sgx: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/sgx.jpg",
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z-1-from-sgx.png",
      flux2: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/flux.png",
      gpt15: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/gpt.png"
    }
  },
  {
    goal: "Фотореалистичная девушка",
    prompt: "Photorealistic portrait of a beautiful woman, mid-20s, natural elegance and confident expression. Soft sensual pose, slightly parted lips, warm inviting gaze. Wearing a minimal stylish outfit that emphasizes her figure without nudity. Golden hour lighting with warm orange and amber tones, soft sunlight wrapping around her skin. Smooth natural skin texture, realistic makeup, subtle highlights. Shallow depth of field, cinematic photography, 85mm lens look, f/1.8. Warm color grading, soft contrast, cozy and intimate mood, ultra-high detail, professional fashion photography, photorealistic.",
    images: {
      sgx: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/sgx2.jpg",
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z2.png",
      flux2: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/flux2.png",
      gpt15: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/gpt2.png"
    }
  },
  {
    goal: "Мультяшный персонаж",
    prompt: "Cute small robot protagonist with a compact box-shaped body and tank-like tracks instead of legs. Large binocular-style eyes mounted on a thin mechanical neck, expressive and curious gaze. Worn industrial design with subtle scratches, dusty metal surfaces, and functional details like cables, bolts, and panels. Friendly and innocent personality conveyed through posture and eye expression. Warm sunset lighting with golden tones, soft shadows, cinematic atmosphere. Minimal post-apocalyptic environment, simple background, emotional and heartwarming mood. High-quality animated movie style, family-friendly, stylized 3D character, smooth materials, detailed but not realistic.",
    images: {
      sgx: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/sgx4.jpg",
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z4.png",
      flux2: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/flux4.png",
      gpt15: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/gpt4.png"
    }
  },
  {
    goal: "Дед красками",
    prompt: "Ultra-realistic cinematic portrait of a powerful wizard, photographed as if in a high-end fantasy film. Elder male wizard shown waist-up, wearing richly detailed, layered robes made of heavy fabric with realistic folds and stitching. Natural skin texture, visible pores and wrinkles, highly detailed long beard and hair with individual strands. Dramatic cinematic lighting with a soft key light and deep shadows, realistic global illumination. Eyes subtly glowing with magical energy. One hand raised, casting a realistic magical effect with volumetric light and particles. Dark atmospheric background with shallow depth of field, light fog, realistic color grading, 85mm lens look, f/1.8, ultra-sharp focus, HDR, extremely high detail, professional photography quality, photorealistic fantasy character.",
    images: {
      sgx: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/sgx5.jpg",
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z5.png",
      flux2: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/flux5.png",
      gpt15: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/gpt5.png"
    }
  }
];

const models = [
  { 
    key: 'sgx', 
    name: 'SGX', 
    price: 0.00225,
    time: 1.0,
    priceColor: 'text-emerald-400',
    timeColor: 'text-emerald-400'
  },
  { 
    key: 'zimage', 
    name: 'SGX (Z)', 
    price: 0.0045,
    time: 2.0,
    priceColor: 'text-emerald-400',
    timeColor: 'text-yellow-400'
  },
  { 
    key: 'flux2', 
    name: 'FLUX-2-TURBO', 
    price: 0.008,
    time: 1.58,
    priceColor: 'text-red-400',
    timeColor: 'text-yellow-400'
  },
  { 
    key: 'gpt15', 
    name: 'GPT-1.5', 
    price: 0.009,
    time: 12.0,
    priceColor: 'text-red-400',
    timeColor: 'text-red-400'
  }
];

export default function Compare() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<{ url: string; model: string; modelKey: string } | null>(null);
  const [showRelative, setShowRelative] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? comparisonData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === comparisonData.length - 1 ? 0 : prev + 1));
  };

  const handleFullscreenPrevious = () => {
    if (!fullscreenImage) return;
    const currentModelIndex = models.findIndex(m => m.key === fullscreenImage.modelKey);
    const prevModelIndex = currentModelIndex === 0 ? models.length - 1 : currentModelIndex - 1;
    const prevModel = models[prevModelIndex];
    setFullscreenImage({
      url: currentData.images[prevModel.key as keyof typeof currentData.images],
      model: prevModel.name,
      modelKey: prevModel.key
    });
  };

  const handleFullscreenNext = () => {
    if (!fullscreenImage) return;
    const currentModelIndex = models.findIndex(m => m.key === fullscreenImage.modelKey);
    const nextModelIndex = currentModelIndex === models.length - 1 ? 0 : currentModelIndex + 1;
    const nextModel = models[nextModelIndex];
    setFullscreenImage({
      url: currentData.images[nextModel.key as keyof typeof currentData.images],
      model: nextModel.name,
      modelKey: nextModel.key
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fullscreenImage) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleFullscreenPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleFullscreenNext();
      } else if (e.key === 'Escape') {
        setFullscreenImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenImage]);

  const currentData = comparisonData[currentIndex];
  const baseModel = models[0];

  const getRelativeValue = (value: number, baseValue: number) => {
    const multiplier = value / baseValue;
    return `×${multiplier.toFixed(1)}`;
  };

  return (
    <BackgroundPathsWrapper>
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all z-10"
          >
            <Icon name="X" size={24} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFullscreenPrevious();
            }}
            className="absolute left-4 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all z-10"
          >
            <Icon name="ChevronLeft" size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFullscreenNext();
            }}
            className="absolute right-4 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all z-10"
          >
            <Icon name="ChevronRight" size={32} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {models.map((model) => (
            <div key={model.key} className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-3">
                <div className="text-center mb-3">
                  <h3 className="text-[15px] font-light text-white/90 tracking-wide">{model.name}</h3>
                </div>
                <div 
                  className="aspect-square rounded-xl overflow-hidden bg-white/[0.02] border border-white/5 cursor-pointer hover:border-emerald-500/50 transition-all mb-3"
                  onClick={() => setFullscreenImage({ 
                    url: currentData.images[model.key as keyof typeof currentData.images], 
                    model: model.name,
                    modelKey: model.key
                  })}
                >
                  <img
                    src={currentData.images[model.key as keyof typeof currentData.images]}
                    alt={`${model.name} result`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-2">
                  <div 
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/[0.02] cursor-pointer hover:bg-white/[0.05] transition-all"
                    onClick={() => setShowRelative(!showRelative)}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon name="DollarSign" size={12} className="text-white/40" />
                      <span className="text-[10px] text-white/40 uppercase tracking-wider">Цена</span>
                    </div>
                    <span className={`text-[13px] font-light ${model.priceColor}`}>
                      {showRelative && model.key !== 'sgx' 
                        ? getRelativeValue(model.price, baseModel.price)
                        : `$${model.price}`}
                    </span>
                  </div>
                  <div 
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/[0.02] cursor-pointer hover:bg-white/[0.05] transition-all"
                    onClick={() => setShowRelative(!showRelative)}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon name="Zap" size={12} className="text-white/40" />
                      <span className="text-[10px] text-white/40 uppercase tracking-wider">Время</span>
                    </div>
                    <span className={`text-[13px] font-light ${model.timeColor}`}>
                      {showRelative && model.key !== 'sgx'
                        ? getRelativeValue(model.time, baseModel.time)
                        : `${model.time}с`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-4xl mx-auto backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden mb-6">
          <div className="relative">
            <div className="absolute top-0 left-0 h-1 bg-emerald-500/30 transition-all duration-300" 
              style={{ width: `${((currentIndex + 1) / comparisonData.length) * 100}%` }}
            />
            
            <div className="flex items-center justify-between p-4">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-xl hover:bg-white/5 text-white/60 hover:text-white/90 transition-all"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>

              <div className="flex items-center gap-3 flex-1 justify-center">
                <span className="text-[16px] text-white/90 font-light text-center">{currentData.goal}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(currentData.prompt);
                  }}
                  className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all"
                  title="Скопировать промпт"
                >
                  <Icon name="Copy" size={14} />
                </button>
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-xl hover:bg-white/5 text-white/60 hover:text-white/90 transition-all"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
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