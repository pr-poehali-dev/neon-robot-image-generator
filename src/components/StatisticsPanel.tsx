import { Card } from "@/components/ui/card";
import { useHealthData, formatUptime } from "./statistics/useHealthData";
import { StatisticsCard } from "./statistics/StatisticsCard";
import { StatisticsDonutChart } from "./statistics/StatisticsDonutChart";
import { GenerationIndicator } from "./statistics/GenerationIndicator";
import { useMobile } from "@/hooks/use-mobile";

export const StatisticsPanel = () => {
  const { healthData, loading, error, pieData } = useHealthData();
  const isMobile = useMobile();

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
    <Card className="p-6 bg-gray-900 border-gray-800 text-white mt-6 mb-10">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/3 h-56 p-5 flex items-center justify-center">
          <StatisticsDonutChart
            data={pieData}
            loading={loading}
            isMobile={isMobile}
          />
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Статистика</h3>
            <GenerationIndicator isGenerating={isGenerating} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatisticsCard
              title="Аптайм"
              value={loading ? "Загрузка..." : formatUptime(healthData?.uptime || 0)}
              loading={loading}
            />
            <StatisticsCard
              title="Запросы сегодня"
              value={loading ? "Загрузка..." : String(healthData?.today_stats?.total || 0)}
              loading={loading}
            />
            <StatisticsCard
              title="Запросов в очереди"
              value={loading ? "Загрузка..." : `${queueSize}/${maxQueueSize} (${queuePercentage}%)`}
              loading={loading}
              percentage={queuePercentage}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
