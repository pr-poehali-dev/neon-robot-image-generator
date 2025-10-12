import HighlightItem from "./highlight-item";

const HighlightsPanel = () => {
  return (
    <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6 shadow-2xl flex-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none" />
      <div className="relative">
        <div className="text-2xl font-light mb-6 text-white/90 tracking-wide">Хайлайты</div>
        
        <div className="space-y-4">
          <HighlightItem 
            icon={<span className="text-2xl">⏱️</span>}
            title="Холодный раундтрип"
            value="2.5 секунды"
          />
          
          <HighlightItem 
            icon={<span className="text-2xl">🚀</span>}
            title="Скорость"
            value="72 картинки в минуту"
          />
          
          <HighlightItem 
            icon={<span className="text-2xl">⚠️</span>}
            title="Рейтлимит"
            value="30 картинок одновременно"
            description="При превышении лимита будет выдан код 429. Подождите 5 секунд или обратитесь в FallBack."
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightsPanel;