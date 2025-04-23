import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";

interface HealthData {
  status: string;
  queues: {
    gen_queue: number;
    upload_queue: number;
  };
  uptime: number;
  today_stats: {
    success: number;
    failed: number;
    total: number;
  };
  prev_month_stats: {
    success: number;
    failed: number;
    total: number;
  };
}

const formatUptime = (seconds: number): string => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
  
  return `${days}д ${hours}ч ${minutes}м`;
};

const StatisticsPanel = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const fetchHealthData = async () => {
    try {
      const response = await fetch("https://skrt.poehali.dev/health");
      if (!response.ok) {
        throw new Error("Не удалось получить данные о состоянии сервиса");
      }
      const data = await response.json();
      setHealthData(data);
      setError(null);
    } catch (err) {
      setError("Ошибка при получении статистики");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthData();
    
    const intervalId = setInterval(() => {
      fetchHealthData();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return (
      <Card className="bg-red-50 border-red-200 mb-8">
        <CardContent className="p-4 text-center text-red-600">
          {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full mt-4 mb-8">
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="text-center text-sm font-medium text-gray-700 mb-3">
          Статистика использования сервиса
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard 
            title="Сегодня успешно" 
            value={loading ? null : healthData?.today_stats.success} 
            color="text-emerald-600"
            isMobile={isMobile}
          />
          <StatCard 
            title="Сегодня всего" 
            value={loading ? null : healthData?.today_stats.total} 
            color="text-blue-600"
            isMobile={isMobile}
          />
          <StatCard 
            title="В очереди" 
            value={loading ? null : healthData?.queues.gen_queue} 
            color="text-amber-600"
            isMobile={isMobile}
          />
          <StatCard 
            title="Аптайм" 
            value={loading ? null : formatUptime(healthData?.uptime || 0)} 
            color="text-purple-600"
            isText
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number | string | null;
  color: string;
  isText?: boolean;
  isMobile: boolean;
}

const StatCard = ({ title, value, color, isText = false, isMobile }: StatCardProps) => {
  return (
    <div className="bg-white rounded-md p-3 flex flex-col items-center justify-center shadow-sm border">
      <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-500 mb-1`}>{title}</div>
      {value === null ? (
        <Skeleton className="h-6 w-16" />
      ) : (
        <div className={`${color} ${isMobile ? 'text-lg' : 'text-xl'} font-semibold`}>
          {value}
        </div>
      )}
    </div>
  );
};

export default StatisticsPanel;
