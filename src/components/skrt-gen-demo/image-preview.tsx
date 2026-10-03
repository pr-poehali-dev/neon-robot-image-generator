import { useEffect, useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { ImagePreviewProps } from "./types";

const PLACEHOLDER = "https://cdn.poehali.dev/files/bb454bce-5115-4d88-ac49-93654463d839.png";

const ImagePreview = ({ results, onImageError, isLoading }: ImagePreviewProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [results.length]);

  const current = results[active];
  const multi = results.length > 1;

  const open = () => {
    if (current?.url) window.open(current.url, "_blank");
  };

  return (
    <div
      className={`relative aspect-square w-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex items-center justify-center group ${current?.url ? "cursor-pointer" : ""}`}
      onClick={open}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {!current ? (
        isLoading ? (
          <Loader2 className="h-12 w-12 animate-spin text-emerald-400" />
        ) : (
          <img src={PLACEHOLDER} alt="Космонавт" className="w-full h-full object-cover" />
        )
      ) : current.loading ? (
        <Loader2 className="h-12 w-12 animate-spin text-emerald-400" />
      ) : current.url ? (
        <img
          src={current.url}
          alt="Сгенерированное изображение"
          className="w-full h-full object-contain"
          onError={onImageError}
        />
      ) : (
        <div className="flex flex-col items-center gap-2 px-8 text-center text-white/50">
          <AlertCircle className="h-8 w-8" />
          <span className="text-sm font-light">{current.error || "Не удалось сгенерировать"}</span>
        </div>
      )}

      {multi && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {results.map((r, i) => (
            <button
              key={r.ratio}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-12 w-12 rounded-lg overflow-hidden border flex items-center justify-center transition-all ${
                i === active ? "border-white" : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              {r.loading ? (
                <Loader2 className="h-4 w-4 animate-spin text-white/70" />
              ) : r.url ? (
                <img src={r.url} alt={r.ratio} className="w-full h-full object-cover" />
              ) : (
                <AlertCircle className="h-4 w-4 text-white/50" />
              )}
              <span className="absolute bottom-0 inset-x-0 text-[9px] leading-3 bg-black/60 text-white/90 text-center">
                {r.ratio}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
