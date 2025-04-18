import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiFeatures from "@/components/ApiFeatures";
import SkrtGenDemo from "@/components/SkrtGenDemo";
import CodeSnippet from "@/components/CodeSnippet";
import { Zap, Sparkles, ShieldCheck, Code } from "lucide-react";

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
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-4xl font-bold lightning-title">
          <span>SKRT.POEHALI</span>
          <Zap className="text-primary h-8 w-8" />
        </h1>
      </div>

      <Tabs defaultValue="demo" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="demo" className="text-lg">
            <Sparkles className="mr-2 h-4 w-4" />
            Демо
          </TabsTrigger>
          <TabsTrigger value="features" className="text-lg">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Возможности
          </TabsTrigger>
          <TabsTrigger value="code" className="text-lg">
            <Code className="mr-2 h-4 w-4" />
            Код
          </TabsTrigger>
        </TabsList>
        <TabsContent value="demo" className="mt-0">
          <SkrtGenDemo />
        </TabsContent>
        <TabsContent value="features" className="mt-0">
          <ApiFeatures />
        </TabsContent>
        <TabsContent value="code" className="mt-0">
          <CodeSnippet code={typescriptCode} language="typescript" filename="generate-image.ts" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;