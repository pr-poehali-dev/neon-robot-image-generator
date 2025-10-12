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
    <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />
      <div className="relative p-6 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <label className="text-[10px] font-light text-white/40 uppercase tracking-widest mb-2 block">
              Запрос для генерации
            </label>
            <Input
              placeholder="neon robot test"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-12 flex-1 bg-white/[0.03] border-white/10 text-white/90 placeholder:text-white/30 focus:bg-white/[0.06] focus:border-emerald-500/30 rounded-xl transition-all"
            />
          </div>
          
          <div className="w-full">
            <label className="text-[10px] font-light text-white/40 uppercase tracking-widest mb-2 block">
              X-Auth секрет
            </label>
            <Input
              placeholder="Введите ключ API"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="h-12 bg-white/[0.03] border-white/10 text-white/90 placeholder:text-white/30 focus:bg-white/[0.06] focus:border-emerald-500/30 rounded-xl transition-all"
            />
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          <button
            onClick={onRandomPromptClick}
            disabled={isLoading}
            className="h-12 w-12 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white/70 disabled:opacity-50 transition-all duration-200 flex items-center justify-center"
            title="Случайный запрос"
          >
            <Dices className="h-5 w-5" />
          </button>
          
          <button
            onClick={onGenerateClick}
            disabled={isLoading}
            className="h-12 flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-light disabled:opacity-50 transition-all duration-200 shadow-lg shadow-emerald-500/20"
          >
            {isLoading ? (
              <span className="flex items-center gap-2 justify-center">
                <Loader2 className="h-5 w-5 animate-spin" />
                Генерирую...
              </span>
            ) : (
              "Сгенерировать"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;