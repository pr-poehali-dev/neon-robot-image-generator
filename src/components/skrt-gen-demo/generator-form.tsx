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
    <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="text-sm font-light mb-2 block text-white/50 uppercase tracking-wider">
            Запрос для генерации
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="Например: neon robot test"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-12 flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:bg-white/10 focus:border-emerald-500/50 rounded-xl transition-all"
            />
            <button
              onClick={onRandomPromptClick}
              disabled={isLoading}
              className="h-12 aspect-square rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-50 transition-all duration-200"
              title="Сгенерировать случайный запрос"
            >
              <Dices className="h-5 w-5 mx-auto" />
            </button>
            <button
              onClick={onGenerateClick}
              disabled={isLoading}
              className="h-12 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-light disabled:opacity-50 transition-all duration-200 shadow-lg shadow-emerald-500/20"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Генерирую...
                </span>
              ) : (
                "Сгенерировать"
              )}
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm font-light mb-2 block text-white/50 uppercase tracking-wider">
            X-Auth секрет
          </label>
          <Input
            placeholder="Введите ключ API"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:bg-white/10 focus:border-emerald-500/50 rounded-xl transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;