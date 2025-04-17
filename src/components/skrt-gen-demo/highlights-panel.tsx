import { Clock, AlertCircle } from "lucide-react";
import HighlightItem from "./highlight-item";

const HighlightsPanel = () => {
  return (
    <div className="p-5 rounded-xl bg-[#151520] backdrop-blur-sm border border-[#252535] flex-1">
      <div className="text-lg font-medium mb-4">Хайлайты</div>
      
      <div className="space-y-3">
        <HighlightItem 
          icon={<Clock className="h-5 w-5 text-yellow-400" />}
          title="Холодный раундтрип"
          value="2.5 секунды"
        />
        
        <HighlightItem 
          icon={
            <div className="flex items-center justify-center h-5 w-12">
              <span className="text-2xl">👨‍🚀</span>
              <span className="text-yellow-400 mx-0.5">&</span>
              <span className="text-2xl">💻</span>
            </div>
          }
          title="Скорость"
          value="72 картинки"
        />
        
        <HighlightItem 
          icon={<AlertCircle className="h-5 w-5 text-yellow-400" />}
          title="Рейтлимит"
          value="30 картинок"
          description="При превышении лимита будет выдан код 429. Подождите 5 секунд или обратитесь в FallBack."
        />
      </div>
    </div>
  );
};

export default HighlightsPanel;
