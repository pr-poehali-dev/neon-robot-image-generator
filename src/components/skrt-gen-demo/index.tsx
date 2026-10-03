import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SkrtGenDemoProps, Ratio, RATIOS, GenResult } from "./types";
import ImagePreview from "./image-preview";
import GeneratorForm from "./generator-form";
import { generateImageAPI, generateRandomPromptText, magicPromptAPI } from "./api";

const SkrtGenDemo = ({ onImageGenerated }: SkrtGenDemoProps) => {
  const [prompt, setPrompt] = useState<string>("neon robot test");
  const [apiKey, setApiKey] = useState<string>("");
  const [ratios, setRatios] = useState<Ratio[]>(["1:1"]);
  const [magic, setMagic] = useState<boolean>(true);
  const [stage, setStage] = useState<"magic" | "image" | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<GenResult[]>([]);
  const { toast } = useToast();

  const toggleRatio = (r: Ratio) => {
    setRatios((prev) => {
      if (prev.includes(r)) return prev.length > 1 ? prev.filter((x) => x !== r) : prev;
      return RATIOS.filter((x) => x === r || prev.includes(x));
    });
  };

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

    const selected = [...ratios];
    setIsLoading(true);
    setResults(selected.map((r) => ({ ratio: r, url: null, loading: true })));

    try {
      let finalPrompt = currentPrompt;
      if (magic) {
        setStage("magic");
        finalPrompt = await magicPromptAPI(currentPrompt, selected.length === 1 ? selected[0] : "");
      }
      setStage("image");

      const settled = await Promise.allSettled(
        selected.map(async (r) => {
          try {
            const url = await generateImageAPI(finalPrompt, apiKey, r);
            setResults((prev) => prev.map((x) => (x.ratio === r ? { ...x, url, loading: false } : x)));
            onImageGenerated?.(url);
            return url;
          } catch (e) {
            const msg = e instanceof Error ? e.message : "Ошибка генерации";
            setResults((prev) => prev.map((x) => (x.ratio === r ? { ...x, loading: false, error: msg } : x)));
            throw e;
          }
        }),
      );

      const ok = settled.filter((s) => s.status === "fulfilled").length;
      const firstErr = settled.find((s): s is PromiseRejectedResult => s.status === "rejected");
      if (ok > 0) {
        toast({
          title: "Успешно",
          description: selected.length > 1 ? `Готово вариантов: ${ok} из ${selected.length}` : "Изображение сгенерировано!",
        });
      }
      if (firstErr) {
        toast({
          title: "Ошибка",
          description: firstErr.reason instanceof Error ? firstErr.reason.message : "Произошла ошибка при генерации изображения",
          variant: "destructive",
        });
      }
    } catch (error) {
      setResults([]);
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Произошла ошибка при генерации изображения",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setStage(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[420px] lg:w-[480px] xl:w-[520px] shrink-0">
          <ImagePreview
            results={results}
            onImageError={handleImageError}
            isLoading={isLoading}
          />
        </div>

        <div className="flex-1 flex flex-col">
          <GeneratorForm
            prompt={prompt}
            setPrompt={setPrompt}
            apiKey={apiKey}
            setApiKey={setApiKey}
            ratios={ratios}
            toggleRatio={toggleRatio}
            magic={magic}
            setMagic={setMagic}
            stage={stage}
            isLoading={isLoading}
            onGenerateClick={() => handleGenerateImage()}
            onRandomPromptClick={handleGenerateRandomPrompt}
          />
        </div>
      </div>
    </div>
  );
};

export default SkrtGenDemo;
