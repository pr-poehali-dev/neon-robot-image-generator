import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Dices } from "lucide-react";
import { GeneratorFormProps } from "./types";

const GeneratorForm = ({ 
  prompt, 
  setPrompt, 
  apiKey, 
  setApiKey, 
  isLoading, 
  onGenerateClick, 
  onRandomPromptClick 
}: GeneratorFormProps) => {
  return (
    <div className="p-5 rounded-xl bg-[#151520] backdrop-blur-sm border border-[#252535]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Запрос для генерации
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="Например: neon robot test"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-12 flex-1"
            />
            <Button 
              onClick={onRandomPromptClick}
              disabled={isLoading}
              className="h-12 aspect-square"
              variant="outline"
              title="Сгенерировать случайный запрос"
            >
              <Dices className="h-5 w-5" />
            </Button>
            <Button 
              onClick={onGenerateClick}
              disabled={isLoading}
              className="h-12"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Генерирую...
                </>
              ) : (
                "Сгенерировать"
              )}
            </Button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            X-Auth секрет
          </label>
          <Input
            placeholder="Введите ключ API"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;