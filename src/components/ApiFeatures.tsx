import { Clock, Zap, AlertCircle } from "lucide-react";

const ApiFeatures = () => {
  return (
    <div className="p-6 rounded-xl bg-[#151520] backdrop-blur-sm border border-[#252535]">
      <h3 className="text-xl font-medium mb-6">Особенности API</h3>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-normal text-muted-foreground">Время генерации</div>
            <div className="text-2xl font-medium tracking-tight">2.5 секунды</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-yellow-400/20 p-3 rounded-full">
            <Zap className="h-5 w-5 text-yellow-400" />
          </div>
          <div>
            <div className="text-sm font-normal text-muted-foreground">Скорость</div>
            <div className="text-2xl font-medium tracking-tight">72 img / min</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <AlertCircle className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-normal text-muted-foreground">Рейт-лимит</div>
            <div className="text-2xl font-medium tracking-tight">30 картинок <span className="text-sm font-normal text-muted-foreground">в одновременной генерации</span></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-yellow-950/20 p-4 rounded-lg border border-yellow-800/30">
        <p className="text-sm text-yellow-300/90">
          При превышении лимита будет возвращен код 429. Подождите 5 секунд перед повторным запросом.
        </p>
      </div>
    </div>
  );
};

export default ApiFeatures;