
import SkrtGenDemo from "@/components/SkrtGenDemo";
import CodeSnippet from "@/components/CodeSnippet";
import StatisticsPanel from "@/components/StatisticsPanel";
import { UsageChart } from "@/components/usage-chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import BackgroundPathsWrapper from "@/components/BackgroundPathsWrapper";

const Index = () => {
  const isMobile = useIsMobile();
  
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

  const curlCode = `curl -X POST https://skrt.poehali.dev/generate \\
  -H "Content-Type: application/json" \\
  -H "X-Auth: ваш_ключ_доступа" \\
  -d '{"prompt": "ваш запрос для генерации изображения"}'`;

  return (
    <BackgroundPathsWrapper>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-3 md:gap-6">
            <img 
              src="https://sokratic.ru/favicon.ico" 
              alt="Sokratic" 
              className="h-8 md:h-10"
            />
            <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold`}>
              <span>SKRT.POEHALI</span>
            </h1>
            <img 
              src="https://poehali.dev/_next/static/media/logo.1d9d82a2.svg" 
              alt="POEHALI" 
              className="h-8 md:h-10"
            />
          </div>
          <p className={`${isMobile ? 'text-sm' : 'text-base'} text-muted-foreground text-center`}>
            интерактивная инструкция для инженеров sokratic.ru
          </p>
        </div>

        <StatisticsPanel />
        
        <UsageChart />

        <div className="space-y-10">
          <section>
            <SkrtGenDemo />
          </section>

          <section className="mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                <CardTitle>Интеграция в ваш проект</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">Для доступа к API требуется секретный ключ X-Auth, который необходимо передать в заголовке запроса.</p>
                
                <Tabs defaultValue="typescript" className="mt-4">
                  <TabsList>
                    <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>
                  <TabsContent value="typescript">
                    <CodeSnippet 
                      code={typescriptCode} 
                      language="typescript" 
                      title="generate-image.ts" 
                    />
                  </TabsContent>
                  <TabsContent value="curl">
                    <CodeSnippet 
                      code={curlCode} 
                      language="bash" 
                      title="request.sh" 
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </BackgroundPathsWrapper>
  );
};

export default Index;
