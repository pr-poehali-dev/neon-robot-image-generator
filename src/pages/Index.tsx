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
      throw new Error("Rate limit exceeded. Please wait and try again.");
    }
    throw new Error(\`Error: \${response.status}\`);
  }

  const data: SkrtPoehaliResponse = await response.json();
  return data.imageURL;
}`;

  const curlCode = `curl -X POST "https://skrt.poehali.dev/generate" \\
  -H "Content-Type: application/json" \\
  -H "X-Auth: YOUR_SECRET_KEY" \\
  -d '{"prompt": "neon robot test"}'`;

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-4 lightning-title flex items-center justify-center">
          <img 
            src="https://sokratic.ru/favicon.ico" 
            alt="Sokratic" 
            className="h-8 mr-3"
          />
          <span>SKRT.POEHALI</span>
          <img 
            src="https://poehali.dev/_next/static/media/logo.1d9d82a2.svg" 
            alt="Poehali" 
            className="h-10 ml-3"
          />
        </h1>
        <p className="text-xl text-muted-foreground">
          интерактивная инструкция для инженеров sokratic.ru
        </p>
      </div>

      <div className="mb-16">
        <SkrtGenDemo />
      </div>

      <div className="mb-12 rounded-xl overflow-hidden border border-[#252535]">
        <div className="bg-[#151520] p-8">
          <h2 className="text-2xl font-medium mb-4 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Интеграция в ваш проект
          </h2>
          <p className="mb-6 text-muted-foreground">
            Для доступа к API требуется секретный ключ X-Auth, который необходимо передать в заголовке запроса.
          </p>

          <Tabs defaultValue="typescript" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="typescript" className="px-6">TypeScript</TabsTrigger>
              <TabsTrigger value="curl" className="px-6">cURL</TabsTrigger>
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
      </div>

      <div className="rounded-xl bg-[#151925] p-8 border border-[#252535]">
        <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
          <div className="h-6 w-6 text-yellow-400 flex items-center justify-center">🚀</div>
          Рекомендации по использованию
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          <li className="p-4 bg-[#101520] rounded-xl border border-[#252535]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-5 w-5 text-yellow-400 flex items-center justify-center">🚀</div>
              <span className="font-medium">Скорость</span>
            </div>
            <p className="text-sm text-muted-foreground">72 img / min</p>
          </li>
          <li className="p-4 bg-[#101520] rounded-xl border border-[#252535]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-5 w-5 text-primary flex items-center justify-center">🧠</div>
              <span className="font-medium">Повторные запросы</span>
            </div>
            <p className="text-sm text-muted-foreground">При коде 429 ждите минимум 5 секунд перед повторной попыткой</p>
          </li>
          <li className="p-4 bg-[#101520] rounded-xl border border-[#252535]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-5 w-5 text-primary flex items-center justify-center">🧠</div>
              <span className="font-medium">Выгодная цена</span>
            </div>
            <p className="text-sm text-muted-foreground">Кайфуйте от самой выгодной цены на картинки</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;