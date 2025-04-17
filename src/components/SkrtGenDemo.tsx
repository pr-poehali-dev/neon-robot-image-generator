import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Clock, Zap, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SkrtGenDemoProps {
  onImageGenerated?: (imageUrl: string) => void;
}

const SkrtGenDemo = ({ onImageGenerated }: SkrtGenDemoProps) => {
  const [prompt, setPrompt] = useState<string>("neon robot test");
  const [apiKey, setApiKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const generateImage = async () => {
    if (!prompt || !apiKey) {
      toast({
        title: "Ошибка",
        description: "Введите запрос и API ключ",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setImageUrl(null);

    try {
      const response = await fetch("https://skrt.poehali.dev/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth": apiKey,
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Превышен лимит запросов. Пожалуйста, подождите и попробуйте снова.");
        } else if (response.status === 405) {
          throw new Error("Метод не разрешен. Проверьте настройки CORS на сервере.");
        }
        throw new Error(`Ошибка: ${response.status}`);
      }

      const data = await response.json();
      setImageUrl(data.imageURL);
      
      if (onImageGenerated) {
        onImageGenerated(data.imageURL);
      }

      toast({
        title: "Успешно",
        description: "Изображение сгенерировано!",
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Произошла ошибка при генерации изображения",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[300px] lg:w-[360px] xl:w-[400px] shrink-0">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-[#252535]">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt="Сгенерированное изображение" 
                className="w-full h-full object-cover"
                onError={() => {
                  toast({
                    title: "Ошибка",
                    description: "Не удалось загрузить изображение",
                    variant: "destructive",
                  });
                }}
              />
            ) : (
              <img 
                src="https://h.uguu.se/sWQRLidf.png" 
                alt="Placeholder" 
                className="w-full h-full object-cover" 
              />
            )}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="p-5 rounded-xl bg-[#151520] backdrop-blur-sm border border-[#252535] flex-1">
            <div className="text-lg font-medium mb-4">Хайлайты</div>
            
            <div className="space-y-3">
              <div className="flex items-center p-3 rounded-lg bg-[#0d0d14] border border-[#252535]">
                <Clock className="h-5 w-5 mr-3 text-yellow-400" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Время генерации</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold">2.5 секунды</span>
                    <span className="text-xs text-muted-foreground">на одно изображение</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-[#0d0d14] border border-[#252535]">
                <Zap className="h-5 w-5 mr-3 text-yellow-400" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Максимальная скорость</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold">72 картинки</span>
                    <span className="text-xs text-muted-foreground">в минуту</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-[#0d0d14] border border-[#252535]">
                <AlertCircle className="h-5 w-5 mr-3 text-yellow-400" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Статус</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold">{isLoading ? "Генерация..." : (imageUrl ? "Готово" : "Ожидание")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 rounded-xl bg-[#151520] backdrop-blur-sm border border-[#252535]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-2 block text-muted-foreground">Запрос для генерации</label>
            <Input
              placeholder="Например: neon robot test"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-12"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-muted-foreground">X-Auth секрет</label>
            <Input
              placeholder="Введите ключ API"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="h-12"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Button 
            onClick={generateImage} 
            disabled={isLoading}
            className="w-full h-12 text-base"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Генерирую...
              </>
            ) : (
              "Сгенерировать изображение"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkrtGenDemo;