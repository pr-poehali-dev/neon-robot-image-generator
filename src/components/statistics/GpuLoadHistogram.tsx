import { useEffect, useState } from "react";

interface GpuServer {
  url?: string;
  status?: string;
  queue?: {
    queue_size?: number;
    max_queue_size?: number;
    is_generating?: boolean;
  };
}

interface GpuLoadHistogramProps {
  servers: GpuServer[];
}

export function GpuLoadHistogram({ servers }: GpuLoadHistogramProps) {
  return (
    <div className="flex gap-2 items-end justify-center py-2 animate-in fade-in slide-in-from-top-2 duration-300">
      {servers.map((server, index) => (
        <ServerBar key={index} server={server} index={index} />
      ))}
    </div>
  );
}

function ServerBar({ server, index }: { server: GpuServer; index: number }) {
  const isDown = server?.status?.includes("down") || false;
  const isGenerating = server?.queue?.is_generating || false;
  const queueSize = server?.queue?.queue_size || 0;
  const maxQueueSize = server?.queue?.max_queue_size || 7;
  const targetBusy = isDown ? 0 : queueSize + (isGenerating ? 1 : 0);
  const loadRatio = targetBusy / maxQueueSize;

  const [renderedBusy, setRenderedBusy] = useState(0);

  useEffect(() => {
    if (renderedBusy === targetBusy) return;
    const direction = targetBusy > renderedBusy ? 1 : -1;
    const timer = setTimeout(() => {
      setRenderedBusy((prev) => prev + direction);
    }, 90);
    return () => clearTimeout(timer);
  }, [renderedBusy, targetBusy]);

  const cells = Array.from({ length: maxQueueSize });

  return (
    <div
      className="flex flex-col items-center gap-1"
      title={isDown ? "down" : `${targetBusy}/${maxQueueSize}`}
    >
      <div className="flex flex-col-reverse gap-[3px]">
        {cells.map((_, i) => {
          const isBusy = i < renderedBusy;
          const colorClass = isDown
            ? "bg-cyan-400/30"
            : isBusy
            ? loadRatio >= 0.85
              ? "bg-red-500 shadow-md shadow-red-500/40"
              : loadRatio >= 0.6
              ? "bg-amber-400 shadow-md shadow-amber-400/40"
              : "bg-emerald-500 shadow-md shadow-emerald-500/40"
            : "bg-white/10";
          return (
            <div
              key={i}
              className={`w-3 h-[5px] rounded-[1px] transition-all duration-300 ease-out ${colorClass} ${
                isBusy && i === renderedBusy - 1 && isGenerating
                  ? "animate-subtle-pulse"
                  : ""
              }`}
              style={{
                transform: isBusy ? "scaleY(1)" : "scaleY(0.6)",
                opacity: isBusy ? 1 : 0.5,
              }}
            />
          );
        })}
      </div>
      <div className="text-[8px] text-white/30 font-light tracking-wider">
        {index + 1}
      </div>
    </div>
  );
}

export default GpuLoadHistogram;
