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
  
  return (
    <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6 shadow-2xl overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />
      <div className="relative flex flex-col h-full">
        <h3 className="text-sm font-light tracking-wider text-white/50 mb-6 text-center uppercase">SKRT.POEHALI</h3>
        
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="w-36 h-36">
            <StatisticsDonutChart
              data={pieData}
              loading={loading}
              isMobile={isMobile}
            />
          </div>
        </div>
        
        <div className="space-y-2.5">
          <StatisticsCard
            title="УСПЕШНО"
            value={loading ? "—" : String(healthData?.today_stats?.success || 0)}
            loading={loading}
          />
          <StatisticsCard
            title="429 RL"
            value={loading ? "—" : String(healthData?.today_stats?.failed || 0)}
            loading={loading}
          />
          <StatisticsCard
            title="ВСЕГО ЗАПРОСОВ"
            value={loading ? "—" : String(healthData?.today_stats?.total || 0)}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}