import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <Input
            placeholder="Введите запрос для генерации (например: neon robot test)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div>
          <Input
            placeholder="Введите X-Auth секрет"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
      </div>

      <Button 
        onClick={generateImage} 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Генерирую...
          </>
        ) : (
          "Сгенерировать изображение"
        )}
      </Button>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt="Сгенерированное изображение" 
              className="w-full h-auto aspect-square object-cover"
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
              className="w-full h-auto aspect-square object-cover" 
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkrtGenDemo;