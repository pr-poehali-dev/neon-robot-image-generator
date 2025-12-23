import SkrtGenDemo from "@/components/SkrtGenDemo";
import CodeSnippet from "@/components/CodeSnippet";
import StatisticsPanel from "@/components/StatisticsPanel";
import { UsageChart } from "@/components/UsageChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Code, ChevronDown } from "lucide-react";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import BackgroundPathsWrapper from "@/components/BackgroundPathsWrapper";
import { useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
      <div className="container mx-auto px-4 max-w-7xl min-h-screen flex flex-col justify-center py-12">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => navigate('/compare')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all group"
          >
            <span className="text-[13px] font-light tracking-wide">🔥  Готовимся к апдейту</span>
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 mb-8 items-stretch min-h-[554px]">
          <StatisticsPanel />
          <UsageChart />
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <section className="mb-8">
            <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
              <div className="relative p-4 md:p-6">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between gap-3 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <Code className="h-4 w-4 text-white/60" />
                      <h2 className="text-base font-light tracking-wide text-white/60">Для разработчиков</h2>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 duration-300">
                  <div className="pt-4 space-y-8">
                    <div>
                      <SkrtGenDemo />
                    </div>

                    <div>
                      <h3 className="text-xl font-light text-white/90 mb-4">Интеграция в ваш проект</h3>
                      <p className="mb-4 text-white/60 font-light">
                        Для доступа к API требуется секретный ключ X-Auth, который
                        необходимо передать в заголовке запроса.
                      </p>

                      <Tabs defaultValue="typescript" className="mt-4">
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
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </div>
          </section>
        </Collapsible>
      </div>
    </BackgroundPathsWrapper>
  );
};

export default Index;