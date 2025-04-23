import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { StatisticsCard } from "./statistics/StatisticsCard";
import { StatisticsDonutChart } from "./statistics/StatisticsDonutChart";
import { useHealthData, formatUptime } from "./statistics/useHealthData";
import { GenerationIndicator } from "./statistics/GenerationIndicator";

const StatisticsPanel = () => {
  const { healthData, loading, error, pieData } = useHealthData();
  const isMobile = useIsMobile();

  if (error) {
    return (
      <Card className="bg-red-950 border-red-800 mb-8 text-red-200">
        <CardContent className="p-4 text-center">
          {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full mt-6 mb-10">
      <div className="bg-gray-950 rounded-lg p-6 shadow-md border border-gray-800">
        <h3 className="text-center text-sm font-medium text-gray-300 mb-3">
          Статистика использования сервиса
        </h3>
        
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-[1fr_2fr] gap-6'}`}>
          {/* Левая колонка с пай-чартом */}
          <div className="bg-gray-900 rounded-lg p-5 flex items-center justify-center border border-gray-800 h-56">
            <StatisticsDonutChart 
              data={pieData}
              loading={loading}
              isMobile={isMobile}
            />
          </div>
          
          {/* Правая колонка с карточками статистики */}
          <div className="grid grid-cols-2 gap-3">
            <StatisticsCard 
              title="Сегодня успешно" 
              value={loading ? null : healthData?.today_stats?.success ?? 0} 
              color="text-emerald-400"
              isMobile={isMobile}
            />
            <StatisticsCard 
              title="Сегодня всего" 
              value={loading ? null : healthData?.today_stats?.total ?? 0} 
              color="text-blue-400"
              isMobile={isMobile}
            />
            <StatisticsCard 
              title="В очереди" 
              value={loading ? null : healthData?.gpu_server?.queue?.queue_size ?? 0} 
              color="text-amber-400"
              isMobile={isMobile}
            />
            <StatisticsCard 
              title="Аптайм" 
              value={loading ? null : formatUptime(healthData?.uptime || 0)} 
              color="text-purple-400"
              isText
              isMobile={isMobile}
            />
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500">
          <GenerationIndicator healthData={healthData} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPanel;
