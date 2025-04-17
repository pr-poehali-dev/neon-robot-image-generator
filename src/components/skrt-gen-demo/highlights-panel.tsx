import HighlightItem from "./highlight-item";
import UsageRecommendations from "./usage-recommendations";

const HighlightsPanel = () => {
  return (
    <div className="p-5 rounded-xl bg-[#151520] backdrop-blur-sm border border-[#252535] flex-1">
      <div className="text-lg font-medium mb-4">Хайлайты</div>
      
      <div className="space-y-3">
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
      
      <UsageRecommendations />
    </div>
  );
};

export default HighlightsPanel;