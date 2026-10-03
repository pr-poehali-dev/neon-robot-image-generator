import { Input } from "@/components/ui/input";
import { Loader2, Dices, Sparkles } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { GeneratorFormProps, RATIOS } from "./types";

const GeneratorForm = ({ 
  prompt, 
  setPrompt, 
  apiKey, 
  setApiKey, 
  ratios,
  toggleRatio,
  magic,
  setMagic,
  stage,
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

          <div className="w-full">
            <label className="text-[10px] font-light text-white/40 uppercase tracking-widest mb-2 block">
              Формат{ratios.length > 1 && <span className="normal-case tracking-normal text-white/30"> · {ratios.length} варианта</span>}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {RATIOS.map((r) => {
                const [w, h] = r.split(":").map(Number);
                const k = 14 / Math.max(w, h);
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => toggleRatio(r)}
                    disabled={isLoading}
                    className={`h-12 rounded-xl border flex items-center justify-center gap-2 text-sm font-light transition-all disabled:opacity-50 ${
                      ratios.includes(r)
                        ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                        : "bg-white/[0.03] border-white/10 text-white/50 hover:bg-white/[0.06] hover:text-white/80"
                    }`}
                  >
                    <span
                      className="border border-current rounded-[3px]"
                      style={{ width: w * k, height: h * k }}
                    />
                    {r}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <label className="flex items-center justify-between gap-3 cursor-pointer">
              <span className="flex items-center gap-2">
                {stage === "magic" ? (
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                ) : (
                  <Sparkles className={`h-4 w-4 ${magic ? "text-emerald-400" : "text-white/40"}`} />
                )}
                <span className="text-sm text-white/80 font-light">Magic Prompt</span>
              </span>
              <Switch checked={magic} onCheckedChange={setMagic} disabled={isLoading} className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white/15" />
            </label>
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
                {stage === "magic" ? "Улучшаю промпт..." : "Генерирую..."}
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