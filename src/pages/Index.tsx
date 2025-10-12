import SkrtGenDemo from "@/components/SkrtGenDemo";
import CodeSnippet from "@/components/CodeSnippet";
import StatisticsPanel from "@/components/StatisticsPanel";
import { UsageChart } from "@/components/UsageChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Code, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import BackgroundPathsWrapper from "@/components/BackgroundPathsWrapper";
import { useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const typescriptCode = `// Пример использования SKRT.POEHALI в TypeScript

interface SkrtPoehaliResponse {
  imageURL: string;
}

async function generateImage(prompt: string, apiKey: string): Promise<string> {
  const response = await fetch("https://skrt.arnld.ai/generate", {
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

  const curlCode = `curl -X POST https://skrt.arnld.ai/generate \\
  -H "Content-Type: application/json" \\
  -H "X-Auth: ваш_ключ_доступа" \\
  -d '{"prompt": "ваш запрос для генерации изображения"}'`;

  return (
    <BackgroundPathsWrapper>
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 mb-8 items-start min-h-[554px]">
          <StatisticsPanel />
          <UsageChart />
        </div>

        <div className="space-y-10">
          <section>
            <SkrtGenDemo />
          </section>

          <section className="mt-12">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
                <div className="relative p-6 md:p-8">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between gap-3 mb-6 cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <Code className="h-6 w-6 text-emerald-400" />
                        <h2 className="text-2xl font-light tracking-wide text-white/90">Интеграция в ваш проект</h2>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-white/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <p className="mb-6 text-white/60 font-light">
                      Для доступа к API требуется секретный ключ X-Auth, который
                      необходимо передать в заголовке запроса.
                    </p>

                    <Tabs defaultValue="typescript" className="mt-6">
                      <TabsList className="bg-white/5 border border-white/10 p-1 rounded-xl">
                        <TabsTrigger 
                          value="typescript"
                          className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300 rounded-lg font-light"
                        >
                          TypeScript
                        </TabsTrigger>
                        <TabsTrigger 
                          value="curl"
                          className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300 rounded-lg font-light"
                        >
                          cURL
                        </TabsTrigger>
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
                  </CollapsibleContent>
                </div>
              </div>
            </Collapsible>
          </section>
        </div>
      </div>
    </BackgroundPathsWrapper>
  );
};

export default Index;