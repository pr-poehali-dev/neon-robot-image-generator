import { useState, useEffect } from 'react';
import BackgroundPathsWrapper from '@/components/BackgroundPathsWrapper';
import Icon from '@/components/ui/icon';

interface ComparisonData {
  goal: string;
  prompt: string;
  images: {
    zimage: string;
    ideogram: string;
  };
}

const comparisonData: ComparisonData[] = [
  {
    goal: "Фотореалистичный пейзаж — Россиюшка",
    prompt: "Epic patriotic landscape inspired by Russia's natural beauty. Vast open plains and forests stretching to the horizon, a wide river reflecting warm sunrise light. Traditional architectural silhouettes in the distance, wooden textures and classic forms blending naturally into the environment. Rich warm color palette with deep reds, golds, and natural greens. Calm, proud, and timeless atmosphere. Cinematic lighting, soft mist, sense of scale and resilience. Highly detailed, realistic style, majestic and inspiring mood, cultural heritage aesthetic.",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z7.png",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/bafc7205-0751-44e4-8ed9-e2479d982d1c.png"
    }
  },
  {
    goal: "Фотореалистичный дед",
    prompt: "Ultra-realistic cinematic portrait of a powerful wizard, photographed as if in a high-end fantasy film. Elder male wizard shown waist-up, wearing richly detailed, layered robes made of heavy fabric with realistic folds and stitching. Natural skin texture, visible pores and wrinkles, highly detailed long beard and hair with individual strands. Dramatic cinematic lighting with a soft key light and deep shadows, realistic global illumination. Eyes subtly glowing with magical energy. One hand raised, casting a realistic magical effect with volumetric light and particles. Dark atmospheric background with shallow depth of field, light fog, realistic color grading, 85mm lens look, f/1.8, ultra-sharp focus, HDR, extremely high detail, professional photography quality, photorealistic fantasy character.",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z-1-from-sgx.png",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/b76aa452-3c40-42f7-8e0d-60a4fbebc906.png"
    }
  },
  {
    goal: "Фотореалистичная девушка",
    prompt: "Photorealistic portrait of a beautiful woman, mid-20s, natural elegance and confident expression. Soft sensual pose, slightly parted lips, warm inviting gaze. Wearing a minimal stylish outfit that emphasizes her figure without nudity. Golden hour lighting with warm orange and amber tones, soft sunlight wrapping around her skin. Smooth natural skin texture, realistic makeup, subtle highlights. Shallow depth of field, cinematic photography, 85mm lens look, f/1.8. Warm color grading, soft contrast, cozy and intimate mood, ultra-high detail, professional fashion photography, photorealistic.",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z2.png",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/7206f206-d1df-4f4d-99bd-5666f95b7438.png"
    }
  },
  {
    goal: "Мультяшный персонаж",
    prompt: "Cute small robot protagonist with a compact box-shaped body and tank-like tracks instead of legs. Large binocular-style eyes mounted on a thin mechanical neck, expressive and curious gaze. Worn industrial design with subtle scratches, dusty metal surfaces, and functional details like cables, bolts, and panels. Friendly and innocent personality conveyed through posture and eye expression. Warm sunset lighting with golden tones, soft shadows, cinematic atmosphere. Minimal post-apocalyptic environment, simple background, emotional and heartwarming mood. High-quality animated movie style, family-friendly, stylized 3D character, smooth materials, detailed but not realistic.",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z4.png",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/5ee6e911-7170-4621-8e4e-12e43e3e8f9c.png"
    }
  },
  {
    goal: "Дед красками",
    prompt: "A highly detailed oil painting of a powerful wizard, painted in the classic JGLC fantasy style. The wizard is depicted waist-up, wearing layered, ornate robes with rich textures and intricate embroidery. Long flowing beard and hair, illuminated by warm, dramatic lighting. His eyes glow faintly with arcane energy. One hand is raised, conjuring a swirling magical aura made of soft luminous brushstrokes. The background is dark and atmospheric, with subtle mist and painterly shadows. Thick oil paint texture, visible brush strokes, high contrast, deep shadows, warm highlights, cinematic fantasy mood, Renaissance-inspired composition, masterful craftsmanship, epic, timeless, ultra-detailed.",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/z-image-wizard-fp4_r32_8steps_2.png",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/0f0dea30-ce6d-498d-b1ae-8e1975d35aff.png"
    }
  },
  {
    goal: "Груша",
    prompt: "Груша",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/ba968b09-10fe-45ea-97bc-a3ce832aa0ae.png",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/9957736b-1d63-4146-ab8f-85d3364a4954.png"
    }
  },
  {
    goal: "Командная работа — флэт",
    prompt: "Плоская векторная иллюстрация для бизнес-презентации: команда из трёх человек собирает большой пазл, над ними лента с надписью «Командная работа». Мягкие пастельные цвета, чистые формы, много воздуха, без лишних деталей, современный корпоративный стиль иллюстраций.",
    images: {
      zimage: "/compare/1_flat_teamwork_sgx.jpg",
      ideogram: "/compare/1_flat_teamwork_ideogram.jpg"
    }
  },
  {
    goal: "Пластилиновая ракета",
    prompt: "3D-иллюстрация в стиле clay render: маленькая ракета стартует с планшета, вокруг облака и график роста, на боку ракеты надпись «Запуск», внизу табличка «Новый продукт». Тёплый студийный свет, мягкие тени, приятные округлые формы, светлый фон.",
    images: {
      zimage: "/compare/2_clay_rocket_sgx.jpg",
      ideogram: "/compare/2_clay_rocket_ideogram.jpg"
    }
  },
  {
    goal: "Изометрический офис",
    prompt: "Изометрическая иллюстрация современного офиса: открытое пространство со столами, растениями и стеклянной переговорной, над входом вывеска «Отдел продаж», на стене доска с надписью «План на 2026». Чёткие линии, приглушённая сине-серая палитра с жёлтым акцентом, стиль корпоративной инфографики.",
    images: {
      zimage: "/compare/3_iso_office_sgx.jpg",
      ideogram: "/compare/3_iso_office_ideogram.jpg"
    }
  },
  {
    goal: "Титульный слайд",
    prompt: "Титульный слайд корпоративной презентации в стиле современного tech-стартапа. Крупный заголовок «Итоги квартала» и подзаголовок «Q3 2026 · Отдел продаж» на тёмно-синем фоне с мягким градиентом и абстрактными светящимися линиями. Чистая современная типографика, много воздуха, минимализм.",
    images: {
      zimage: "/compare/4_slide_title_sgx.jpg",
      ideogram: "/compare/4_slide_title_ideogram.jpg"
    }
  },
  {
    goal: "Слайд с цифрами",
    prompt: "Слайд презентации с инфографикой: три большие цифры «+42%», «1,8 млн» и «97%» с подписями «Рост выручки», «Новых пользователей», «Удержание клиентов». Светлый фон, аккуратные карточки с тонкими иконками, акцентный оранжевый цвет, деловой минималистичный стиль, ровная сетка.",
    images: {
      zimage: "/compare/5_slide_kpi_sgx.jpg",
      ideogram: "/compare/5_slide_kpi_ideogram.jpg"
    }
  },
  {
    goal: "Слайд с цитатой",
    prompt: "Слайд-цитата для презентации: на фотографии тёплого офиса с размытым фоном крупная надпись «Мы строим то, чем пользуются миллионы» и подпись «Анна Смирнова, директор по продукту». Аккуратный белый текст на тёмной плашке, кинематографичный свет, профессиональный стиль.",
    images: {
      zimage: "/compare/6_slide_quote_sgx.jpg",
      ideogram: "/compare/6_slide_quote_ideogram.jpg"
    }
  }
];

