import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SkrtGenDemoProps } from "./types";
import ImagePreview from "./image-preview";
import HighlightsPanel from "./highlights-panel";
import GeneratorForm from "./generator-form";
import { generateImageAPI, generateRandomPromptText } from "./api";

const SkrtGenDemo = ({ onImageGenerated }: SkrtGenDemoProps) => {
  const [prompt, setPrompt] = useState<string>("neon robot test");
  const [apiKey, setApiKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageError = () => {
    toast({
      title: "Ошибка",
      description: "Не удалось загрузить изображение",
      variant: "destructive",
    });
  };

  const handleGenerateRandomPrompt = () => {
    const randomPrompt = generateRandomPromptText();
    setPrompt(randomPrompt);
    handleGenerateImage(randomPrompt);
  };

  const handleGenerateImage = async (customPrompt?: string) => {
    const currentPrompt = customPrompt || prompt;
    
    if (!currentPrompt || !apiKey) {
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
      const imageURL = await generateImageAPI(currentPrompt, apiKey);
      setImageUrl(imageURL);
      
      if (onImageGenerated) {
        onImageGenerated(imageURL);
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
          <ImagePreview 
            imageUrl={imageUrl} 
            onImageError={handleImageError}
            isLoading={isLoading} 
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <HighlightsPanel />
        </div>
      </div>
      
      <GeneratorForm 
        prompt={prompt}
        setPrompt={setPrompt}
        apiKey={apiKey}
        setApiKey={setApiKey}
        isLoading={isLoading}
        onGenerateClick={() => handleGenerateImage()}
        onRandomPromptClick={handleGenerateRandomPrompt}
      />
    </div>
  );
};

export default SkrtGenDemo;
