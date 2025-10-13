import { Card } from "@/components/ui/card";
import { useHealthData } from "./statistics/useHealthData";
import { StatisticsCard } from "./statistics/StatisticsCard";
import { StatisticsDonutChart } from "./statistics/StatisticsDonutChart";
import { GenerationIndicator } from "./statistics/GenerationIndicator";
import { useIsMobile } from "@/hooks/use-mobile";

export default function StatisticsPanel() {
  const { healthData, loading, error, pieData } = useHealthData();
  const isMobile = useIsMobile();

  if (error) {
    return (
      <Card className="p-4 bg-gray-900 border-gray-800 text-white">
        <div className="text-center text-red-400">{error}</div>
      </Card>
    );
  }

  const isGenerating = healthData?.gpu_server?.queue?.is_generating || false;
  const queueSize = healthData?.gpu_server?.queue?.queue_size || 0;
  const maxQueueSize = healthData?.gpu_server?.queue?.max_queue_size || 10;
  const queuePercentage = Math.min(100, Math.floor((queueSize / maxQueueSize) * 100));
  
  const status200 = healthData?.today_stats?.['200'] || 0;
  const status429 = healthData?.today_stats?.['429'] || 0;
  const status500 = healthData?.today_stats?.['500'] || 0;
  const total = healthData?.today_stats?.total || 0;
  
  console.log('Stats:', { status200, status429, status500, total });
  
  const percent200 = total > 0 ? (status200 / total) * 100 : 0;
  const percent429 = total > 0 ? (status429 / total) * 100 : 0;
  const percent500 = total > 0 ? (status500 / total) * 100 : 0;
  
  console.log('Percents:', { percent200, percent429, percent500 });
  
  return (
    <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-5 shadow-2xl overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />
      <div className="relative flex flex-col h-full justify-between">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h3 className="text-[11px] font-light tracking-widest text-white/40 uppercase">SKRT.POEHALI</h3>
          <div className="relative">
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-1000 ease-in-out ${
                isGenerating 
                  ? 'bg-emerald-500 animate-subtle-pulse shadow-lg shadow-emerald-500/50' 
                  : 'bg-gray-500 shadow-none'
              }`}
              style={{
                transitionProperty: 'background-color, box-shadow'
              }}
            />
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              <defs>
                <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(16, 185, 129)" />
                  <stop offset="100%" stopColor="rgb(5, 150, 105)" />
                </linearGradient>
                <linearGradient id="failedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(107, 114, 128)" />
                  <stop offset="100%" stopColor="rgb(75, 85, 99)" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="8"
              />
              {!loading && (
                <>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#successGradient)"
                    strokeWidth="8"
                    strokeDasharray={`${percent200 * 2.512} ${251.2 - percent200 * 2.512}`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#failedGradient)"
                    strokeWidth="8"
                    strokeDasharray={`${percent429 * 2.512} ${251.2 - percent429 * 2.512}`}
                    strokeDashoffset={-percent200 * 2.512}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeDasharray={`${percent500 * 2.512} ${251.2 - percent500 * 2.512}`}
                    strokeDashoffset={-(percent200 + percent429) * 2.512}
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-light text-white/90">{loading ? "—" : total}</div>
                <div className="text-[9px] text-white/40 uppercase tracking-wider">всего</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 mt-4">
          <div className="backdrop-blur-xl bg-white/[0.02] rounded-xl border border-white/5 px-4 py-3 transition-all duration-200">
            <h4 className="text-[10px] font-light tracking-wider text-white/40 uppercase mb-1">200 OK</h4>
            {loading ? (
              <div className="h-7 w-16 bg-white/5 rounded animate-pulse" />
            ) : (
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-light text-white/90 tracking-tight">{status200}</p>
                <span className="text-xs text-white/40">{percent200.toFixed(1)}%</span>
              </div>
            )}
          </div>
          <div className="backdrop-blur-xl bg-white/[0.02] rounded-xl border border-white/5 px-4 py-3 transition-all duration-200">
            <h4 className="text-[10px] font-light tracking-wider text-white/40 uppercase mb-1">429 RL</h4>
            {loading ? (
              <div className="h-7 w-16 bg-white/5 rounded animate-pulse" />
            ) : (
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-light text-white/90 tracking-tight">{status429}</p>
                <span className="text-xs text-white/40">{percent429.toFixed(1)}%</span>
              </div>
            )}
          </div>
          <div className="backdrop-blur-xl bg-white/[0.02] rounded-xl border border-white/5 px-4 py-3 transition-all duration-200">
            <h4 className="text-[10px] font-light tracking-wider text-white/40 uppercase mb-1">500 ERR</h4>
            {loading ? (
              <div className="h-7 w-16 bg-white/5 rounded animate-pulse" />
            ) : (
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-light text-white/90 tracking-tight">{status500}</p>
                <span className="text-xs text-white/40">{percent500.toFixed(1)}%</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}