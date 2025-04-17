import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
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
      <div className="flex flex-col gap-4">
        <div>
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
  );
};

export default SkrtGenDemo;