import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiLimitsInfo from "@/components/ApiLimitsInfo";
import SkrtGenDemo from "@/components/SkrtGenDemo";
import CodeSnippet from "@/components/CodeSnippet";
import { Zap, Sparkles, ShieldCheck, Code } from "lucide-react";

const Index = () => {
  const typescriptCode = `// Пример использования SKRT.GEN в TypeScript

interface SkrtGenResponse {
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
      throw new Error("Rate limit exceeded. Please wait and try again.");
    }
    throw new Error(\`Error: \${response.status}\`);
  }

  const data: SkrtGenResponse = await response.json();
  return data.imageURL;
}`;

  const curlCode = `curl -X POST "https://skrt.poehali.dev/generate" \\
  -H "Content-Type: application/json" \\
  -H "X-Auth: YOUR_SECRET_KEY" \\
  -d '{"prompt": "neon robot test"}'`;

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 lightning-title">
          <Zap className="h-10 w-10 text-yellow-400" />
          <span>SKRT.GEN</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          интерактивная инструкция для инженеров sokratic.ru
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <SkrtGenDemo />
        </div>
        <div>
          <ApiLimitsInfo />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Code className="mr-2 h-6 w-6 text-primary" />
          Интеграция в ваш проект
        </h2>
        <p className="mb-4 text-muted-foreground">
          Для доступа к API требуется секретный ключ X-Auth, который необходимо передать в заголовке запроса.
          Используйте приведенные ниже примеры для интеграции SKRT.GEN в ваш проект.
        </p>

        <Tabs defaultValue="typescript" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="typescript">TypeScript</TabsTrigger>
            <TabsTrigger value="curl">cURL</TabsTrigger>
          </TabsList>
          <TabsContent value="typescript">
            <CodeSnippet 
              code={typescriptCode} 
              language="typescript" 
              title="TypeScript"
            />
          </TabsContent>
          <TabsContent value="curl">
            <CodeSnippet 
              code={curlCode} 
              language="bash" 
              title="cURL"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-primary/10 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Sparkles className="mr-2 h-6 w-6 text-primary" />
          Рекомендации по использованию
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <ShieldCheck className="h-5 w-5 mr-2 mt-0.5 text-primary/80" />
            <span>Всегда обрабатывайте ошибки при превышении лимита (код 429)</span>
          </li>
          <li className="flex items-start">
            <ShieldCheck className="h-5 w-5 mr-2 mt-0.5 text-primary/80" />
            <span>При получении кода 429 рекомендуется ждать минимум 5 секунд перед повторной попыткой</span>
          </li>
          <li className="flex items-start">
            <ShieldCheck className="h-5 w-5 mr-2 mt-0.5 text-primary/80" />
            <span>Кайфуйте от самой выгодной цены на картинки</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;