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
    <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6 py-8 shadow-2xl mt-6 mb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />
      <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 h-64 p-5 flex items-center justify-center">
          <StatisticsDonutChart
            data={pieData}
            loading={loading}
            isMobile={isMobile}
          />
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-light tracking-wide text-white/90">Статистика</h3>
            <GenerationIndicator isGenerating={isGenerating} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatisticsCard
              title="Успешно"
              value={loading ? "Загрузка..." : String(healthData?.today_stats?.success || 0)}
              loading={loading}
            />
            <StatisticsCard
              title="429 RL"
              value={loading ? "Загрузка..." : String(healthData?.today_stats?.failed || 0)}
              loading={loading}
            />
            <StatisticsCard
              title="Всего запросов"
              value={loading ? "Загрузка..." : String(healthData?.today_stats?.total || 0)}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}