const models = [
  { 
    key: 'ideogram', 
    name: 'Ideogram-4-0', 
    price: 0.007,
    priceColor: 'text-emerald-400',
    highlight: false
  },
  { 
    key: 'zimage', 
    name: 'SGX (Z)', 
    price: 0.004,
    priceColor: 'text-emerald-400',
    highlight: false
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
      if (fullscreenImage) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handleFullscreenPrevious();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleFullscreenNext();
        } else if (e.key === 'Escape') {
          setFullscreenImage(null);
        }
      } else {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrevious();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenImage, currentIndex]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-4xl mx-auto w-full">
          {models.map((model) => (
            <div key={model.key} className={`backdrop-blur-xl bg-white/5 rounded-2xl border overflow-hidden ${model.highlight ? 'border-emerald-500/50 shadow-[0_0_16px_0_rgba(52,211,153,0.15)]' : 'border-white/10'}`}>
              <div className="p-3">
                <div className="text-center mb-3">
                  <h3 className="text-[15px] font-light text-white/90 tracking-wide">{model.name}</h3>
                </div>
                <div 
                  className="aspect-square rounded-xl overflow-hidden bg-white/[0.02] border border-white/5 cursor-pointer hover:border-emerald-500/50 transition-all mb-3 flex items-center justify-center"
                  onClick={() => {
                    const url = currentData.images[model.key as keyof typeof currentData.images];
                    if (!url) return;
                    setFullscreenImage({ url, model: model.name, modelKey: model.key });
                  }}
                >
                  {currentData.images[model.key as keyof typeof currentData.images] ? (
                    <img
                      src={currentData.images[model.key as keyof typeof currentData.images]}
                      alt={`${model.name} result`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-white/30">
                      <Icon name="ImageOff" size={28} />
                      <span className="text-[11px] font-light">Скоро</span>
                    </div>
                  )}
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