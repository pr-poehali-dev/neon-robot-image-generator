import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ImagePreview from "./skrt-gen-demo/image-preview";
import GeneratorForm from "./skrt-gen-demo/generator-form";
import { generateImageAPI, generateRandomPromptText } from "./skrt-gen-demo/api";

const ImagePreviewSection = () => {
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
    <div className="space-y-4">
      <ImagePreview 
        imageUrl={imageUrl} 
        onImageError={handleImageError}
        isLoading={isLoading} 
      />
      
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

export default ImagePreviewSection;
