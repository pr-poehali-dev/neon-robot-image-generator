import SkrtGenDemo from "@/components/SkrtGenDemo";
import CodeSnippet from "@/components/CodeSnippet";
import { Zap } from "lucide-react";

const Index = () => {
  const typescriptCode = `// Пример использования SKRT.POEHALI в TypeScript

interface SkrtPoehaliResponse {
  imageURL: string;
}

async function generateImage(prompt: string, apiKey: string): Promise<string> {
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
      throw new Error("Превышен лимит запросов");
    }
    throw new Error("Ошибка при генерации изображения");
  }

  const data: SkrtPoehaliResponse = await response.json();
  return data.imageURL;
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="flex items-center gap-6">
          <img 
            src="https://sokratic.ru/favicon.ico" 
            alt="Sokratic" 
            className="h-10"
          />
          <h1 className="text-4xl font-bold lightning-title">
            <span>SKRT.POEHALI</span>
            <Zap className="text-primary h-8 w-8" />
          </h1>
          <img 
            src="https://poehali.dev/_next/static/media/logo.1d9d82a2.svg" 
            alt="POEHALI" 
            className="h-10"
          />
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <SkrtGenDemo />
        </section>

        <section>
          <CodeSnippet 
            code={typescriptCode} 
            language="typescript" 
            title="generate-image.ts" 
          />
        </section>
      </div>
    </div>
  );
};

export default Index;